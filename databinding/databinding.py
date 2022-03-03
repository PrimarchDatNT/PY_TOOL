import os
import re
import xml.etree.ElementTree as ET

ROOT_SMALI_DIR = 'C:/Users/DatNT/Desktop/apktool/apk-tool/projects/com.muse.core'

BINDING_SMALI_DIR = 'C:/Users/DatNT/Desktop/apktool/apk-tool/projects/com.muse.core/code/smali/com/commsource/beautyplus/f0'

LAYOUT_DIR = 'G:/ANDROID_PROJECT/MUSE_NEW/app/src/main/res/layout/'

BIDNING_CLASS_PATH = 'Lcom/mtfacebook/camerast/databinding'

K_ORG_CLASS_PATH = 'org_class_path'
K_ORG_SOURCE_JAVA = 'org_source_java'
K_CONTAIN_DATA_BINDING = 'is_contain_data_binding'
K_BINDING_CLASS_PATH = 'binding_class_path'
K_LAYOUT_XML = 'layout_xml'
K_ORG_INSTANCE_INIT = 'k_org_instance_init'


def camel_to_case(snake_str):
    components = snake_str.split('_')
    # We capitalize the first letter of each component except the first one
    # with the 'title' method and join them together.
    return components[0] + ''.join(x.title() for x in components[1:])


def camel_to_snake(name):
    name = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', name).lower()


def find_binding_id(xml):
    if not os.path.isfile(xml):
        return []
    ids = []
    tree = ET.parse(xml)
    for t in tree.iter():
        for val in t.attrib.values():
            if str(val).__contains__('@+id/'):
                if ids.__contains__(val):
                    continue
                id = camel_to_case(val.replace('@+id/', ''))
                ids.append(id)
    ids.sort()
    return ids


def list_smali(path):
    files = []
    data = []

    for r, d, f in os.walk(path):
        for file in f:
            if '.smali' in file:
                files.append(os.path.join(r, file))

    for file in files:
        with open(file, 'r') as smali:
            lines = smali.readlines()
            smali.close()

        metadata = {}

        if not lines[1].__contains__('.super Landroidx/databinding/ViewDataBinding;'):
            continue

        if lines[0].startswith('.class public abstract'):
            metadata[K_ORG_CLASS_PATH] = lines[0].replace('.class public abstract ', '').replace('\n', '')

        elif lines[0].startswith('.class public'):
            metadata[K_ORG_CLASS_PATH] = lines[0].replace('.class public ', '').replace('\n', '')

        if (lines[2]).startswith('.source') and not lines[2].__contains__('.java'):
            pass

        metadata[K_ORG_SOURCE_JAVA] = lines[2].split('"')[1]
        metadata[K_BINDING_CLASS_PATH] = BIDNING_CLASS_PATH + '/' + lines[2].split('"')[1].replace('.java', ';')
        print('---------')
        layout = camel_to_snake(metadata[K_ORG_SOURCE_JAVA].replace('Binding.java', ''))
        metadata[K_LAYOUT_XML] = layout
        binding_id = find_binding_id(LAYOUT_DIR + layout + '.xml')
        if len(binding_id) == 0:
            continue

        start_constructor_index = -1
        end_constructor_index = -1

        for l in lines[3:]:
            if l.__contains__('.annotation runtime Landroidx/databinding/Bindable;'):
                metadata[K_CONTAIN_DATA_BINDING] = True

            if l.__contains__('constructor <init>'):
                start_constructor_index = lines.index(l)

            if l.__contains__('.end method') and start_constructor_index > -1:
                end_constructor_index = lines.index(l)
                break

        if start_constructor_index == -1 and end_constructor_index == -1:
            continue

        print(metadata[K_ORG_SOURCE_JAVA] + ' --- ' + metadata[K_LAYOUT_XML])

        metadata[K_ORG_INSTANCE_INIT] = {}
        index = 0
        for line in lines[start_constructor_index: end_constructor_index]:
            if line.__contains__(metadata[K_ORG_CLASS_PATH]) and line.__contains__('->') and line.__contains__(':L'):
                org_instance = line[line.index(metadata[K_ORG_CLASS_PATH]):].replace('\n', '')

                # org_instance_name = org_instance.replace(metadata[K_ORG_CLASS_PATH], '').replace('->', '').split(':')[0]
                # print(org_instance_name + ' = ' + binding_id[index])
                org_instance_class = org_instance.replace(metadata[K_ORG_CLASS_PATH], '').replace('->', '').split(':')[1]

                binding_instance = metadata[K_BINDING_CLASS_PATH] + '->' + binding_id[index] + ':' + org_instance_class
                metadata[K_ORG_INSTANCE_INIT][org_instance] = binding_instance

                index += 1

        data.append(metadata)

    return data


def change_code(rootpath):
    files = []
    data = list_smali(BINDING_SMALI_DIR)

    for r, d, f in os.walk(rootpath):
        for file in f:
            if '.smali' in file:
                file_path = str(os.path.join(r, file)).replace('\\', '/')
                if str(file_path).__contains__(BINDING_SMALI_DIR):
                    continue
                files.append(file_path)

    for path in files:
        with open(path, 'r') as file:
            lines = file.readlines()
            file.close()

        index = 0
        for line in lines:
            for metadata in data:
                if line.__contains__(metadata[K_ORG_CLASS_PATH]):
                    for key in dict(metadata[K_ORG_INSTANCE_INIT]).keys():
                        if line.__contains__(key):
                            lines[index] = line.replace(key, dict(metadata[K_ORG_INSTANCE_INIT])[key])

                    lines[index] = line.replace(metadata[K_ORG_CLASS_PATH], metadata[K_BINDING_CLASS_PATH])

            index += 1

        with open(path, 'w') as smali:
            smali.writelines(lines)
            smali.close()

    print('--- All Done ---')


if __name__ == '__main__':
    # list_smali(BINDING_SMALI_DIR)
    change_code(ROOT_SMALI_DIR)

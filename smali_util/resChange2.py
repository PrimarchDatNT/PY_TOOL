import os
import xml.etree.ElementTree as ElementTree

PACKAGE_NAME = 'Lcom/res/provider/Res'


def change_code(src_path, iddata: dict):
    if not os.path.isfile(src_path):
        return

    with open(src_path, 'r') as smali:
        source_code = smali.readlines()
        smali.close()

    if source_code is None:
        return

    if len(source_code) == 0:
        return

    modify_data = []
    src_class_name = source_code[0].strip()
    prefix_class_name = src_class_name[:src_class_name.index('L')]
    src_class_name = src_class_name.replace(prefix_class_name, '')
    needchange = False

    for codeline in source_code:
        if match_change_condition(codeline):
            variable_name = codeline[:codeline.index('=')]
            value_id = codeline[codeline.index('0x7f'):].replace('\n', '')
            property_for_id = iddata.get(value_id)
            if property_for_id is not None:
                needchange = True
                index = source_code.index(codeline)
                source_code[index] = variable_name.__add__('\n')
                modify_source_line = get_modify_source_line(property_for_id)
                entrynode = get_modify_data(src_class_name=src_class_name, modify_source_line=modify_source_line,
                                            variable_name=variable_name.replace('.field public static final ', ''))
                modify_data.append(entrynode)

    if not needchange:
        return
    modify_lines = ['\n', '.method static constructor <clinit>()V', '\n', '   .registers 1']
    for modifientry in modify_data:
        modify_lines.append('\n')
        modify_lines.append('   sget-object v0, '.__add__(modifientry['modify_source_line']))
        modify_lines.append('\n')
        modify_lines.append('   sput-object v0, '.__add__(modifientry['src_variable_name_line']))
        modify_lines.append('\n')
    modify_lines.append('   return-void')
    modify_lines.append('\n')
    modify_lines.append('.end method')
    source_code.extend(modify_lines)
    with open(src_path, 'w') as smali:
        smali.writelines(source_code)
        smali.close()


def get_modify_data(src_class_name, modify_source_line, variable_name):
    return {'src_variable_name_line': src_class_name.__add__('->').__add__(variable_name),
            'modify_source_line': modify_source_line}


def get_modify_source_line(param_data: dict):
    return PACKAGE_NAME \
        .__add__(param_data['type'].upper()) \
        .__add__(';->') \
        .__add__(param_data['name']) \
        .__add__(':I')


def match_change_condition(param):
    return param.__contains__(':I = 0x7f') and param.__contains__('.field public static final ')


def get_ids_data():
    id_data = {}
    for i in ElementTree.parse('public.xml').getroot().findall('public'):
        id_data[i.attrib['id']] = {'name': i.attrib['name'].replace('.', '_'), 'type': i.attrib['type']}
    return id_data


def getchangelist():
    change_list = []
    for raw in open('log_paths', 'r').readlines():
        change_list.append(raw.replace('\\', '/').replace('\n', ''))
    return change_list


if __name__ == '__main__':
    for file in getchangelist():
        change_code(file, get_ids_data())
        print('Changed: '.__add__(file))
    print('Done')

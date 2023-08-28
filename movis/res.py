import os
import xml.etree.ElementTree as ET
import model as Model

# ---WORKSPACE DIR---
ROOT_DIR = 'D:/PY_PROJECT/TOOL/movis'
RES_DIR = 'D:/PY_PROJECT/TOOL/movis/resource'
PUBLIC_PATH = 'log/public.xml'
# ------------------------------------------------------------------


# ---INIT CACHE DATA---
res_id = {}
SMALI_FILE_MAPPER = {}
RESOUCE_DATA = []
CHECK_ID = []
CHECKED_FILE = []
# ------------------------------------------------------------------


# ---TYPE MAPPER---
ResANIM = 'anim'
ResATTR = 'animator'
ResARRAY = 'array'
ResBOOL = 'bool'
ResCOLOR = 'color'
ResDIMEN = 'dimen'
ResDRAWABLE = 'anim'
ResFONT = 'font'
ResID = 'id'
ResMIPMAP = 'mipmap'
ResPLURALS = 'plurals'
ResLAYOUT = 'layout'
ResRAW = 'raw'
ResSTRING = 'string'
ResSTYLE = 'style'
ResSTYLEABLE = 'styleable'
ResXML = 'xml'
ResVALUE = 'values'


# ------------------------------------------------------------------


def get_file_name_without_extension(file_path):
    file_name = os.path.basename(file_path)
    file_name_without_extension = os.path.splitext(file_name)[0]
    return file_name_without_extension


def get_parent_directory_name(file_path):
    parent_directory = os.path.dirname(file_path)
    parent_directory_name = os.path.basename(parent_directory)
    return parent_directory_name


def get_file_extension(file_path):
    _, file_extension = os.path.splitext(file_path)
    return file_extension


if __name__ == '__main__':
    for r, d, f in os.walk(ROOT_DIR):
        for file in f:
            if '.smali' in file:
                typekey = file.replace('R$', '').replace('.smali', '')
                SMALI_FILE_MAPPER[typekey] = file

    # print(SMALI_FILE_MAPPER)
    tree = ET.parse(PUBLIC_PATH)
    root = tree.getroot()
    for i in root.findall('public'):
        if res_id.get(i.attrib['type']) is None:
            res_id[i.attrib['type']] = {}
            res_id[i.attrib['type']][i.attrib['id']] = i.attrib['name']
        else:
            res_id[i.attrib['type']][i.attrib['id']] = i.attrib['name']

    for typekey in res_id:
        smalicode = open(SMALI_FILE_MAPPER[typekey]).readlines()
        for line in smalicode:
            if line.__contains__(':I'):
                orgname = line[:line.index(':')].replace('.field public static final ', '')
                hexid = line[(line.index('=') + 1):].strip()
                encrypname = res_id[typekey][hexid]
                CHECK_ID.append(hexid)
                RESOUCE_DATA.append(Model.ResourceData(org=orgname, encrypt=encrypname, hid=hexid, restype=typekey))

    # ---create mapper---
    # for data in RESOUCE_DATA:
    #     print(data.restype + ': ' + data.encrypt + ' -> ' + data.org)
    # ------------------------------------------------------------------

    # ---check unknow id---
    # for typekey in res_id:
    #     for hexid in res_id[typekey]:
    #         if not CHECK_ID.__contains__(hexid):
    #             print(hexid)
    # ------------------------------------------------------------------

    for r, d, f in os.walk(RES_DIR):
        for file in f:
            src_file_path = (os.path.join(r, file).replace('\\', '/'))
            # print('browsing: ' + src_file_path)
            if src_file_path.__contains__(ResVALUE):
                pass
            else:
                print()
                parentfile = get_parent_directory_name(src_file_path)
                filename = get_file_name_without_extension(src_file_path)
                for data in RESOUCE_DATA:
                    if parentfile.__contains__(data.restype) and filename.replace('.9', '') == data.encrypt:
                        dst_file_path = r.replace('\\', '/') + '/' + data.org + get_file_extension(src_file_path)
                        if filename.__contains__('.9'):
                            dst_file_nine_path = r.replace('\\', '/') + '/' + data.org + '.9' + get_file_extension(
                                src_file_path)
                            print(file + ' -> ' + dst_file_nine_path)
                            os.rename(src_file_path, dst_file_nine_path)
                        else:
                            print(file + ' -> ' + dst_file_path)
                            os.rename(src_file_path, dst_file_path)
                        CHECKED_FILE.append(file)
                        break

print('---Done---')

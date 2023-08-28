import os
import xml.etree.ElementTree as ET
import model as Model


# ---WORKSPACE DIR---
ROOT_DIR = 'D:/PY_PROJECT/TOOL/movis'
RES_DIR = 'D:/PY_PROJECT/TOOL/movis/resource'
SMALI_DIR = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/com.videomaker.movis/code'
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
ResANIMATOR = 'animator'
ResATTR = 'attr'
ResARRAY = 'array'
ResBOOL = 'bool'
ResCOLOR = 'color'
ResDIMEN = 'dimen'
ResDRAWABLE = 'drawable'
ResFONT = 'font'
ResID = 'id'
ResINTEGER = 'integer'
ResMIPMAP = 'mipmap'
ResPLURALS = 'plurals'
ResLAYOUT = 'layout'
ResRAW = 'raw'
ResSTRING = 'string'
ResSTYLE = 'style'
ResSTYLEABLE = 'styleable'
ResXML = 'xml'
ResVALUE = 'values'
TYPE_ARRAY = [ResANIM,
              # ResATTR,
              ResARRAY,
              ResBOOL,
              ResCOLOR,
              ResDIMEN,
              ResDRAWABLE,
              ResID,
              ResINTEGER,
              ResMIPMAP,
              ResPLURALS,
              ResLAYOUT,
              ResSTRING,
              ResSTYLE,
              ResSTYLEABLE]
ENCYP_TO_ORG_RES_MAPPER = {}


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
    #     print(data.restype + ': ' + data.encrypt + ' -> ' + data.org + ' hexid: ' + data.hid)
    # ------------------------------------------------------------------

    # ---check unknow id---
    # for typekey in res_id:
    #     for hexid in res_id[typekey]:
    #         if not CHECK_ID.__contains__(hexid):
    #             print(hexid)
    # ------------------------------------------------------------------

    for data in RESOUCE_DATA:
        keypair = data.hid
        ENCYP_TO_ORG_RES_MAPPER[keypair] = data
    #
    # for r, d, f in os.walk(SMALI_DIR):
    #     for file in f:
    #         if '.smali' in file:
    #             src_file_path = (os.path.join(r, file).replace('\\', '/'))
    #             with open(src_file_path, encoding='utf-8') as smaliFile:
    #                 codecontent = smaliFile.readlines()
    #                 smaliFile.close()
    #             for line in codecontent:
    #                 if line.__contains__('0x7f'):
    #                     CHECKED_FILE.append(src_file_path)
    #                     break
    #
    # for f in CHECKED_FILE:
    #     with open(f, encoding='utf-8') as smaliFile:
    #         codecontent = smaliFile.readlines()
    #         smaliFile.close()
    #     isMatch = False
    #     for line in codecontent:
    #         for data in RESOUCE_DATA:
    #             if line.__contains__(data.hid):
    #                 isMatch = True
    #                 print(data.restype + ': ' + data.encrypt + ' -> ' + data.org + ' hexid: ' + data.hid)
    #     if isMatch:
    #         print(f)
    #         print('----------')

    list_hex_id = []
    with open('data2.log', encoding='utf-8') as datafile:
        for line in datafile.readlines():
            if line.__contains__('0x7f'):
                list_hex_id.append(line[line.index('0x7f'):].strip())

    with open('data.log', encoding='utf-8') as logfile:
        listfile = logfile.readlines()
        logfile.close()

    for file in listfile:
        with open(file.strip(), encoding='utf-8') as smaliFile:
            codecontent = smaliFile.readlines()
            smaliFile.close()

        for line in codecontent:
            if line.__contains__('0x7f'):
                for hexid in list_hex_id:
                    if line.__contains__(hexid):
                        orgdata = ENCYP_TO_ORG_RES_MAPPER[hexid]
                        modify_index = codecontent.index(line)
                        replace_content = 'Lcom/resouce/provider/Res' + str(
                            orgdata.restype).upper() + ';->' + orgdata.org + ':I'
                        print(line.replace('const', 'sget').replace(hexid, replace_content))
                        codecontent[modify_index] = line.replace('const', 'sget').replace(hexid, replace_content)
                        break

        with open(file.strip(), 'w', encoding='utf-8') as srcfile:
            srcfile.writelines(codecontent)
            srcfile.close()

print('---Done---')

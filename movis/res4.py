import os
import re
import xml.etree.ElementTree as ET
import movis.model as Model

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
        keypair = data.restype + '---' + data.encrypt
        ENCYP_TO_ORG_RES_MAPPER[keypair] = data.org

    for r, d, f in os.walk(RES_DIR):
        for file in f:
            if '.xml' in file:
                src_file_path = (os.path.join(r, file).replace('\\', '/'))
                with open(src_file_path, encoding='utf-8') as smaliFile:
                    codecontent = smaliFile.readlines()
                    smaliFile.close()
                mark_index = 0
                for line in codecontent:
                    matches = re.findall(r'@([^/]*)/', line)
                    if len(matches) > 0:
                        for m in matches:
                            if res_id.__contains__(m):
                                regex = '@' + m + "/(\w+)"
                                for encrypname in re.findall(regex, line):
                                    keypair = m + '---' + encrypname
                                    if ENCYP_TO_ORG_RES_MAPPER.__contains__(keypair):
                                        orgname = ENCYP_TO_ORG_RES_MAPPER[keypair]
                                        src_change = '@' + m + '/' + encrypname
                                        dst_change = '@' + m + '/' + orgname
                                        codecontent[mark_index] = line.replace(src_change, dst_change)
                                        print('@' + m + '/' + encrypname + ' -> ' + '@' + m + '/' + orgname)

                    mark_index += 1

                with open(src_file_path, 'w', encoding='utf-8') as srcfile:
                    srcfile.writelines(codecontent)
                    srcfile.close()

print('---Done---')

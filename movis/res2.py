import os
import re
import xml.etree.ElementTree as ET

# ---WORKSPACE DIR---
ROOT_DIR = 'D:/PY_PROJECT/TOOL/movis'
RES_DIR = 'D:/PY_PROJECT/TOOL/movis/resource'
PUBLIC_PATH = 'public.xml'
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


class ResourceData:
    def __init__(self, org, encrypt, hid, restype):
        self.org = org
        self.encrypt = encrypt
        self.hid = hid
        self.restype = restype


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
                RESOUCE_DATA.append(ResourceData(org=orgname, encrypt=encrypname, hid=hexid, restype=typekey))

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

    for data in RESOUCE_DATA:
        keypair = data.restype + '---' + data.encrypt
        ENCYP_TO_ORG_RES_MAPPER[keypair] = data.org

    for r, d, f in os.walk(RES_DIR):
        for file in f:
            src_file_path = (os.path.join(r, file).replace('\\', '/'))
            if src_file_path.__contains__('.xml'):
                needchange = False

                with open(src_file_path, encoding='utf-8') as xmlres:
                    codecontent = xmlres.readlines()
                    xmlres.close()

                for line in codecontent:
                    matches = re.findall(r' name="([^"]*)"', line)
                    for encrypname in matches:
                        for typekey in TYPE_ARRAY:
                            if file.__contains__(typekey):
                                keypair = typekey + '---' + encrypname
                                if ENCYP_TO_ORG_RES_MAPPER.__contains__(keypair):
                                    # print(keypair)
                                    # print(src_file_path)
                                    needchange = True
                                    modifi_index = codecontent.index(line)
                                    line = line.replace('name="' + encrypname + '"',
                                                        'name="' + ENCYP_TO_ORG_RES_MAPPER[keypair] + '"')
                                    codecontent[modifi_index] = line
                                    # print(line.strip())

                if not needchange:
                    pass

                with open(src_file_path, 'w', encoding='utf-8') as srcfile:
                    srcfile.writelines(codecontent)
                    srcfile.close()

print('---Done---')
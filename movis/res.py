import os
import xml.etree.ElementTree as ET

ROOT_DIR = 'D:/PY_PROJECT/TOOL/movis'
res_id = {}
SMALI_FILE_MAPPER = {}
PUBLIC_PATH = 'public.xml'
RESOUCE_DATA = []
CHECK_ID = []


class ResourceData:
    def __init__(self, org, encrypt, hid, restype):
        self.org = org
        self.encrypt = encrypt
        self.hid = hid
        self.restype = restype


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
    # check unknow id
    # for typekey in res_id:
    #     for hexid in res_id[typekey]:
    #         if not CHECK_ID.__contains__(hexid):
    #             print(hexid)

print('Done')

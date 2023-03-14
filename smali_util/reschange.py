import os
import xml.etree.ElementTree as ET

path = 'C:/Users/DatNT/Desktop/apktool/apk-tool/projects/com.muse.core'
packagename = 'Lcom/res/unit/Res'

files = []
xml_path = None


def changeCode(p):
    with open(p, 'r') as smali:
        code = smali.readlines()
        smali.close()
    for cline in code:
        if matchId(cline):
            for c in cline.split(' '):
                if c.__contains__('0x7f'):
                    propertyid = res_id.get(c.replace('\n', ''))
                    if propertyid is not None:
                        index = code.index(cline)
                        code[index] = cline.replace('const', 'sget').replace(c.replace('\n', ''), packagename + propertyid['type'].upper() + ';->' + propertyid['name'] + ':I')
                    break
    if code is not None:
        with open(p, 'w') as smali:
            smali.writelines(code)
            smali.close()


def matchId(s):
    return s.__contains__('0x7f') and s.__contains__('const ') and not s.__contains__('->')


for r, d, f in os.walk(path):
    for file in f:
        if 'public.xml' in file:
            xml_path = os.path.join(r, file)
        if '.smali' in file:
            files.append(os.path.join(r, file))

res_id = {}

tree = ET.parse(xml_path.replace('\\', '/'))
root = tree.getroot()
for i in root.findall('public'):
    res_id[i.attrib['id']] = {'name': i.attrib['name'], 'type': i.attrib['type']}

for f in files:
    changeCode(f)

print('Done')

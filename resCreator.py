import os
import xml.etree.ElementTree as ET

path = 'C:/Users/DatNT/Desktop/apktool/apk-tool/projects/com.muse.core'

xml_path = None
res_id = {}

for r, d, f in os.walk(path):
    for file in f:
        if 'public.xml' in file:
            xml_path = os.path.join(r, file)
            break

tree = ET.parse(xml_path.replace('\\', '/'))
root = tree.getroot()
for i in root.findall('public'):
    if res_id.get(i.attrib['type']) is None:
        res_id[i.attrib['type']] = []
        res_id[i.attrib['type']].append('public static final int ' + i.attrib['name'] + ' = R.' + i.attrib['type'] + '.' + i.attrib['name'] + ';')
    else:
        res_id[i.attrib['type']].append('public static final int ' + i.attrib['name'] + ' = R.' + i.attrib['type'] + '.' + i.attrib['name'] + ';')

for key in res_id:
    content = 'public class Res' + str(key).upper() + ' {\n'
    for line in res_id[key]:
        content += line
        content += '\n'
    content += '}'
    file = open('Res' + str(key).upper() + '.java', 'w', encoding='utf-8')
    file.writelines(content)
    file.close()

print('Done')

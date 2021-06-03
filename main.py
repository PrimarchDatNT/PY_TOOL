import xml.etree.ElementTree as ET

tree = ET.parse('D:/en.xml')
root = tree.getroot()
lenCode = ["en", "zh", "fr", "de", "el", "hi", "in", "it", "ja", "ko", "ms", "fa", "pl", "pt", "ru", "es", "th", "tr",
           "uk", "vi"]

header = "name,en,zh,fr,de,el,hi,in,it,ja,ko,ms,fa,pl,pt,ru,es,th,tr,uk,vi"

line = "name,en,zh,fr,de,el,hi,in,it,ja,ko,ms,fa,pl,pt,ru,es,th,tr,uk,vi\n"

col = 1
row = 2

for t in root.findall('string'):
    line += t.attrib.get('name')
    line += ','
    col = 1

    for k in lenCode:
        col += 1

        if col == 2:
            line += '"' + t.text + '",'
        else:
            line += '=GOOGLETRANSLATE(B' + str(row) + ';"en";"' + k + '"),'

    line += '\n'
    row += 1

print(line)

with open("Output.csv", "w") as text_file:
    text_file.write(line)

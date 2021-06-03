import csv

lenCode = ["name", "en", "zh", "fr", "de", "el", "hi", "in", "it", "ja", "ko", "ms", "fa", "pl", "pt", "ru", "es", "th",
           "tr", "uk", "vi"]

data = {}

for d in lenCode:
    if d != "name":
        data[d] = '<resources>\n'
    else:
        data[d] = ''

with open('result.csv', encoding="utf8", mode='r') as file:
    reader = csv.reader(file, delimiter=',')

    for row in reader:
        if reader.line_num > 1:
            for i in range(len(row)):
                for key in lenCode:
                    if i == lenCode.index(key):
                        data[key] += '<string name="' + row[0] + '">' + row[i] + '</string>\n'

for key in lenCode:
    if key != "name":
        data[key] += '</resources>'
        print(data[key] + '\n')
        if data[key] is not None:
            out = open('value-' + key + '.xml', 'w', encoding="utf-8")
            out.writelines(data[key])
            out.close()

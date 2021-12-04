import csv

with open('C:/Users/DatNT/Desktop/appRes/string/muse.csv', encoding="utf8", mode='r') as file:
    reader = csv.reader(file, delimiter=',')
    for row in reader:
        for r in row:
            print(r)
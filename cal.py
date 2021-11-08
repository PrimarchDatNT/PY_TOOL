idp1 = []
idp2 = []

with open('p1', 'r') as p1:
    lines = p1.readlines()
    for line in lines:
        idp1.append(line[:2])

with open('p2', 'r') as p2:
    lines = p2.readlines()
    for line in lines:
        idp2.append(str(line)[line.find('=') + 1: line.find(';')])

for i in range(len(idp1)):
    print(str(idp1[i] + ' = ' + idp2[i]))

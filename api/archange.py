import json
from pathlib import Path

api_path = 'AR_V2.json'
api_res = 'C:/Users/DatNT/Desktop/appRes/api/res'
domain = 'https://d2hyio9ps90xn9.cloudfront.net/material/ar/'

changelist = []

imgs = Path(api_res).iterdir()
for img in imgs:
    changelist.append(img.name)

f = open(api_path, 'r', encoding='utf-8')
data = json.load(f)

list_ar = data['data']['list']

remove_key = []

for key, value in list_ar.items():
    res_name = str(key + '.png')
    if changelist.__contains__(str(key + '.png')):
        value['icon'] = domain + res_name
    else:
        remove_key.append(key)

for rm in remove_key:
    del list_ar[rm]


with open('D:/AppTranslater/api/AR_CHANGE_V2.json', 'w', encoding='utf-8') as outjson:
    json.dump(data, outjson)


print(data)

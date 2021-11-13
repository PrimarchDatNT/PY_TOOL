import json
from pathlib import Path

api_path = 'AR_V3.json'
api_res = 'C:/Users/DatNT/Desktop/appRes/api/res'
domain = 'https://rs.videoshow.mobi/v2/muse/ar/'

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

print(data)

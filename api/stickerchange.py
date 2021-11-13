import json

api_path = 'STICKER.json'
domain = 'https://d2hyio9ps90xn9.cloudfront.net/material/sticker/'
olddomain = 'https://rs.videoshow.mobi/v2/muse/stickers/'

f = open(api_path, 'r', encoding='utf-8')
data = json.load(f)

for d in data['data']:
    for sticker_pack in d['sticker_pack']:
        icon = str(sticker_pack['icon']).replace(olddomain, domain)
        cover_icon = str(sticker_pack['cover_icon']).replace(olddomain, domain)
        sticker_pack['icon'] = icon
        sticker_pack['cover_icon'] = cover_icon

with open('STICKER_CHANGE.json', 'w', encoding='utf-8') as outjson:
    json.dump(data, outjson)

print('Succes')

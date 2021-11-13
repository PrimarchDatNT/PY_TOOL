import json

api_path = 'HOME.json'
domain = 'https://d2hyio9ps90xn9.cloudfront.net/material/home/'
olddomain = 'https://rs.videoshow.mobi/v2/muse/home/'

f = open(api_path, 'r', encoding='utf-8')
data = json.load(f)

for d in data['data']['modules']:
    for material_list in d['material_list']:
        picture = str(material_list['picture']).replace(olddomain, domain)

        if picture.__contains__('/home/tool/'):
            if picture.__contains__('Remove'):
                picture = picture.replace('tool', 'removeobject')

            if picture.__contains__('Perfect'):
                picture = picture.replace('tool', 'perfectbody')

            if picture.__contains__('Makeover'):
                picture = picture.replace('tool', 'magicmakeover')

        material_list['picture'] = picture


with open('HOME_CHANGE.json', 'w', encoding='utf-8') as outjson:
    json.dump(data, outjson)

print('Succes')

import json

api_path = 'FILTER.json'
domain = 'https://d2hyio9ps90xn9.cloudfront.net/material/filter/outer/'
olddomain = 'https://rs.videoshow.mobi/v2/muse/filter/'

f = open(api_path, 'r', encoding='utf-8')
data = json.load(f)

for d in data['data']:
    for filter_pack_list in d['filter_pack_list']:
        for img in filter_pack_list['filter_list']:
            print(img['inner_image'])
            link = str(img['inner_image']).replace(olddomain, domain)
            img['inner_image'] = link
            img['image'] = link
        filter_pack_list['icon'] = filter_pack_list['filter_list'][0]['image']

with open('FILTER_CHANGE.json', 'w', encoding='utf-8') as outjson:
    json.dump(data, outjson)

print('Succes')

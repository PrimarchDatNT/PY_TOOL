import json

api_path = 'MAKEUP_TOOL.json'
domain = 'https://d2hyio9ps90xn9.cloudfront.net/material/tools/'
olddomain = 'https://rs.videoshow.mobi/v2/muse/tools/'

f = open(api_path, 'r', encoding='utf-8')
data = json.load(f)

for d in data['data']:
    for single_makeup_list in d['single_makeup_list']:
        link = str(single_makeup_list['icon']).replace(olddomain, domain)
        single_makeup_list['icon'] = link
    for style in d['style']:
        icon = str(style['icon']).replace(olddomain, domain)
        style['icon'] = icon

with open('MAKEUP_TOOL_CHANGE.json', 'w', encoding='utf-8') as outjson:
    json.dump(data, outjson)

print('Succes')

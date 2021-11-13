import json

api_path = 'LOOK.json'
domain = 'https://d2hyio9ps90xn9.cloudfront.net/material/looks/'
olddomain = 'https://rs.videoshow.mobi/v2/muse/looks/'

f = open(api_path, 'r', encoding='utf-8')
data = json.load(f)

for d in data['data']:
    icon = str(d['icon']).replace(olddomain, domain)
    d['icon'] = icon
    print(icon)


with open('LOOK_CHANGE.json', 'w', encoding='utf-8') as outjson:
    json.dump(data, outjson)

print('Succes')

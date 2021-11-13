import json

api_path = 'doodle_pens.json'
api_res = 'C:/Users/DatNT/Desktop/appRes/api/pen'
domain = 'https://d2hyio9ps90xn9.cloudfront.net/material/doodle/'
olddomain = 'https://rs.videoshow.mobi/v2/muse/doodle/'

f = open(api_path, 'r', encoding='utf-8')
data = json.load(f)

for d in data['data']:
    for pen in d['doodle_pen']:
        link = str(pen['icon']).replace(olddomain, domain)
        pen['icon'] = link

with open('D:/AppTranslater/api/PEN_CHANGE.json', 'w', encoding='utf-8') as outjson:
    json.dump(data, outjson)

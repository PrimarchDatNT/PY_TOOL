import requests
import json

URL = 'https://api2.videoshow.mobi/getDetail?group_code='
img_url = 'https://d2hyio9ps90xn9.cloudfront.net/videodata/effect/'
response = requests.get('https://api2.videoshow.mobi/getCate?name=effectfilter')
rootdata = response.json()
groupdata = rootdata['data']


def changegroupData(data):
    print(data['groupCode'])
    print(data['title'])
    res = requests.get(URL + str(data['groupCode']))
    jsondata = res.json()
    count = 1
    for slug in jsondata['data']:
        newurl = img_url + str(data['title']).lower() + '/' + str(count) + '.webp'
        slug['iconFromTemplate'] = newurl
        slug['previewurl'] = newurl
        print(newurl)
        count += 1
    with open(data['title'] + '.json', 'w', encoding='utf-8') as outjson:
        json.dump(jsondata, outjson)


for group in groupdata:
    changegroupData(group)

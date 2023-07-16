import requests
import json

URL = 'https://api2.videoshow.mobi/getDetail?group_code='
response = requests.get('https://api2.videoshow.mobi/getCate?name=background')
rootdata = response.json()
groupdata = rootdata['data']


def changegroupData(data):
    print(data['groupCode'])
    print(data['title'])
    res = requests.get(URL + str(data['groupCode']))
    jsondata = res.json()
    for slug in jsondata['data']:
        print(slug['iconFromTemplate'])
    with open(data['title'] + '.json', 'w', encoding='utf-8') as outjson:
        json.dump(jsondata, outjson)


for group in groupdata:
    changegroupData(group)

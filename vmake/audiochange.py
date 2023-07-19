import requests
import json

URL = 'https://api2.videoshow.mobi/getDetail?group_code='
response = requests.get('https://api2.videoshow.mobi/getCate?name=audio')
rootdata = response.json()
groupdata = rootdata['classlist']


def changegroupdata(data):
    print(data['classid'])
    print(data['classname'])
    res = requests.get(URL + str(data['classid']))
    jsondata = res.json()
    for slug in jsondata['data']:
        print(slug['coverurl'])
        print(slug['audiourl'])
    # with open(data['classname'] + '.json', 'w', encoding='utf-8') as outjson:
    #     json.dump(jsondata, outjson)


for group in groupdata:
    changegroupdata(group)

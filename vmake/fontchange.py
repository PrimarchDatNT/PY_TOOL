import requests

URL = 'https://api2.videoshow.mobi/'
response = requests.get('https://api2.videoshow.mobi/getCate?name=font')
rootdata = response.json()
groupdata = rootdata['data']


def changegroupdata(data):
    print(data['groupCode'])
    print(data['title'])
    res = requests.get(URL + str(data['groupCode']))
    jsondata = res.json()
    for slug in jsondata['data']:
        print(slug['titleFromTemplate'])
        print(slug['iconFromTemplate'])
        print(slug['previewurl'])
        print()
    # with open(data['title'] + '.json', 'w', encoding='utf-8') as outjson:
    #     json.dump(jsondata, outjson)


for group in groupdata:
    changegroupdata(group)

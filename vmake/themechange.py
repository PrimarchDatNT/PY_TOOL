import requests
import json

URL = 'https://api2.videoshow.mobi/getDetail?group_code='
img_url = 'https://d2hyio9ps90xn9.cloudfront.net/videodata/theme/'
response = requests.get('https://api2.videoshow.mobi/getCate?name=theme')
rootdata = response.json()
groupdata = rootdata['data']

removeitems = ['Job', 'Foodie 6', 'Notebook', 'News', 'ML-17', 'Journey', 'Style 12', 'New Age', 'Run with me']


def changegroupData(data):
    print(data['groupCode'])
    print(data['title'])
    res = requests.get(URL + str(data['groupCode']))
    jsondata = res.json()
    count = 1
    index = 0
    removed = []
    for slug in jsondata['data']:
        if removeitems.__contains__(slug['titleFromTemplate']):
            print('remove index:' + str(index))
            removed.append(slug)
        else:
            newurl = img_url + str(data['title']).lower().replace(' ', '') + '/' + str(count) + '.webp'
            slug['iconFromTemplate'] = newurl
            slug['previewurl'] = newurl
            slug['showImg'] = newurl
            slug['creatorAvatarUrl'] = newurl
            print(slug['titleFromTemplate'] + ':' + slug['iconFromTemplate'])
            count += 1
        index += 1

    jsondata['data'] = [i for i in jsondata['data'] if i not in removed]
    with open(data['title'] + '.json', 'w', encoding='utf-8') as outjson:
        json.dump(jsondata, outjson)


for group in groupdata:
    changegroupData(group)

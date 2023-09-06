import os.path
import json

CATE_DIR = 'E:/WORK/PY_PROJECT/TOOL/movis/backend/resource/detail'
BUCKET_DOMAIN = 'https://d3pldjsx7tl7ei.cloudfront.net/'
MOVIS_RES_DIR = 'C:/Users/DatNT/Desktop/appRes/MOVIS-RES/image-api-movis/'
LIST_JSON_FILE = []
LIST_REOUSOUCE_FILE = []

LIST_BACKGROUND_URL = []
LIST_EFFECT_URL = []
LIST_FILTER_URL = []
LIST_FONT_URL = []
LIST_FX_URL = []
LIST_STICKER_URL = []
LIST_TEXT_URL = []
LIST_THEME_URL = []
LIST_TRANSITION__URL = []


def change_background_imgs():
    mapper = {}
    files = []
    for p in LIST_JSON_FILE:
        if p.__contains__('background'):
            key = p[p.rindex('/'):].replace('/', '').replace('.json', '').lower()
            mapper[key] = []
            files.append(p)

    for p in files:
        print(p)
        with open(p) as jsonfile:
            data = json.load(jsonfile)

        for entry in data['data']:
            old_url = entry['downUrl']
            if p.__contains__('Raw'):
                url = str(old_url).replace('https://d2hyio9ps90xn9.cloudfront.net/videodata/background/background/',
                                           'https://d3pldjsx7tl7ei.cloudfront.net/background_imgs/videodata/background/raw/')
            else:
                url = str(old_url).replace('https://d2hyio9ps90xn9.cloudfront.net/videodata/background/',
                                           'https://d3pldjsx7tl7ei.cloudfront.net/background_imgs/videodata/background/')

            entry['downUrl'] = url
            entry['iconFromTemplate'] = url
            entry['showImg'] = url

        with open(p, 'w', encoding='utf-8') as outjson:
            json.dump(data, outjson)


def change_effect_imgs():
    files = []
    for p in LIST_JSON_FILE:
        if p.__contains__('effect'):
            files.append(p)

    for p in files:
        print(p)
        with open(p) as jsonfile:
            jsondata = json.load(jsonfile)

        for data in jsondata['data']:
            old_url = data['iconFromTemplate']
            new_url = str(data['iconFromTemplate']).replace('https://d2hyio9ps90xn9.cloudfront.net/videodata/effect/',
                                                            'https://d3pldjsx7tl7ei.cloudfront.net/effect_imgs/videodata/effect/')
            data['iconFromTemplate'] = new_url
            data['previewurl'] = new_url
            print(old_url)
            print(new_url)

        with open(p, 'w', encoding='utf-8') as outjson:
            json.dump(jsondata, outjson)


def change_filter_imgs():
    files = []
    for p in LIST_JSON_FILE:
        if p.__contains__('filter'):
            files.append(p)
            print(p)
    for p in files:
        print(p)
        with open(p) as jsonfile:
            jsondata = json.load(jsonfile)

        for data in jsondata['data']:
            old_url = data['iconFromTemplate']
            new_url = str(data['iconFromTemplate']).replace('https://d2hyio9ps90xn9.cloudfront.net/videodata/filter/',
                                                            'https://d3pldjsx7tl7ei.cloudfront.net/filter_imgs/videodata/filter/')
            print(old_url)
            print(new_url)
            data['iconFromTemplate'] = new_url
            data['previewurl'] = new_url
        with open(p, 'w', encoding='utf-8') as outjson:
            json.dump(jsondata, outjson)


def change_font_imgs():
    files = []
    for p in LIST_JSON_FILE:
        if p.__contains__('font'):
            files.append(p)
    for p in files:
        print(p)
        with open(p) as jsonfile:
            jsondata = json.load(jsonfile)

        for data in jsondata['data']:
            old_url = data['iconFromTemplate']
            new_url = str(data['iconFromTemplate']).replace('https://d2hyio9ps90xn9.cloudfront.net/videodata/',
                                                            'https://d3pldjsx7tl7ei.cloudfront.net/fx_imgs/videodata/')
            print(old_url)
            print(new_url)
            data['iconFromTemplate'] = new_url
            data['previewurl'] = new_url
        with open(p, 'w', encoding='utf-8') as outjson:
            json.dump(jsondata, outjson)


def change_fx_imgs():
    files = []
    for p in LIST_JSON_FILE:
        if p.__contains__('fx'):
            files.append(p)
            print(p)

    for p in files:
        print(p)
        with open(p) as jsonfile:
            jsondata = json.load(jsonfile)

        for data in jsondata['data']:
            old_url = data['iconFromTemplate']
            new_url = str(old_url).replace('https://d2hyio9ps90xn9.cloudfront.net/videodata/',
                                           'https://d3pldjsx7tl7ei.cloudfront.net/fx_imgs/videodata/')
            print(old_url)
            print(new_url)
            data['iconFromTemplate'] = new_url
            data['previewurl'] = new_url
        with open(p, 'w', encoding='utf-8') as outjson:
            json.dump(jsondata, outjson)


def change_sticker_imgs():
    files = []
    for p in LIST_JSON_FILE:
        if p.__contains__('sticker'):
            files.append(p)
            print(p)

    for p in files:
        print(p)
        with open(p) as jsonfile:
            jsondata = json.load(jsonfile)
        key = p[p.rindex('/'):].replace('/', '').replace('.json', '').lower()
        for data in jsondata['data']:
            old_url = data['iconFromTemplate']
            prefix = 'https://d3pldjsx7tl7ei.cloudfront.net/sticker_imgs/' + key + '/vcm'
            new_url = str(old_url).replace('http://rc.veresource.com/vcm', prefix)
            print(old_url)
            print(new_url)
            data['iconFromTemplate'] = new_url
            data['previewurl'] = new_url
        with open(p, 'w', encoding='utf-8') as outjson:
            json.dump(jsondata, outjson)


def change_text_imgs():
    files = []
    for p in LIST_JSON_FILE:
        if p.__contains__('text'):
            files.append(p)
            print(p)

    for p in files:
        print(p)
        with open(p) as jsonfile:
            jsondata = json.load(jsonfile)
        for data in jsondata['data']:
            old_url = data['iconFromTemplate']
            prefix = 'https://d3pldjsx7tl7ei.cloudfront.net/text_imgs/videodata/text'
            new_url = str(old_url).replace('https://d2hyio9ps90xn9.cloudfront.net/videodata/text', prefix)
            print(old_url)
            print(new_url)
            data['iconFromTemplate'] = new_url
            data['previewurl'] = new_url
            data['showImg'] = new_url
        with open(p, 'w', encoding='utf-8') as outjson:
            json.dump(jsondata, outjson)


def change_theme_imgs():
    for e in LIST_THEME_URL:
        print(e)
    files = []
    for p in LIST_JSON_FILE:
        if p.__contains__('theme'):
            files.append(p)
            print(p)

    for p in files:
        print(p)
        with open(p) as jsonfile:
            jsondata = json.load(jsonfile)
        for data in jsondata['data']:
            old_url = data['iconFromTemplate']
            prefix = 'https://d3pldjsx7tl7ei.cloudfront.net/theme_imgs/videodata/theme'
            new_url = str(old_url).replace('https://d2hyio9ps90xn9.cloudfront.net/videodata/theme', prefix)
            print(old_url)
            print(new_url)
            data['iconFromTemplate'] = new_url
            data['previewurl'] = new_url
            data['creatorAvatarUrl'] = new_url
        with open(p, 'w', encoding='utf-8') as outjson:
            json.dump(jsondata, outjson)


def change_transition_imgs():
    for e in LIST_TRANSITION__URL:
        print(e)
    files = []
    for p in LIST_JSON_FILE:
        if p.__contains__('transition'):
            files.append(p)
            print(p)

    for p in files:
        print(p)
        with open(p) as jsonfile:
            jsondata = json.load(jsonfile)
        for data in jsondata['data']:
            old_url = data['iconFromTemplate']
            prefix = 'https://d3pldjsx7tl7ei.cloudfront.net/transition_imgs/videodata/'
            new_url = str(old_url).replace('https://d2hyio9ps90xn9.cloudfront.net/videodata/', prefix)
            print(old_url)
            print(new_url)
            data['iconFromTemplate'] = new_url
            data['previewurl'] = new_url
        with open(p, 'w', encoding='utf-8') as outjson:
            json.dump(jsondata, outjson)


if __name__ == '__main__':
    for r, d, f in os.walk(CATE_DIR):
        for file in f:
            if '.json' in file:
                file_path = str(r + '/' + file).replace('\\', '/')
                if file_path.__contains__('audio'):
                    pass
                else:
                    LIST_JSON_FILE.append(file_path)

    for r, d, f in os.walk(MOVIS_RES_DIR):
        for file in f:
            file_path = str(r + '/' + file).replace('\\', '/')
            LIST_REOUSOUCE_FILE.append(file_path)

    for file in LIST_REOUSOUCE_FILE:
        path = file.replace(MOVIS_RES_DIR, BUCKET_DOMAIN)
        if path.__contains__('background_imgs'):
            LIST_BACKGROUND_URL.append(path)
        if path.__contains__('effect_imgs'):
            LIST_EFFECT_URL.append(path)
        if path.__contains__('filter_imgs'):
            LIST_FILTER_URL.append(path)
        if path.__contains__('font_imgs'):
            LIST_FONT_URL.append(path)
        if path.__contains__('fx_imgs'):
            LIST_FX_URL.append(path)
        if path.__contains__('sticker_imgs'):
            LIST_STICKER_URL.append(path)
        if path.__contains__('text_imgs'):
            LIST_TEXT_URL.append(path)
        if path.__contains__('theme_imgs'):
            LIST_THEME_URL.append(path)
        if path.__contains__('transition_imgs'):
            LIST_TRANSITION__URL.append(path)

    # change_background_imgs()
    # change_effect_imgs()
    # change_filter_imgs()
    # change_font_imgs()
    # change_fx_imgs()
    # change_sticker_imgs()
    # change_text_imgs()
    # change_theme_imgs()
    change_transition_imgs()

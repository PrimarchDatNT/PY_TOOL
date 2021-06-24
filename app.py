import json
import time
import requests
import threading
import xml.etree.ElementTree as ET

lang_code = ["zh", "fr", "de", "el", "hi", "in", "it", "ja", "ko", "ms", "fa", "pl", "pt", "ru", "es", "th", "tr",
             "uk", "vi"]


def getInputData(input_path):
    tree = ET.parse(input_path)
    root = tree.getroot()
    key = []
    text_value = []
    for t in root.findall('string'):
        key.append(t.attrib['name'])
        text_value.append({'text': t.text})

    return {'name': key, 'content': text_value}


def translate(data, destLang):
    urlapi = 'https://api.cognitive.microsofttranslator.com/translate'
    api_path = '?api-version=3.0'
    params = '&from=en&to='
    endpoint = urlapi + api_path + params
    constructed_url = endpoint + destLang

    api_key = '1d93741c8b164f8dae9409e82c90c1dc'
    http_post = {'content-type': 'application/json; charset=utf-8', 'Ocp-Apim-Subscription-Key': api_key}

    response = requests.post(constructed_url, headers=http_post, json=data['content'])
    if response.status_code == 400:
        print('Cannot translate for language code:', destLang)
        return ''

    response_json = response.json()
    raw_data = json.dumps(response_json, sort_keys=True, indent=4, ensure_ascii=False, separators=(',', ': '))
    results = json.loads(raw_data)

    xml = '<resources>\n'
    for i in range(len(results)):
        xml += '<string name="' + data['name'][i] + '">' + results[i]['translations'][0]['text'] + '</string>\n'

    xml += '</resources>'
    return xml


inputdata = getInputData('D:/en.xml')


def saveData(code):
    content = translate(inputdata, code)
    time.sleep(2.5)
    out = open('value-' + code + '.xml', 'w', encoding="utf-8")
    out.writelines(content)
    out.close()


for c in lang_code:
    try:
        task = threading.Thread(target=saveData, args=(c,))
        task.start()
    except:
        print('Error')

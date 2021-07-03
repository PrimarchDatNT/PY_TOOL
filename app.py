import json
import threading
import xml.etree.ElementTree as ET
from tkinter import *
from tkinter import filedialog
from tkinter import messagebox
import dotstrings
import requests
import os
import errno

default_lang_code = ["zh", "fr", "de", "el", "hi", "id", "it", "ja", "ko", "ms", "fa", "pl", "pt", "ru", "es", "th",
                     "tr", "uk", "vi"]

log = []

encode_space_char = {'%@': 'E1111357', '%lld': 'E1111358'}
decode_space_char = {'E1111357': '%@', 'E1111358': '%lld'}


def logProccess(mess):
    log.append(mess)


def getInputData(input_path):
    key = []
    text_value = []
    isXML = False

    if str(input_path).endswith('.xml'):
        tree = ET.parse(input_path)
        root = tree.getroot()
        isXML = True
        for t in root.findall('string'):
            if t.text is not None:
                key.append(t.attrib['name'])
                text_value.append({'text': str(t.text)})
            else:
                logProccess('string: ' + t.attrib['name'] + ' is empty\n')
    else:
        entries = dotstrings.load(input_path)
        for entry in entries:
            if str(entry.value) != '' and entry.value is not None:
                key.append(entry.key)
                text_value.append(
                    {'text': str(entry.value).replace('%@', encode_space_char['%@']).replace('%lld', encode_space_char[
                        '%lld'])})
            else:
                logProccess('string: ' + entry.key + ' is empty\n')

    return {'name': key, 'content': text_value, 'isXML': isXML}


def translate(data, destLang):
    urlapi = 'https://api.cognitive.microsofttranslator.com/translate'
    api_path = '?api-version=3.0'
    params = '&to='
    endpoint = urlapi + api_path + params
    constructed_url = endpoint + destLang

    api_key = '1d93741c8b164f8dae9409e82c90c1dc'
    http_post = {'content-type': 'application/json; charset=utf-8', 'Ocp-Apim-Subscription-Key': api_key}

    request_num = len(data['content']) // 100
    str_result = ''
    line = []
    sub_array = []
    for n in range(request_num):
        indexEnd = 100 * (n + 1)
        sub_array.append(data['content'][100 * n: indexEnd])

    sub_array.append(data['content'][100 * request_num: len(data['content'])])

    index = 0
    for rq_array in sub_array:
        response = requests.post(constructed_url, headers=http_post, json=rq_array)
        if response.status_code == 400:
            logProccess('Cannot translate for language code ' + destLang + ': \n')
            for errstr in rq_array:
                logProccess(errstr['text'] + '\n')
            logProccess('Error Message: ' + response.text + '\n')
            continue
        else:
            response_json = response.json()
            raw_data = json.dumps(response_json, sort_keys=True, indent=4, ensure_ascii=False, separators=(',', ': '))
            results = json.loads(raw_data)

            if data['isXML']:
                for i in range(len(results)):
                    line.append('<string name="' + data['name'][i + 100 * index] + '">' + str(results[i]['translations'][0]['text'])
                                .replace('&', '&amp;').replace(' »', '"').replace('« ', '"') + '</string>\n')
            else:
                for i in range(len(results)):
                    line.append(
                        '"' + data['name'][i + 100 * index] + '" = "' + str(results[i]['translations'][0]['text'])
                        .replace(encode_space_char['%@'], decode_space_char['E1111357']).replace(encode_space_char['%lld'], decode_space_char['E1111358']) + '";\n')
        index += 1

    if data['isXML']:
        str_result += '<?xml version="1.0" encoding="utf-8"?>\n'
        str_result += '<resources>\n'
        for ls in line:
            str_result += ls
        str_result += '</resources>'
    else:
        for ls in line:
            str_result += ls

    return str_result


def saveData(inputdata, code, resut_dir):
    content = translate(inputdata, code)

    if inputdata['isXML']:
        result_path = resut_dir + '/android/values-' + code + '/strings.xml'
    else:
        result_path = resut_dir + '/ios/values-' + code + '/Loalizable.strings'

    if not os.path.exists(os.path.dirname(result_path)):
        try:
            os.makedirs(os.path.dirname(result_path))
        except OSError as exc:
            if exc.errno != errno.EEXIST:
                raise

    out = open(result_path, 'w', encoding="utf-8")
    out.writelines(content)
    out.close()


def openFile():
    file_path = filedialog.askopenfilename()
    input_lang = textBox.get(1.0, END + "-1c")
    if input_lang is not None and str(input_lang) != '':
        default_lang_code.clear()
        for lang in str(input_lang).split(','):
            default_lang_code.append(lang.replace(' ', ''))

    if not str(file_path).endswith('.xml') and not str(file_path).endswith('.strings'):
        messagebox.showerror('Error', 'Wrong format file')
        return

    inputdata = getInputData(file_path)
    threads = []
    result_dir = str(os.path.dirname(file_path)) + '/ApptTranslateOuput'

    for c in default_lang_code:
        try:
            task = threading.Thread(target=saveData, args=(inputdata, c, str(result_dir)))
            threads.append(task)
            task.start()
        except:
            messagebox.showinfo('Title', 'Error in language code:' + c)

    for x in threads:
        x.join()

    logMess = ''
    for m in log:
        logMess += m

    logDir = result_dir + '/logProcess.txt'
    if not os.path.exists(os.path.dirname(logDir)):
        try:
            os.makedirs(os.path.dirname(result_dir))
        except OSError as exc:
            if exc.errno != errno.EEXIST:
                raise
    f_log = open(str(result_dir) + '/logProcess.txt', 'w', encoding="utf-8")
    f_log.writelines(logMess)
    f_log.close()
    ms = messagebox.askquestion('Translate complete', 'File saved in: ' + result_dir + ' open now?')
    print(ms)
    if ms == 'yes':
        path = os.path.realpath(result_dir)
        print(path)
        os.startfile(path)


window = Tk()
window.title('SEGU Translate Tool v1.0')
window.geometry('600x50')
textBox = Text(window, height=1, width=300)
textBox.insert('end-1c', 'zh, fr, de, el, hi, id, it, ja, ko, ms, fa, pl, pt, ru, es, th, tr, uk, vi')
textBox.pack()
btnInput = Button(window, height=1, width=10, text='Input File', command=openFile)
btnInput.pack()

window.mainloop()

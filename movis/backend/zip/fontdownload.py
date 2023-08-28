import movis.backend.datamapper as mapper
import os.path
import json
import requests


def download_file(url, local_filename):
    try:
        with requests.get(url, stream=True) as response:
            response.raise_for_status()
            with open(local_filename, "wb") as file:
                for chunk in response.iter_content(chunk_size=8192):
                    file.write(chunk)
        print("File downloaded successfully!")
    except Exception as e:
        print("Error downloading the file:", e)


file_path = 'E:/WORK/PY_PROJECT/TOOL/movis/backend/resource/detail/font/ALL.json'
download_path = 'E:/WORK/PY_PROJECT/TOOL/movis/backend/zip/font'

if __name__ == '__main__':
    # for r, d, listfile in os.walk(download_path):
    #     for file in listfile:
    #         print('https://d3pldjsx7tl7ei.cloudfront.net/font/' + file)
    with open(file_path, 'r') as jsonfile:
        data = json.load(jsonfile)

    count = 1
    # for d in data['data']:
    #     url = str(d['downUrl'])
    #     print(url)
    #     print(url[url.rindex('.'):])
    #     extension = url[url.rindex('.'):]
    #     save_path = download_path + '/movis_font_' + str(count) + extension
    #     directory = os.path.dirname(save_path)
    #     os.makedirs(directory, exist_ok=True)
    #     download_file(d['downUrl'], download_path + '/movis_font_' + str(count) + extension)
    #     count += 1
    for d in data['data']:
        url = str(d['downUrl'])
        print(url)
        print(url[url.rindex('.'):])
        extension = url[url.rindex('.'):]
        new_path = 'https://d3pldjsx7tl7ei.cloudfront.net/font/' + '/movis_font_' + str(count) + extension
        print(new_path)
        d['downUrl'] = new_path
        count += 1
    with open(file_path, 'w', encoding='utf-8') as outjson:
        json.dump(data, outjson)
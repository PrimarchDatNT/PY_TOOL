import os.path
import json
import requests


def download_file(url, local_filename):
    try:
        directory = os.path.dirname(local_filename)
        os.makedirs(directory, exist_ok=True)

        with requests.get(url, stream=True) as response:
            response.raise_for_status()
            with open(local_filename, "wb") as file:
                for chunk in response.iter_content(chunk_size=8192):
                    file.write(chunk)
        print("File downloaded successfully!")
    except Exception as e:
        print("Error downloading the file:", e)


SAVE_DIR = 'filter/'

if __name__ == '__main__':
    with open('store_data.json', 'r') as jsonfile:
        json_content = json.load(jsonfile)

    data = json_content['data']
    isModify = False
    for item in data:
        for f in item['filters']:
            if dict(f['file']).__contains__('url'):
                if str(f['file']['url']).__contains__('.zip'):
                    zip_path = str(f['file']['url'])
                    print(zip_path)
                    filename = zip_path[zip_path.rindex('/'):]
                    savepath = SAVE_DIR + str(item['m_id']) + filename
                    print(savepath)
                    download_file(zip_path, savepath)

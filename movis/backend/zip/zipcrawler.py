import movis.backend.datamapper as mapper
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


CATE_DIR = 'E:/WORK/PY_PROJECT/TOOL/movis/backend/resource/detail'
SAVE_DIR = 'E:/WORK/PY_PROJECT/TOOL/movis/backend/zip/zip/'

if __name__ == '__main__':
    LIST_FILE = []
    for r, d, f in os.walk(CATE_DIR):
        for file in f:
            if '.json' in file:
                file_path = str(r + '/' + file).replace('\\', '/')
                LIST_FILE.append(file_path)

    for file in LIST_FILE:
        with open(file, 'r') as jsonfile:
            json_content = json.load(jsonfile)

        data = json_content['data']
        for item in data:
            if dict(item).__contains__('downUrl'):
                if str(item['downUrl']).__contains__('.zip'):
                    zip_path = str(item['downUrl'])
                    print(zip_path)
                    filename = zip_path[zip_path.rindex('/'):]
                    savepath = SAVE_DIR + str(item['id']) + filename
                    print(savepath)
                    # download_file(zip_path, savepath)

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


if __name__ == '__main__':
    print()

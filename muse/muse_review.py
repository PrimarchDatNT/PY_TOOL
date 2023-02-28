import os
from PIL import Image

# path = 'D:/APP_TEAM/MUSE_OLD/app/src'
path = 'D:/APP_TEAM/BLINK/app/src'

files = []


def check_image(file_path: str):
    return file_path.endswith('.jpg') \
           or file_path.endswith('.png') \
           or file_path.endswith('.webp') \
           or file_path.endswith('.JPG') \
           or file_path.endswith('.PNG') \
           or file_path.endswith('.WEBP') \
           or check_image_with_pil(file_path)


def check_image_with_pil(file_path):
    try:
        Image.open(file_path)
    except IOError:
        return False
    return True


if __name__ == '__main__':
    for r, d, listfile in os.walk(path):
        for file in listfile:
            if check_image(file):
                files.append(os.path.join(r, file))
                # print(os.path.join(r, file))
    for f in files:
        print('<a href="file:///' + f.replace('/', '\\') + '">' + f + '</a><br>')
        print('<img src="' + f + '"><br>')

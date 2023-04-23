import os
from pathlib import Path
from PIL import Image


def convert_to_webp(source):
    destination = source.with_suffix(".webp")
    image = Image.open(source)
    image.save(destination, format="webp")
    os.remove(source)
    return destination


def convert(fortmat):
    files = []
    for r, d, f in os.walk('C:/Users/DatNT/Desktop/appRes/webp'):
        for file in f:
            if '.' + fortmat in file:
                file_path = str(os.path.join(r, file)).replace('\\', '/')
                files.append(file_path)

    for p in files:
        webp_path = convert_to_webp(Path(p))
        print(webp_path)


if __name__ == '__main__':
    convert('png')
    convert('jpg')

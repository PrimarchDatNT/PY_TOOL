import os
from pathlib import Path
import PIL.Image


def readImage():
    try:
        img = PIL.Image.open('blank.png')
        return img
    except Exception as e:
        print(e)


if __name__ == '__main__':
    childrent = Path('C:/Users/DatNT/Desktop/appRes/clear-photo').iterdir()
    out = readImage()
    for child in childrent:
        if child.name.endswith('.png'):
            out.save(child)
        else:
            os.remove(child)
            out.save(os.path.splitext(child)[0] + '.png')

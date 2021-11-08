import os
from pathlib import Path
import PIL.Image
import numpy


def readImage(path):
    try:
        img = PIL.Image.open(path)
        return img
    except Exception as e:
        print(e)


def clearPhoto(photo):
    grayImg = photo.convert('RGBA')
    arr = numpy.array(grayImg)

    for i in range(0, len(arr)):
        for j in range(0, len(arr[i])):
            arr[i][j] = 0

    return PIL.Image.fromarray(arr)


childrent = Path('C:/Users/DatNT/Desktop/clearPhoto').iterdir()
for child in childrent:
    if child.name.endswith('.png'):
        out = clearPhoto(readImage(child))
        out.save(child)
    else:
        res = open(os.path.splitext(child)[0] + '.xml', 'w', encoding='utf-8')
        res.writelines('<?xml version="1.0" encoding="utf-8"?><shape/>')
        res.close()
        os.remove(child)

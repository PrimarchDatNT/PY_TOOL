import os
from pathlib import Path
import PIL.Image
import numpy


def readImage():
    try:
        img = PIL.Image.open('blank.png')
        return img
    except Exception as e:
        print(e)


def clearPhoto(photo):
    grayImg = photo.convert('RGBA')
    arr = numpy.array(grayImg)

    for i in range(0, len(arr)):
        for j in range(0, len(arr[i])):
            arr[i][j] = 0

    return PIL.Image.fromqimage(photo)


if __name__ == '__main__':
    childrent = Path('C:/Users/DatNT/Desktop/appRes/clear-photo').iterdir()
    out = readImage()
    for child in childrent:
        if child.name.endswith('.png'):
            out.save(child)
        else:
            os.remove(child)
            out.save(os.path.splitext(child)[0] + '.png')

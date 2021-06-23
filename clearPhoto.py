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


chidrent = Path('inputPhoto').iterdir()
for child in chidrent:
    out = clearPhoto(readImage(child))
    out.save(child)

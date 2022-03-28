import os
from pathlib import Path
from PIL import Image


def convert_to_webp(source):
    """Convert image to WebP.

    Args:
        source (pathlib.Path): Path to source image

    Returns:
        pathlib.Path: path to new image
    """
    destination = source.with_suffix(".webp")

    image = Image.open(source)  # Open image
    image.save(destination, format="webp")  # Convert image to webp
    os.remove(source)
    return destination


def convert(fortmat):
    # paths = Path("C:/Users/DatNT/Desktop/appRes/New folder").glob("**/*." + fortmat)
    # for path in paths:
    #     webp_path = convert_to_webp(path)
    #     print(webp_path)

    files = []
    for r, d, f in os.walk("C:/Users/DatNT/Desktop/appRes/New folder"):
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

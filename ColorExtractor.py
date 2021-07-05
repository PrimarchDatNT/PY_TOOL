import extcolors
from stringcolor import *


def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb


colors, pixel_count = extcolors.extract_from_path('img.png')
for c in colors:
    hexcolor = rgb_to_hex(c[0])
    print(cs(hexcolor, hexcolor), c[1])

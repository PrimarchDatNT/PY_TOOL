from PIL import Image
import os


def resize_image(input_path, output_path, new_size):
    """
    Resize an image.

    Args:
        input_path (str): Path to the input image.
        output_path (str): Path to save the resized image.
        new_size (tuple): New size as a tuple (width, height).
    """
    image = Image.open(input_path)
    resized_image = image.resize(new_size)
    resized_image.save(output_path)


# Example Usage:

if __name__ == "__main__":
    for r, d, f in os.walk(''):
        for file in f:
            new_size = (120, 120)
            resize_image(file, file, new_size)

import os


def delfile(file_path):
    try:
        os.remove(file_path)
        print(f"The file '{file_path}' has been deleted successfully.")
    except FileNotFoundError:
        print(f"File not found at '{file_path}'.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == '__main__':
    for r, d, f in os.walk('C:/Users/DatNT/Desktop/appRes/webp/bag'):
        for file in f:
            src_file_path = (os.path.join(r, file).replace('\\', '/'))
            print(src_file_path)
            if src_file_path.__contains__('.DS_Store'):
                delfile(src_file_path)

import os

path = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/'

files = []


if __name__ == '__main__':
    for r, d, listfile in os.walk(path):
        for file in listfile:
            if '.smali' in file:
                files.append(os.path.join(r, file))
    print(len(files))

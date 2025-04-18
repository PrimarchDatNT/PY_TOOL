import os

ROOT_SMALI_DIR = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/com.beatrix.core/code'


def rundelete(path):
    with open(path, 'r') as file:
        lines = file.readlines()
    file.close()

    start_kotlin_metadata_index = -1
    end_kotlin_metadata_index = -1

    index = 0
    for line in lines:
        if line.__contains__('.annotation runtime Lkotlin/b0;'):
            start_kotlin_metadata_index = index

        if line.__contains__('.end annotation') and start_kotlin_metadata_index > -1:
            end_kotlin_metadata_index = index
            break
        index += 1

    if start_kotlin_metadata_index == -1 or end_kotlin_metadata_index == -1:
        return

    del lines[start_kotlin_metadata_index: end_kotlin_metadata_index + 1]

    with open(path, 'w') as smali:
        smali.writelines(lines)


def run(rootpath):
    files = []

    for r, d, f in os.walk(rootpath):
        for file in f:
            if '.smali' in file:
                file_path = str(os.path.join(r, file)).replace('\\', '/')
                files.append(file_path)

    for path in files:
        print('Check file:' + path)
        rundelete(path)

    print('--- All Done ---')


if __name__ == '__main__':
    run(ROOT_SMALI_DIR)

import os

ROOT_SMALI_DIR = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/beatrix.core.space/code'


def rundelete(path):
    with open(path, 'r') as file:
        lines = file.readlines()
    file.close()

    remove_index = []

    index = 0
    for line in lines:
        if line.__contains__('invoke-static') \
                and line.__contains__('Lcom/res/ANRTrace;->') and line.strip().endswith('V'):
            remove_index.append(index)
        index += 1

    if len(remove_index) == 0:
        return

    with open(path, 'w') as smali:
        smali.writelines(remove_lines_by_indexes(lines, remove_index))


def remove_items_by_indexes(lst, indexes_to_remove):
    sorted_indexes = sorted(indexes_to_remove, reverse=True)

    for index in sorted_indexes:
        if 0 <= index < len(lst):
            lst.pop(index)


def remove_lines_by_indexes(lines, indexes_to_remove):
    sorted_indexes = sorted(indexes_to_remove, reverse=True)

    for index in sorted_indexes:
        if 0 <= index < len(lines):
            del lines[index]

    return lines


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

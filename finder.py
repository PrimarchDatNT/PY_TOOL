import os
import fnmatch

# DIRECTORY_TO_SEARCH = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/com.videomaker.movis/code/'
DIRECTORY_TO_SEARCH = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/com.videomaker.movis/app/src/main/res'

FILE_PATTERN = "*.xml"

SEARCH_STRING = "editor_selector_"


def find_string_in_files(directory, pattern, search_string):
    matches = []
    for root, dirnames, filenames in os.walk(directory):
        for filename in fnmatch.filter(filenames, pattern):
            file_path = os.path.join(root, filename).replace('\\', '/')
            with open(file_path, 'r', encoding='utf-8') as file:
                for line_number, line in enumerate(file, start=1):
                    if search_string in line:
                        matches.append((file_path, line_number, line.strip()))
    return matches


if __name__ == '__main__':

    results = find_string_in_files(directory=DIRECTORY_TO_SEARCH, pattern=FILE_PATTERN, search_string=SEARCH_STRING)
    wrapper = {}
    if results:
        for file_path, line_number, line in results:
            # print(f"Found '{SEARCH_STRING}' in '{file_path}' at line {line_number}: {line}")
            if not wrapper.__contains__(file_path):
                wrapper[file_path] = []
            wrapper[file_path].append(line)

        for k in wrapper:
            print(k)
            for line in wrapper[k]:
                print('     line: ' + line)
    else:
        print("No matches found.")

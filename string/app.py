import os

path = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali'
path2 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes2'
path3 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes3'
path4 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes4'
path5 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes5'
path6 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes6'
path7 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes7'
path8 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes8'
path9 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes9'
path10 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes10'
path11 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes11'
path12 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes12'
path13 = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/cn.wps.moffice_i18n/code/smali_classes13'

files = []
xml_path = None


def checkcode(p):
    with open(p, 'r') as smali:
        code = smali.readlines()
        smali.close()

    match_count = 0
    for cline in code:
        if matchid(cline):
            match_count += 1
    return match_count


def matchid(codeline):
    return codeline.__contains__('.method ')


if __name__ == '__main__':
    for r, d, listfile in os.walk(path11):
        for file in listfile:
            if '.smali' in file:
                files.append(os.path.join(r, file))
    count = 0
    for file in files:
        count += checkcode(file)

    print(count)
    print('Done')

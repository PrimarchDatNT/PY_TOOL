import os
import subprocess
import shutil
import time

input_dir = 'E:/WORK/PY_PROJECT/TOOL/quickapktool/temp'
OUTPUT_DEX = 'E:/WORK/PY_PROJECT/TOOL/quickapktool/temp'
SMALI_DIR = 'C:/Users/DatNT/Desktop/APKTOOL/apktool/apk-tool/projects/com.public.pixishow/code/'
DEX_TO_JAR_TOOL = 'E:/WORK/PY_PROJECT/TOOL/quickapktool/libs/dex2jar/lib'


def convert_dex_to_jar(dexdir):
    output_jar_path = dexdir + '/' + 'ai_core.jar'
    jars = []

    for dex_file in os.listdir(input_dir):
        if dex_file.lower().endswith('.dex'):
            print(f"Converting {dex_file}")
            jarfile = dexdir + '/' + dex_file.replace('.dex', '.jar')

            # Set up the classpath
            classpath = ';'.join(os.path.join(DEX_TO_JAR_TOOL, f) for f in os.listdir(DEX_TO_JAR_TOOL) if f.endswith('.jar'))

            print(classpath)

            # Define the Java command
            java_command = [
                'java',
                '-Xms512m',
                '-Xmx2048m',
                '-cp',
                classpath,
            ]

            java_command.extend(
                ['com.googlecode.dex2jar.tools.Dex2jarCmd', os.path.join(input_dir, dex_file), '--force', '-o',
                 jarfile])
            subprocess.run(java_command, shell=True)
            jars.append(jarfile)

    # create temp dir for unzip file jar
    temp_dir = os.path.join(dexdir, '_temp')

    # loop all sub jar file and unzip
    for jarfile in jars:
        print('unpacking sub jar: ' + jarfile)
        shutil.unpack_archive(jarfile, temp_dir, format='zip')

    print('complie class file to jar')
    subprocess.run(['jar', "cvf", output_jar_path, "-C", temp_dir, "."], check=True)

    print('clean temp')
    shutil.rmtree(temp_dir)
    for jarfile in jars:
        os.remove(jarfile)


def convert_smali_to_dex(dexdir):
    all_subdirectories = []
    for dirpath, dirnames, filenames in os.walk(SMALI_DIR):

        for dirname in dirnames:
            if dirname.__contains__('smali'):
                all_subdirectories.append(dirpath + dirname)

        break  # Only interested in immediate subdirectories

    for subdir in all_subdirectories:
        dexfile = OUTPUT_DEX + subdir[subdir.rindex('/'):] + '.dex'
        print('complie dex: ' + dexfile.replace(dexdir, '').replace('/', ''))
        subprocess.call(['java', '-jar', 'libs/smali.jar', 'assemble', subdir, '-o', dexfile])


if __name__ == "__main__":
    starttime = time.time()
    convert_smali_to_dex(OUTPUT_DEX)
    convert_dex_to_jar(OUTPUT_DEX)
    print('done after:' + str(time.time() - starttime) + 's')

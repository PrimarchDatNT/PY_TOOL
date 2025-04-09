import subprocess

APK_TOOL_PATH = 'D:/WORK/PY_PROJECT/TOOL/PY_TOOL/apktool/apktool.jar'
ANDROID_SDK_BUILD_TOOL = 'C:/Users/DatNT/AppData/Local/Android/Sdk/build-tools/34.0.0'
KEY_STORE_PATH = 'D:/WORK/PY_PROJECT/TOOL/PY_TOOL/apktool/key.jks'
# KEY_STORE_PATH = 'D:/WORK/PY_PROJECT/TOOL/PY_TOOL/apktool/debug.keystore'


# sign_apk_command = f'{ANDROID_SDK_BUILD_TOOL}/apksigner sign --ks {KEY_STORE_PATH} --ks-key-alias androiddebugkey --ks-pass pass:android --key-pass pass:android --out {src_dir}/signed-app.apk {src_dir}/dist/zz.apk'


def decode_apk(apk, dst):
    try:
        subprocess.run(['java', '-jar', APK_TOOL_PATH, 'd', apk, '-o', dst], check=True)
        print("Decoding successful.")
    except subprocess.CalledProcessError:
        print("Error during decoding.")


def compile_apk(src_dir):
    print(f'Start compile apk: {src_dir}')
    command = f'java -jar {APK_TOOL_PATH} b {src_dir}/code'
    with subprocess.Popen(command,
                          stdout=subprocess.PIPE,
                          stderr=subprocess.PIPE,
                          text=True,
                          encoding='utf-8') as proc:
        for c in proc.stdout:
            print(c.strip())
    print('-------------------------------------------------------------------------')

    print(f'Start zipalign apk: {src_dir}/dist/app.apk')
    zip_align_command = f'{ANDROID_SDK_BUILD_TOOL}/zipalign -p -f -v 4 {src_dir}/code/dist/app.apk {src_dir}/code/dist/zz.apk'
    with subprocess.Popen(zip_align_command,
                          stdout=subprocess.PIPE,
                          stderr=subprocess.PIPE,
                          text=True,
                          encoding='utf-8') as proc:
        for c in proc.stdout:
            print(c.strip())
    print('-------------------------------------------------------------------------')

    print(f'Start sign apk: {src_dir}')
    sign_apk_command = f'{ANDROID_SDK_BUILD_TOOL}/apksigner sign --ks {KEY_STORE_PATH} --ks-pass pass:123456 --key-pass pass:123456 --out {src_dir}/signed-app.apk {src_dir}/code/dist/zz.apk'
    print(sign_apk_command)
    subprocess.run(sign_apk_command, shell=True)
    print("Compile successful.")


if __name__ == '__main__':
    src = 'D:/APKTOOL/apktool/apk-tool/projects/com.sencatech.iwawa.iwawahome'
    compile_apk(src)

import lief

native_lib = 'libazip_core.so'
lib = lief.parse(native_lib)

for x in lib.exported_symbols:
    if 'Java' in x.name:
        print(x.name)
        x.name = x.name.replace('Java_azip_master_jni_', 'Java_com_godin_archi_')

lib.write(native_lib)

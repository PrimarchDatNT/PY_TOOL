import lief

# ELF
binary = lief.parse('D:/APP_TEAM/MUSE_OLD/app/src/main/jniLibs/arm64-v8a/libMTAiInterface.so')
print(binary)

# # PE
# binary = lief.parse("C:\\Windows\\explorer.exe")
# print(binary)
#
# # Mach-O
# binary = lief.parse("/usr/bin/ls")
# print(binary)
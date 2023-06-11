import lief
import logging

native_lib = 'libcesliveeditor.so'
lib = lief.parse(native_lib)

print(lib)

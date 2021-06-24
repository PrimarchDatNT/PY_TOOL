from datetime import datetime
import pytz
from pytz import country_timezones as ct
import pycountry

# d3 = getEventDuration('6', '18-20', ct['PH'][0])
# data['Philippines'].append(Sale(20, d3[0], d3[1], '', '', d3[2], 'Happy Fathers Day!'))

print(ct['PH'][0])
st = datetime(2021, 6, 18, 1, 0, 0, 0, pytz.timezone('Asia/Manila'))
# t = st.astimezone(pytz.timezone('Asia/Manila'))

mil = int(st.timestamp() * 1000)

print(st)
print(mil)

# from tkinter import *
# import tkinter
#
# windown = Tk()
# windown.title('SEGU Translate Tool v1.0')
# windown.geometry('800x200')
#
# btnInput = Button(windown, text='Input File')
# btnInput.grid(column=1, row=1)
#
# windown.mainloop()

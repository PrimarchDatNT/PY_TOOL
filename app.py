from tkinter import *
import tkinter

windown = Tk()
windown.title('SEGU Translate Tool v1.0')
windown.geometry('800x200')

btnInput = Button(windown, text='Input File')
btnInput.grid(column=1, row=1)

windown.mainloop()

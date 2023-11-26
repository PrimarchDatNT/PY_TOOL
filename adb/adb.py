import subprocess
import tkinter as tk
import time
from PIL import Image, ImageTk


def get_screen_size():
    try:
        proc = subprocess.run('adb shell wm size', capture_output=True, text=True, check=True)
        result = proc.stdout.strip()
        if result:
            return result[result.index(':'):].replace(':', '').strip().split('x')
        else:
            return None
    except subprocess.CalledProcessError:
        return None


class ClickableAreaApp:
    size = []

    def drawframe(self):
        subprocess.run(f"adb shell screencap -p /sdcard/screencap.png", check=True)
        subprocess.run(f"adb pull /sdcard/screencap.png", check=True)
        self.draw_image(newsize=(int(self.width), int(self.height)), image_path='screencap.png')

    def __init__(self, master, size: list):
        self.master = master
        self.size = size
        self.master.title("Clickable Area App")
        scale = 3
        self.width = int(size[0]) / scale
        self.height = int(size[1]) / scale
        # Create a canvas as the clickable area
        self.canvas = tk.Canvas(self.master, width=self.width, height=self.height, bg="white")
        self.canvas.pack(expand=tk.YES, fill=tk.BOTH)

        # Bind the left mouse button click event to the function
        self.canvas.bind("<Button-1>", self.on_canvas_click)
        self.drawframe()

    def on_canvas_click(self, event):
        # Print the x, y coordinates of the click point
        cx = int(event.x) * 3
        cy = int(event.y) * 3
        subprocess.run(f"adb shell input tap {cx} {cy}", check=True)
        print(f"Clicked at: x={event.x}, y={event.y}")
        print(f"Clicked at: cx={cx}, cy={cy}")
        time.sleep(0.2)
        self.drawframe()

    def draw_image(self, newsize, image_path):
        original_image = Image.open(image_path)
        resized_image = original_image.resize(newsize)
        tk_image = ImageTk.PhotoImage(resized_image)
        self.canvas.create_image(0, 0, anchor=tk.NW, image=tk_image)
        self.canvas.image = tk_image


def update_image():
    # Your image update logic goes here
    app.drawframe()
    root.after(1000, update_image)


if __name__ == "__main__":
    size = get_screen_size()
    if size:
        root = tk.Tk()
        print(size)
        app = ClickableAreaApp(root, size)
        # update_image()
        root.mainloop()

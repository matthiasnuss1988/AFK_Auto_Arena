import tkinter as tk
from tkinter import ttk
import os
from PIL import Image, ImageTk



# Create the main window
root = tk.Tk()
root.title("AFK Auto Arena")

# Create a content frame to hold all the other widgets
content = ttk.Frame(root)
content.pack(fill='both', expand=True)

# Set the window size and position
root.geometry("600x800")
root.resizable(False, False)
root.configure(bg="#222222")
# Get the directory of the current script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Join the image name to the directory
image_path = os.path.join(current_dir, 'bgimage.jpg')
print(image_path)
#im = Image.open(image_path)
#im.show()

# Use the image path to create a PhotoImage object
im = Image.open(image_path)
bg_img = ImageTk.PhotoImage(im)
bg_label = tk.Label(root, image=bg_img)
bg_label.place(x=0, y=0, relwidth=1, relheight=1)

# Create the circle form
circle_frame = ttk.Frame(root, style="Circle.TFrame")
circle_frame.place(relx=0.5, rely=0.5, anchor=tk.CENTER)

# Create the header
header = tk.Label(root, text="AFK Auto Arena", font=("Helvetica", 24), fg="white", bg="#222222")
header.pack(pady=(20, 30))

# Create the team selection checkboxes
team_frame = ttk.Frame(circle_frame, style="White.TFrame")
team_frame.pack(pady=10)

team_label = tk.Label(team_frame, text="Teams", font=("Helvetica", 16), fg="white", bg="#222222")
team_label.pack()

ttk.Label(team_frame, text="Team Auswahl", style="Label.TLabel").pack(pady=5)

team_checkboxes = [
    ("Team 1", 1),
    ("Team 2", 1),
    ("Team 3", 1),
    ("Team 4", 1),
    ("Team 5", 1),
]
for team, value in team_checkboxes:
    ttk.Checkbutton(
        team_frame,
        text=team,
        variable=value,
        style="Checkbox.TCheckbutton",
        onvalue=1,
        offvalue=0,
    ).pack(side=tk.LEFT, padx=10)

# Create the team time field
team_time_frame = ttk.Frame(circle_frame, style="White.TFrame")
team_time_frame.pack(pady=10)

ttk.Label(team_time_frame, text="Kampfzeit pro Team, z.b. 3, 5 oder 10 min", style="Label.TLabel").pack(pady=5)

team_time_entry = ttk.Entry(team_time_frame)
team_time_entry.pack(padx=30, pady=5)

# Create the note
note_label = tk.Label(root, text="Notiz: Für  leichte (3), mittelschwere (5) oder schwere (10) Stufen", font=("Helvetica", 12), fg="white", bg="#222222")
note_label.pack(pady=(20, 10))

# Create the script time dropdown
script_time_frame = ttk.Frame(circle_frame, style="White.TFrame")
script_time_frame.pack(pady=10)
ttk.Label(script_time_frame, text="Laufzeit des Scripts, z.b. 6 h", style="Label.TLabel").pack(pady=5)

script_time_dropdown = ttk.Combobox(script_time_frame, values=["1", "3", "6", "Dauerschleife"], style="Dropdown.TCombobox")
script_time_dropdown.set("Laufzeit des Scripts, z.b. 6 h")
script_time_dropdown.pack(padx=30, pady=5)

# Create the modus dropdown
modus_frame = ttk.Frame(circle_frame, style="White.TFrame")
modus_frame.pack(pady=10)

ttk.Label(modus_frame, text="Gib den Kampfmodus an", style="Label.TLabel").pack(pady=5)

modus_dropdown = ttk.Combobox(modus_frame, values=[
    "Feldzug",
    "Königsturm",
    "Himmlisches Heiligtum",
    "Turm des Lichtes",
    "Die Brutale Zitadelle",
    "Höllische Festung",
    "Die Verlassene Nekropolis",
    "Der Weltenbaum"
], style="Dropdown.TCombobox")
modus_dropdown.set("Gib den Kampfmodus an")
modus_dropdown.pack(padx=30, pady=5)

# Ausgangspunkt frame
ausgangspunkt_frame = ttk.Frame(circle_frame, padding=20)
ausgangspunkt_frame.pack(fill='both')

ausgangspunkt_label = ttk.Label(ausgangspunkt_frame, text='Ausgangspunkt', font=('Helvetica', 18))
ausgangspunkt_label.pack(side='top', pady=5)

ausgangspunkt_var = tk.BooleanVar(value=False)
ausgangspunkt_checkbox = ttk.Checkbutton(ausgangspunkt_frame, text='Ausgangspunkt', variable=ausgangspunkt_var)
ausgangspunkt_checkbox.pack(side='top')

# Logger frame
logger_frame = ttk.Frame(content, padding=20)
logger_frame.pack(fill='both', expand=True)

logger_label = ttk.Label(logger_frame, text='Logger', font=('Helvetica', 18))
logger_label.pack(side='top', pady=5)

logger_scrollbar = ttk.Scrollbar(logger_frame)
logger_scrollbar.pack(side='right', fill='y')

logger_text = tk.Text(logger_frame, height=10, font=('Helvetica', 12), yscrollcommand=logger_scrollbar.set)
logger_text.pack(side='left', fill='both', expand=True)

logger_scrollbar.config(command=logger_text.yview)

# Button frame
button_frame = ttk.Frame(content, padding=20)
button_frame.pack(fill='both')

start_button = ttk.Button(button_frame, text='Start', command=start)
start_button.pack(side='left', padx=5)

stop_button = ttk.Button(button_frame, text='Stop', command=stop)
stop_button.pack(side='left', padx=5)

exit_button = ttk.Button(button_frame, text='Exit', command=exit)
exit_button.pack(side='left', padx=5)

root.mainloop()
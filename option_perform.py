from datetime import datetime, time
import tkinter as tk
from tkinter import ttk

# Disabling options based on conditions
trends = ["Feldzug", "Königsturm", "Himmlisches Heiligtum", "Turm des Lichtes", "Die Brutale Zitadelle", "Höllische Festung", "Die Verlassene Nekropolis", "Der Weltenbaum"]
root = tk.Tk()
root.geometry("400x400")

modus_label = ttk.Label(root, text="Gib den Kampfmodus an")
modus_label.pack(pady=5)

def disable_mode_option():
    weekday_options = {
        'Monday': [3, 5, 6, 7, 8],
        'Tuesday': [3, 4, 6, 7, 8],
        'Wednesday': [4, 5, 7, 8],
        'Thursday': [3, 4, 5, 8],
        'Friday': [3, 4, 5, 6, 8],
        'Saturday': [3, 4, 5, 6, 7],
        'Sunday': [3, 4, 5],
    }

    weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    d = datetime.now()
    day = weekday[d.weekday()]
    now = datetime.now()
    twoAM = time(2, 0, 0)

    options_to_disable = weekday_options.get(day, [])
    
    modus_dropdown = tk.StringVar(root)
    modus_dropdown.set(trends[0])
    modus_menu = tk.OptionMenu(root, modus_dropdown, *trends)

    for i, trend in enumerate(trends):
        if now.time() >= twoAM:
            if i in options_to_disable:
                modus_menu['menu'].entryconfig(i, state='disable')
            else:
                modus_menu['menu'].entryconfig(i, foreground='blue')
        else:
            modus_menu['menu'].entryconfig(i, state='disable')
            
    modus_menu.pack(padx=30, pady=5)

disable_mode_option()

root.mainloop()
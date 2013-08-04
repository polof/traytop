traymover
=========

GNOME Shell extension that moves all tray icons to the top panel.

Features
--------
* Tested in GNOME Shell 3.4.2 (Debian wheezy).
* All tray icons are moved; you don't need to configure any window classes.
* Tray icons that are hidden by default are still hidden
  (e.g., Network Manager which is replaced by the native Shell icon).

Installation
------------

First, download the extension:

    cd ~/.local/share/gnome-shell/extensions
    git clone https://github.com/polof/traymover.git traymover@polof.github.com

Enable the extension in gnome-tweak-tool and restart GNOME Shell
(Alt+F2 and "r").

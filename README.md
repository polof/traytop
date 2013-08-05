traytop
=======

traytop is an extension for GNOME Shell 3.4 that puts all your tray
icons to the top panel, where they belong.

Features
--------

* No configuration needed; all tray icons are moved.
* Tray icons that are hidden by default are still hidden
  (e.g., Network Manager which is replaced by the native Shell icon).
* Tested in GNOME Shell 3.4.2 (Debian wheezy).

Bugs
----

* Doesn't work in the latest version of GNOME Shell.

Installation
------------

1. Download the extension:

        git clone https://github.com/polof/traytop.git \
            ~/.local/share/gnome-shell/extensions/traytop@polof.github.com

2. Restart GNOME Shell (Alt+F2 and type 'r').

3. Open gnome-tweak-tool and enable the extension.

4. All new tray icons should now appear in the top panel. If you want
   to move existing tray icons there, restart GNOME Shell again.

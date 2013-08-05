/*
  traytop - GNOME Shell 3.4 extension that puts tray icons in the top panel.

  Copyright 2013 Per Olofsson <pelle@dsv.su.se>

  This work is free. You can redistribute it and/or modify it under the
  terms of the Do What The Fuck You Want To Public License, Version 2,
  as published by Sam Hocevar. See http://www.wtfpl.net/ for more details.
*/

const Lang = imports.lang;
const Main = imports.ui.main;
const Shell = imports.gi.Shell;
const StatusIconDispatcher = imports.ui.statusIconDispatcher;

function _onTrayIconAdded(o, icon) {
    let wmClass = (icon.wm_class || 'unknown').toLowerCase();
    let role = StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS[wmClass];
    if (role)
        this.emit('status-icon-added', icon, role);
    else
        this.emit('status-icon-added', icon, 'tray');
}

function _onTrayIconRemoved(o, icon) {
    this.emit('status-icon-removed', icon);
}

function init() {
    let traymanager = new Shell.TrayManager();
    Main.statusIconDispatcher._traymanager = traymanager;

    traymanager.connect('tray-icon-added',
                        Lang.bind(Main.statusIconDispatcher,
                                  _onTrayIconAdded));
    traymanager.connect('tray-icon-removed',
                        Lang.bind(Main.statusIconDispatcher,
                                  _onTrayIconRemoved));
}

function enable() {
}

function disable() {
}

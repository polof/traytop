/*
  traytop - GNOME Shell 3.4 extension that puts tray icons in the top panel.

  Copyright 2013 Per Olofsson <pelle@dsv.su.se>

  This work is free. You can redistribute it and/or modify it under the
  terms of the Do What The Fuck You Want To Public License, Version 2,
  as published by Sam Hocevar. See the COPYING file for more details.
*/

const Lang = imports.lang;
const Main = imports.ui.main;

function _onTrayIconAdded(o, icon) {
    this.emit('status-icon-added', icon, 'tray');
}

function _onTrayIconRemoved(o, icon) {
    this.emit('status-icon-removed', icon);
}

function _connectStatusIconSignals(sid) {
    let panel = Main.panel;
    sid.connect('status-icon-added',
                Lang.bind(panel, panel._onTrayIconAdded));
    sid.connect('status-icon-removed',
                Lang.bind(panel, panel._onTrayIconRemoved));
}

function init() {
}

function enable() {
    let sid = Main.statusIconDispatcher;
    // GNOME Shell 3.4 doesn't save the handler ID's so we can't
    // disconnect the individual handlers.
    sid.disconnectAll();
    _connectStatusIconSignals(sid);
    sid.connect('message-icon-added', Lang.bind(sid, _onTrayIconAdded));
    sid.connect('message-icon-removed', Lang.bind(sid, _onTrayIconRemoved));
}

function disable() {
    let sid = Main.statusIconDispatcher;
    let nd = Main.notificationDaemon;
    sid.disconnectAll();
    _connectStatusIconSignals(sid);
    sid.connect('message-icon-added', Lang.bind(nd, nd._onTrayIconAdded));
    sid.connect('message-icon-removed', Lang.bind(nd, nd._onTrayIconRemoved));
}

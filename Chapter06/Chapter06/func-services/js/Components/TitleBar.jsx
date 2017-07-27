import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
const appWindow = nw.Window.get();

export default function TitleBar() {
  const iconElementLeft = <IconButton
      onClick={() => appWindow.hide()}
      tooltip="Hide window"
      iconClassName="material-icons">arrow_drop_down_circle</IconButton>,
        iconElementRight= <IconButton
      onClick={() => appWindow.close()}
      tooltip="Quit"
      iconClassName="material-icons">power_settings_new</IconButton>;

  return (<AppBar
    className="titlebar"
    title="Screen Capturer"
    iconElementLeft={iconElementLeft}
    iconElementRight={iconElementRight}>
    </AppBar>);

}

import React, { Component } from "react";
import IconButton from "material-ui/IconButton";
import TextField from "material-ui/TextField";

const TAB_BUTTON_STYLE = {
  fontSize: 90
};
const ANIMATION_DEFAULT_FILENAME = "animation{N}.webm";

export default class AnimationTab extends Component {

  render(){
    return (
      <div className="tab-layout">
          <div className="tab-layout__item">
              <TextField
                  floatingLabelText="File name pattern"
                  defaultValue={ANIMATION_DEFAULT_FILENAME}
                />
          </div>
          <div className="tab-layout__item">

{ true ? <IconButton
            tooltip="Stop recording"
            iconClassName="material-icons"
            iconStyle={TAB_BUTTON_STYLE}>videocam_off</IconButton>
            : <IconButton
            tooltip="Start recording"
            iconClassName="material-icons"
            iconStyle={TAB_BUTTON_STYLE}>videocam</IconButton> }
          </div>
        </div>
      )
  }
}

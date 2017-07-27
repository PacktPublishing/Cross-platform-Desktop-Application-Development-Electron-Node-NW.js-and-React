import React, { Component } from "react";

import IconButton from "material-ui/IconButton";
import TextField from "material-ui/TextField";

const TAB_BUTTON_STYLE = {
  fontSize: 90
};

const SCREENSHOT_DEFAULT_FILENAME = "screenshot{N}.png";

export default class ScreenshotTab extends Component {

  render(){
    return (
      <div className="tab-layout">
        <div className="tab-layout__item">
            <TextField
                floatingLabelText="File name pattern"
                defaultValue={SCREENSHOT_DEFAULT_FILENAME}
              />

          </div>
          <div className="tab-layout__item">

            <IconButton
              tooltip="Take screenshot"
              iconClassName="material-icons"
              iconStyle={TAB_BUTTON_STYLE}>add_a_photo</IconButton>
          </div>
        </div>
      )
  }
}

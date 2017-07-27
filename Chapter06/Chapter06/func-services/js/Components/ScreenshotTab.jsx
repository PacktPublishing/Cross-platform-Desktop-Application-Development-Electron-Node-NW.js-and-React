import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import TextField from "material-ui/TextField";
import { TAB_BUTTON_STYLE, SCREENSHOT_DEFAULT_FILENAME } from "../Constants";

export default class ScreenshotTab extends Component {

  /**
   * Validate properties (React.Component API)
   */
  static propTypes = {
    states: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    capturer: PropTypes.object.isRequired
  }
  /**
   * Handle when cliked CAPTURE
   */
  onCapture = () => {
    const { states } = this.props;
    this.props.capturer.takeScreenshot( states.screenshotFilename );
  }
  /**
   * Handle when file name pattern changed
   * @param {KeyboardEvent} e
   */
  onFilenameChange = ( e ) => {
    const { value } = e.target;
    const { actions } = this.props;
    if ( !value.endsWith( ".png" ) || value.length < 6 ) {
      actions.setScreenshotInputError( "File name cannot be empty and must end with .png" );
      return;
    }
    actions.setScreenshotInputError( "" );
    actions.setScreenshotFilename( value );
  }

  render(){
    const { states } = this.props;
    return (
      <div className="tab-layout">
        <div className="tab-layout__item">
            <TextField
                onChange={this.onFilenameChange}
                floatingLabelText="File name pattern"
                defaultValue={SCREENSHOT_DEFAULT_FILENAME}
                errorText={states.screenshotInputError}
              />

          </div>
          <div className="tab-layout__item">

            <IconButton
              onClick={this.onCapture}
              tooltip="Take screenshot"
              iconClassName="material-icons"
              iconStyle={TAB_BUTTON_STYLE}>add_a_photo</IconButton>
          </div>
        </div>
      )
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import TextField from "material-ui/TextField";
import { TAB_BUTTON_STYLE, ANIMATION_DEFAULT_FILENAME } from "../Constants";

export default class AnimationTab extends Component {
  /**
   * Validate properties (React.Component API)
   */
  static propTypes = {
    states: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    capturer: PropTypes.object.isRequired
  }
  /**
   * Handle when clicked RECORD
   */
  onRecord = () => {
    const { states } = this.props;
    this.props.capturer.record( states.animationFilename );
    this.props.actions.toggleRecording( true );
  }
  /**
   * Handle when clicked STOP
   */
  onStop = () => {
    this.props.capturer.stop();
    this.props.actions.toggleRecording( false );
  }
  /**
   * Handle when file name pattern changed
   * @param {KeyboardEvent} e
   */
  onFilenameChange = ( e ) => {
    const { value } = e.target;
    const { actions } = this.props;
    if ( !value.endsWith( ".webm" ) || value.length < 7 ) {
      actions.setAnimationInputError( "File name cannot be empty and must end with .png" );
      return;
    }
    actions.setAnimationInputError( "" );
    actions.setAnimationFilename( value );
  }

  render(){
    const { states } = this.props;
    return (
      <div className="tab-layout">
          <div className="tab-layout__item">
              <TextField
                  onChange={this.onFilenameChange}
                  floatingLabelText="File name pattern"
                  defaultValue={ANIMATION_DEFAULT_FILENAME}
                  errorText={states.animationInputError}
                />
          </div>
          <div className="tab-layout__item">


{ states.isRecording ? <IconButton
            onClick={this.onStop}
            tooltip="Stop recording"
            iconClassName="material-icons"
            iconStyle={TAB_BUTTON_STYLE}>videocam_off</IconButton>
            : <IconButton
            onClick={this.onRecord}
            tooltip="Start recording"
            iconClassName="material-icons"
            iconStyle={TAB_BUTTON_STYLE}>videocam</IconButton> }
          </div>
        </div>
      )
  }
}

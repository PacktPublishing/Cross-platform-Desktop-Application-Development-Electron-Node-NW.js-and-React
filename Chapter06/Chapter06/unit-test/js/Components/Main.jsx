import React, {Component} from "react";
import PropTypes from "prop-types";

import { Tabs, Tab } from "material-ui/Tabs";
import FontIcon from "material-ui/FontIcon";

import TitleBar from "./TitleBar.jsx";
import ScreenshotTab from "./ScreenshotTab.jsx";
import AnimationTab from "./AnimationTab.jsx";
import { TAB_SCREENSHOT, TAB_ANIMATION } from "../Constants";


class Main extends Component {

  /**
   * Validate properties (React.Component API)
   */
  static propTypes = {
    states: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    capturer: PropTypes.object.isRequired
  }

  onTabNav = ( tab ) => {
    const { actions } = this.props;
    return () => {
      actions.setActiveTab( tab );
    };
  }

  render() {
    const ScreenshotIcon = <FontIcon className="material-icons">camera_alt</FontIcon>;
    const AnimationIcon = <FontIcon className="material-icons">video_call</FontIcon>;
    const { states, actions } = this.props;

    return (
      <div>
        <TitleBar />
        <Tabs>
          <Tab
            onClick={this.onTabNav( TAB_SCREENSHOT )}
            icon={ScreenshotIcon}
            label="SCREENSHOT"
          />
          <Tab
            onClick={this.onTabNav( TAB_ANIMATION )}
            icon={AnimationIcon}
            label="ANIMATION"
          />
        </Tabs>
        <div>

        { states.activeTab === TAB_SCREENSHOT
            ? <ScreenshotTab {...this.props} />
            : <AnimationTab {...this.props} />
          }
        </div>

      </div>
    );
  }
}

export default Main;

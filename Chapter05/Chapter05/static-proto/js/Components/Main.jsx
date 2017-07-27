import React, {Component} from "react";

import { Tabs, Tab } from "material-ui/Tabs";
import FontIcon from "material-ui/FontIcon";

import TitleBar from "./TitleBar.jsx";
import ScreenshotTab from "./ScreenshotTab.jsx";
import AnimationTab from "./AnimationTab.jsx";


class Main extends Component {

  render() {
    const ScreenshotIcon = <FontIcon className="material-icons">camera_alt</FontIcon>;
    const AnimationIcon = <FontIcon className="material-icons">video_call</FontIcon>;

    return (
      <div>
        <TitleBar />
        <Tabs>
          <Tab
            icon={ScreenshotIcon}
            label="SCREENSHOT"
          />
          <Tab
            icon={AnimationIcon}
            label="ANIMATION"
          />
        </Tabs>
        <div>

        { true
            ? <ScreenshotTab  />
            : <AnimationTab />
          }
        </div>

      </div>
    );
  }
}

export default Main;

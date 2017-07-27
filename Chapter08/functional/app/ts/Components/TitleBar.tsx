import * as React from "react";
import { remote } from "electron";
import { Header, Navigation, Icon } from "react-mdl";

export default class TitleBar extends React.Component<{}, {}> {

  private onClose = () => {
    remote.getCurrentWindow().close();
  }
  render() {
    return (
     <Header title="RSS Aggregator" scroll>
        <Navigation>
            <a href="#" onClick={this.onClose}><Icon name="close" /></a>
        </Navigation>
    </Header>
    );
  }
}

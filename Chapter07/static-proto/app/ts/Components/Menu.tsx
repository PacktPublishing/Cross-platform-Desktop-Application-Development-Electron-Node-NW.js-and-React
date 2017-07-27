import * as React from "react";
import { Drawer, Navigation, Icon, FABButton } from "react-mdl";

export default class Menu extends React.Component<{}, {}> {

  render (){

    return (
     <Drawer title="Favorites" className="mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <Navigation className="mdl-color--blue-grey-80">
          <a>
             <Icon name="&#xE0E5;" />
             Link title
          </a>
        </Navigation>
        <div className="mdl-layout-spacer"></div>
        <div className="tools">
          <FABButton mini>
              <Icon name="add" />
          </FABButton>

          <FABButton mini>
              <Icon name="delete" />
          </FABButton>

          <FABButton mini>
              <Icon name="autorenew" />
          </FABButton>
        </div>
      </Drawer>
    );
  }
}

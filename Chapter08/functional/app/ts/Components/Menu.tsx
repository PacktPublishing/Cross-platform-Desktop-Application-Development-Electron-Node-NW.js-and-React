import * as React from "react";

import { Drawer, Navigation, Icon, FABButton } from "react-mdl";
import { IMenuItem, TStore } from "../Interfaces";
import AddFeedDialog from "./AddFeedDialog";

interface IProps {
  store: TStore;
}

export default class Menu extends React.Component<IProps, {}> {

  static makeClassName = ( toggle: boolean ) => {
    const classList = [ "mdl-navigation__link" ];
    toggle && classList.push( "mdl-navigation__link--current" );
    return classList.join( " " );
  }

  private onAddFeed = () => {
     this.props.store.toggleOpenAddFeed( true );
  }

  private onRemoveFeed = () => {
    const { removeFeed, fetchMenu, state } = this.props.store;
     removeFeed( state.activeFeedUrl );
     fetchMenu();
  }

  private onRefresh = () => {
    this.props.store.fetchMenu();
  }

  render (){
    const { state } = this.props.store,
          menu = state.menu || [];

    return (
     <Drawer title="Favorites" className="mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <AddFeedDialog store={this.props.store} />
        <Navigation className="mdl-color--blue-grey-80">

        { menu.map(( item: IMenuItem ) => (
          <a key={item.id} href={`#${item.id}`}
          className={Menu.makeClassName( item.url === state.activeFeedUrl )}>
           <Icon name="&#xE0E5;" />
           {item.title}
          </a>
        )) }
        </Navigation>
        <div className="mdl-layout-spacer"></div>
        <div className="tools">
          <FABButton mini onClick={this.onAddFeed}>
              <Icon name="add" />
          </FABButton>
          { state.activeFeedUrl && (
          <FABButton mini>
              <Icon name="delete" onClick={this.onRemoveFeed} />
          </FABButton>
          )}
          <FABButton mini onClick={this.onRefresh}>
              <Icon name="autorenew" />
          </FABButton>
        </div>
      </Drawer>
    );
  }
}

import { Layout, Content } from "react-mdl";
import * as React from "react";

import TitleBar from "../Components/TitleBar";
import Menu from "../Components/Menu";
import Feed from "../Components/Feed";

export default class App extends React.Component<{}, {}> {

  render() {
    return (
      <div className="main-wrapper">
        <Layout fixedHeader fixedDrawer>
          <TitleBar />
          <Menu />
          <Content>
            <Feed  />
          </Content>
        </Layout>
      </div>
    );
  }
}

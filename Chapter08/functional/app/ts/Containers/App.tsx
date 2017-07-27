import { Layout, Content } from "react-mdl";
import * as React from "react";
import { connect } from "react-redux";

import actions from "../Actions/actions";
import { IRootState, TStore } from "../Interfaces";

import ErrorAlert from "../Components/ErrorAlert";
import TitleBar from "../Components/TitleBar";
import Menu from "../Components/Menu";
import Feed from "../Components/Feed";


// mapping state to the props
const mapStateToProps = ( state: IRootState ) => state;
// mapping actions to the props
const mapDispatchToProps = {
  ...actions
};

class App extends React.Component<TStore, {}> {


  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    return (
      <div className="main-wrapper">
        <ErrorAlert store={this.props} />
        <Layout fixedHeader fixedDrawer>
          <TitleBar />
          <Menu store={this.props} />
          <Content>
            <Feed store={this.props} />
          </Content>
        </Layout>
      </div>
    );
  }
}

// connect store to App
export default connect(
  mapStateToProps,
  mapDispatchToProps
)( App );

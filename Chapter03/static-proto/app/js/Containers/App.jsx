import React from "react";
import ChatPane from "../Components/ChatPane.jsx";
import Welcome from "../Components/Welcome.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

export default class App extends React.Component {

  render() {
    const name = "..";
    return (
      <div className="window">
        <Header></Header>
        <div className="window-content">
          { name ?
            ( <ChatPane
                /> ) :
            ( <Welcome /> ) }
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

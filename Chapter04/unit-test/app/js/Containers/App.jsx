import React from "react";
import Server from "../Service/Server";
import Client from "../Service/Client";
import ChatPane from "../Components/ChatPane.jsx";
import Welcome from "../Components/Welcome.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

const HOST = "127.0.0.1",
      PORT = 8001;


export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      name: ""
    };

    this.client = new Client();
    this.server = new Server();
    this.server.connect( HOST, PORT, this.client );
  }

  /**
   * Handle when form submitted in Welcome component
   * @param {string} userName
   */
  onNameChange = ( userName ) => {
    this.setState({ name: userName });
    this.client.join( userName );
  }
  /**
   * Render component (React component lifecycle method)
   */
  render() {
    const client = this.client,
          name = this.state.name;
    return (
      <div className="window">
        <Header></Header>
        <div className="window-content">
          { name ?
            ( <ChatPane client={client}
                /> ) :
            ( <Welcome  onNameChange={this.onNameChange} /> ) }
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
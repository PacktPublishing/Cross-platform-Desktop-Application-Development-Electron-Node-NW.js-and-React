import React from "react";
import { remote } from "electron";
const win = remote.getCurrentWindow();

export default class Header extends React.Component {
  /**
   * @param {React.Props} props
   */
  constructor( props ) {
    super( props );
    this.state = { isMaximized: win.isMaximized() };
  }
  /**
   * Subscribe to window events straight before the component
   * gets rendered to the DOM
   * (React component lifecycle method)
   */
  componentWillMount() {
    win.on( "maximize", this.updateState );
    win.on( "unmaximize", this.updateState );
  }
  /**
   * Update state. The method is called every time window changes size
   */
  updateState = () => {
    this.setState({
      isMaximized: win.isMaximized()
    });
  }
  /**
   * Handle when restore button is called
   */
  onRestore = () => {
    win.restore();
  }
  /**
   * Handle when maximize button is called
   */
  onMaximize = () => {
    win.maximize();
  }
  /**
   * Handle when close button is called
   */
  onClose = () => {
    win.close();
  }
  /**
   * Render component (React component lifecycle method)
   */
  render() {
    const { isMaximized } = this.state;
    return (
      <header className="toolbar toolbar-header">
          <div className="toolbar-actions">
                <button className="btn btn-default pull-right" onClick={this.onClose}>
                   <span className="icon icon-cancel"></span>
               </button>

               { isMaximized ? (
                 <button className="btn btn-default pull-right" onClick={this.onRestore}>
                    <span className="icon icon-resize-small"></span>
                 </button> ) : (
                 <button className="btn btn-default pull-right" onClick={this.onMaximize}>
                   <span className="icon icon-resize-full"></span>
                 </button>)
               }

          </div>
       </header>
    )
  }
}

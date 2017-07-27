import React from "react";
import { remote } from "electron";

export default class Copycat extends React.Component {
  /**
   * @param {MouseEventt} e
   */
  onChange( e ){
    remote.getCurrentWindow().setTitle( e.target.value );
  }
  /**
   * @returns {ReactElement}
   */
  render() {
    return (
      <div>
        <input placeholder="Start typing here" onChange={this.onChange.bind( this )} />
        <ul>
        {this.props.children}
        </ul>
      </div>
    )
  }
}

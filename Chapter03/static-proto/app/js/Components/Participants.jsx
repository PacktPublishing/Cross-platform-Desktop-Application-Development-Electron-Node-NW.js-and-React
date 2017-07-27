import React from "react";
import PropTypes from "prop-types";

export default class Participants extends React.Component {
  render(){
    return (
      <div className="pane pane-sm sidebar">
        <ul className="list-group">
          <li className="list-group-item">
              <div className="media-body">
                <strong><span className="icon icon-user"></span>&nbsp;Name</strong>
                <p>Joined 2 min ago</p>
              </div>
            </li>
        </ul>
      </div>
    );
  }
}
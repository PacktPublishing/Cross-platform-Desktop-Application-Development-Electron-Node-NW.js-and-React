import React from "react";
import TimeAgo from "react-timeago";
import PropTypes from "prop-types";

export default class Participants extends React.Component {
  /**
   * @param {React.Props} props
   */
  constructor( props ){
    super( props );
    this.state = {
      participants: []
    }
    props.client.on( "participants", this.onClientParticipants );
  }
  /**
   * Set default properties (React.Component API)
   */
  static defaultProps = {
    client: null
  }
  /**
   * Validate properties (React.Component API)
   */
  static propTypes = {
    client: PropTypes.object.isRequired
  }
  /**
   * Handle client's participants event
   * @param {array} msg
   */
  onClientParticipants = ( participants ) => {
    this.setState({
      participants: participants
    })
  };

  /**
   * Render component (React component lifecycle method)
   */
  render(){
    const { participants } = this.state;
    return (
      <div className="pane pane-sm sidebar">
        <ul className="list-group">
          {participants.map(( user ) => (
            <li className="list-group-item" key={user.name}>
              <div className="media-body">
                <strong><span className="icon icon-user"></span>&nbsp;{user.name}</strong>
                <p>Joined <TimeAgo date={user.time} /></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
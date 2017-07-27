import React from "react";
import PropTypes from "prop-types";
const ENTER_KEY = 13;

export default class Conversation extends React.Component {
  /**
   * @param {React.Props} props
   */
  constructor( props ){
    super( props );
    this.messages = [];
    this.state = {
      messages: []
    }
    props.client.on( "text",  this.onClientText );
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
   * Handle client's text event
   * @param {Object} msg
   */
  onClientText = ( msg ) => {
    msg.time = new Date( msg.dateTime );
    this.messages.unshift( msg );
    this.setState({
      messages: this.messages
    });
  }

  /**
   * Handle when Enter pressed while typing
   * @param {KeyboardEvent} e
   */
  onKeydown = ( e ) => {
    if ( e.which === ENTER_KEY && !e.ctrlKey && !e.metaKey && !e.shiftKey ) {
      e.preventDefault();
      this.submit();
    }
  }
  /**
   * Handle when form submitted
   * @param {MouseEvent} e
   */
  onSubmit = ( e ) => {
    e.preventDefault();
    this.submit();
  }
  /**
   * Process submitted data
   */
  submit() {
    this.props.client.message( this.inputEl.value );
    this.inputEl.value = "";
  }
  /**
   * Returns timestamp as a string containing just date when given date
   * not older than today and date and time otherwise
   * @param {Date} date
   */
  static normalizeTime( date ){
    const now = new Date(),
          isToday = ( now.toDateString() === date.toDateString() );
    return isToday ? date.toLocaleTimeString() : date.toLocaleDateString() + ` ` + date.toLocaleTimeString();
  }
  /**
   * Render component (React component lifecycle method)
   */
  render(){
    const { messages } = this.state;
    return (
        <div className="pane padded-more l-chat">
          <ul className="list-group l-chat-conversation">
            {messages.map(( msg, i ) => (
              <li className="list-group-item" key={i}>
                <div className="media-body">
                  <time className="media-body__time">{Conversation.normalizeTime( msg.time )}</time>
                  <strong>{msg.userName}:</strong>
                  {msg.text.split( "\n" ).map(( line, inx ) => (
                    <p key={inx}>{line}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <form onSubmit={this.onSubmit} className="l-chat-form">
            <div className="form-group">
              <textarea required placeholder="Say something..."
                onKeyDown={this.onKeydown}
                className="form-control" ref={ el => { this.inputEl = el; }}></textarea>
            </div>
            <div className="form-actions">
              <button className="btn btn-form btn-primary">OK</button>
            </div>
          </form>
        </div>
    );
  }
}
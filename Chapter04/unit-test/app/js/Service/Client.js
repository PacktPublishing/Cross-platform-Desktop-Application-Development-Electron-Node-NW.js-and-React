const EventEmitter = require( "events" ),
      READY_STATE_OPEN = 1;
import { Message } from "./Message";


export default class Client extends EventEmitter {

  /**
   * Connect the server
   * @param {string} host
   * @param {string} port
   * @returns {Promise}
   */
  connect( host, port ){
    return new Promise(( resolve, reject ) => {
      this.socket = new WebSocket( `ws://${host}:${port}` );

      this.socket.addEventListener( "open", () => {
        resolve();
      });

      this.socket.addEventListener( "error", ( e ) => {
        if ( e.target.readyState > READY_STATE_OPEN ) {
          reject();
        }
      });

      this.socket.addEventListener( "message", e => {
        const msg = Message.fromString( e.data ),
              method = `on${msg.event}`;
        if ( !this[ method ] ) {
          return;
        }
        this[ method ]( msg.data );
      });
    });
  }
  /**
   * Handle "participants" incoming message
   * @private
   * @param {object} data
   */
  onparticipants( data ){
    this.emit( "participants", data );
  }
  /**
   * Handle "text" incoming message
   * @private
   * @param {object} data
   */
  ontext( data ){
    this.emit( "text", data );
  }
  /**
   * Send join event to the server
   * @param {string} userName
   */
  join( userName ) {
    this.userName = userName;
    this.send( "join", userName );
  }
  /**
   * Send message event to the server
   * @param {string} text
   */
  message( text ) {
    this.send( "text", {
      userName: this.userName,
      text,
      dateTime: Date.now()
    });
  }
  /**
   * @private
   * @param {string} event
   * @param {Object} data
   */
  send( event, data ){
    this.socket.send( Message.toString( event, data ) );
  }
}
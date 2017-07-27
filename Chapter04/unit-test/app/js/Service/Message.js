class Message {
  static toString( event, data ){
    return JSON.stringify({
      event, data
    });
  }
  static fromString( text ){
    return JSON.parse( text );
  }
}

exports.Message = Message;
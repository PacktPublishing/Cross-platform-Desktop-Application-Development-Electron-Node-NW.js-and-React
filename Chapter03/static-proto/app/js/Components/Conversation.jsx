import React from "react";

export default class Conversation extends React.Component {

  render(){
    return (
        <div className="pane padded-more l-chat">
          <ul className="list-group l-chat-conversation">
            <li className="list-group-item">
                <div className="media-body">
                  <time className="media-body__time">10.10.2010</time>
                  <strong>Name:</strong>
                    <p>Text...</p>
                </div>
              </li>
          </ul>
          <form className="l-chat-form">
            <div className="form-group">
              <textarea required placeholder="Say something..."
                className="form-control"></textarea>
            </div>
            <div className="form-actions">
              <button className="btn btn-form btn-primary">OK</button>
            </div>
          </form>
        </div>
    );
  }
}
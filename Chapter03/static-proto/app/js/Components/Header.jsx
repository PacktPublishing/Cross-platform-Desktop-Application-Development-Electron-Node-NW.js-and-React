import React from "react";

export default class Header extends React.Component {

  render() {
    return (
      <header className="toolbar toolbar-header">
          <div className="toolbar-actions">
              <button className="btn btn-default pull-right">
                 <span className="icon icon-cancel"></span>
             </button>
          </div>
       </header>
    )
  }
}

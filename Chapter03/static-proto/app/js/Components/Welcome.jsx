import React from "react";

export default class Welcome extends React.Component {

  render() {
    return (
      <div className="pane padded-more">
        <form>
          <div className="form-group">
            <label>Tell me your name</label>
            <input required className="form-control" placeholder="Name" />
          </div>
          <div className="form-actions">
            <button className="btn btn-form btn-primary">OK</button>
          </div>
        </form>
      </div>
    )
  }
}

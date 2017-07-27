import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Textfield } from "react-mdl";
import * as React from "react";
import { TStore } from "../Interfaces";

interface IProps {
  store: TStore;
}
export default class AddFeedDialog extends React.Component<IProps, {}> {

  private urlEl: Textfield;
  private formEl: HTMLFormElement;

  // Handle "form submit" event
  private onSubmit = ( e: React.MouseEvent<HTMLFormElement>  ) => {
    // https://github.com/react-mdl/react-mdl/issues/465
    const urlEl = this.urlEl as any;
    e.preventDefault();
    this.save( urlEl.inputRef.value );
  }
  // Try to add a given URL into feed list
  async save( url: string ){
    const { addFeed, fetchMenu } = this.props.store;
    await addFeed( url );
    await fetchMenu();
    if ( !this.props.store.state.feedError ){
      this.formEl.reset();
    }
  }

  // Handle "close modal" event
  private close = () => {
     this.props.store.toggleOpenAddFeed( false );
     this.formEl.reset();
  }

  render() {
    const { isOpenAddFeed } = this.props.store.state;

    return (
      <div>

        <Dialog open={isOpenAddFeed}>
          <DialogTitle>New Feed</DialogTitle>
          <DialogContent>
            <form onSubmit={this.onSubmit} ref={(el: HTMLFormElement) => { this.formEl = el; }}>

            <Textfield
                label="URL"
                required
                floatingLabel
                ref={(el: Textfield) => { this.urlEl = el; }}
            />

            </form>
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={this.onSubmit}>Save</Button>
            <Button type="button" onClick={this.close}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


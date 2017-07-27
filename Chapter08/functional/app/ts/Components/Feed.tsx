import * as React from "react";
import { shell } from "electron";

import { Card, CardTitle, CardActions, Button, CardText } from "react-mdl";
import { IRssItem, TStore } from "../Interfaces";

interface IProps {
  store: TStore;
}

export default class Feed extends React.Component<IProps, {}> {

  private indexEl: HTMLElement;
  private contentsEl: HTMLElement;
  private webviewEl: Electron.WebviewTag;

  // Convert HTML into plain text
  static stripHtml( html: string ){
    var tmp = document.createElement( "DIV" );
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  private onCloseLink = () => {
    this.indexEl.classList.remove( "is-open" );
    this.webviewEl.src = "blank";
  }

  private onOpenLink = ( e: React.MouseEvent<HTMLElement> ) => {
    const btn = e.target as HTMLElement,
          url = btn.dataset[ "link" ];
    e.preventDefault();
    this.indexEl.classList.add( "is-open" );
    this.webviewEl.src = url;
  }

  componentDidMount() {
    this.webviewEl = this.contentsEl.firstChild as Electron.WebviewTag;
    this.webviewEl.addEventListener( "new-window", ( e ) => {
      e.preventDefault();
      shell.openExternal( e.url );
    });
  }

  render(){
    const { items } =  this.props.store.state;
    return (
      <div className="page-content feed-index" ref={(el: HTMLElement) => { this.indexEl = el; }}>
        <div className="feed-list">

        { items.map(( item: IRssItem, inx: number ) => (
          <Card key={inx} shadow={0} style={{width: "100%", height: "auto", margin: "auto"}}>
           <CardTitle expand style={{color: "#fff", backgroundColor: "#46B6AC"}}>
           {item.title}
           </CardTitle>
            <CardText onClick={this.onCloseLink}>
                { item.description ? Feed.stripHtml( item.description ) : "" }
            </CardText>
            <CardActions border>
                <Button colored data-link={item.link} onClick={this.onOpenLink}>Open</Button>
            </CardActions>
         </Card>
        )) }
        </div>
        <div className="feed-contents"
            ref={(el: HTMLElement) => { this.contentsEl = el; }}
            dangerouslySetInnerHTML={{
            __html: `<webview class="feed-contents__src"></webview>`
          }}></div>
      </div>
    );
  }
}

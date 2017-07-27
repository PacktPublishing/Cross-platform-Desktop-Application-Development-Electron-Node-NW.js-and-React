import * as React from "react";
import { Card, CardTitle, CardActions, Button, CardText } from "react-mdl";


export default class Feed extends React.Component<{}, {}> {

  render(){
    return (
      <div className="page-content feed-index">
        <div className="feed-list">

          <Card shadow={0} style={{width: "100%", height: "auto", margin: "auto"}}>
             <CardTitle expand style={{color: "#fff", backgroundColor: "#46B6AC"}}>
             Title
             </CardTitle>
             <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis, mauris quis mollis porta
             </CardText>
             <CardActions border>
                  <Button colored>Open</Button>
             </CardActions>
           </Card>

        </div>

        <div className="feed-contents"></div>
      </div>
    );
  }
}

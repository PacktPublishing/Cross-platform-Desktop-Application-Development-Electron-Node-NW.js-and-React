import React from 'react';

import Participants from "./Participants.jsx";
import Conversation from "./Conversation.jsx";
/**
* @param {React.Props} props
*/
export default function ChatPane( props ){
  const { client } = props;
  return (
    <div className="pane-group">

      <Participants client={client} />

      <Conversation  client={client} />

    </div>
  );

}

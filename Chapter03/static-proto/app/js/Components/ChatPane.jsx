import React from "react";

import Participants from "./Participants.jsx";
import Conversation from "./Conversation.jsx";

export default function ChatPane( props ){
  return (
    <div className="pane-group">
      <Participants />
      <Conversation />
    </div>
  );

}

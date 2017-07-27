import React from "react";
import * as manifest from "../../../package.json";

export default function Footer(){
    return (
      <footer className="toolbar toolbar-footer">
        <h1 className="title">{manifest.name} v.{manifest.version}</h1>
     </footer>
    );
}

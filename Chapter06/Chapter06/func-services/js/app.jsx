import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import App from "./Containers/App.jsx";
import { appReducer } from "./Reducers";
import Fsys from "./Service/Capturer/Fsys";
import Dom from "./Service/Capturer/Dom";
import Capturer from "./Service/Capturer";
import Tray from "./Service/Tray";
import Shortcut from "./Service/Shortcut"

const store = createStore( appReducer ),
      capturer = new Capturer( new Fsys(), new Dom() ),
      tray = new Tray( capturer, store ),
      shortcut = new Shortcut( capturer, store );


render(<Provider store={store}>
  <App capturer={capturer} />
 </Provider>, document.querySelector( "root" ) );

tray.render();
shortcut.registerAll();
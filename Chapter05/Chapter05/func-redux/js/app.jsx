import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import App from "./Containers/App.jsx";
import { appReducer } from "./Reducers";

const store = createStore( appReducer );

render(<Provider store={store}>
  <App  />
 </Provider>, document.querySelector( "root" ) );

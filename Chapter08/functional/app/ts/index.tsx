import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import "app.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "whatwg-fetch";

import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import appReducers from "./Reducers";

import * as promiseMiddleware from "redux-promise";

import App from "./Containers/App";
import Router from "./Services/Router";

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}

declare var window: Window;



const storeEnhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
  )
);


const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  storeEnhancer
);

const router = new Router( store );

ReactDOM.render(
  <Provider store={store}>
      <App {...this.props} />
  </Provider>,
  document.getElementById( "root" )
);

router.register();

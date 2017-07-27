import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./Containers/App.jsx";
import { appReducer } from "./Reducers";
import DevTools from "./Components/DevTools.jsx";
import logger from 'redux-diff-logger';

const storeEnhancer = compose(
        applyMiddleware( logger ),
        DevTools.instrument()
      );

const store = createStore( appReducer, storeEnhancer );

render(<Provider store={store}>
  <div>
    <App />
    <DevTools />
  </div>
 </Provider>, document.querySelector( "root" ) );

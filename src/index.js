import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootreducer from "./combineReducer";
import App from "./App";
import "./styles.css";
const customLogger = function(store) {
  // console.log("store", store);
  return function(next) {
    // console.log("next", next);
    return function(action) {
      // console.log("action", action);
      console.log("prev store:", store.getState());
      console.log("Action:", action);
      next(action);
      console.log("next store:", store.getState());
    };
  };
};

let store = createStore(rootreducer, applyMiddleware(customLogger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

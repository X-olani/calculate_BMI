import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./store";
import { Component } from "./component";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById("root")
);

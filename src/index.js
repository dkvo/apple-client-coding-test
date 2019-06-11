import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./styles/index.css";
import reducer from "./reducers";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

const createStoreWithMiddleWares = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={createStoreWithMiddleWares}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

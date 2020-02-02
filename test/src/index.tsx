import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReactDOM from "react-dom";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import cardsReducer from "./reducers/cards.reducer";
import "./index.css";

const store = createStore(cardsReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

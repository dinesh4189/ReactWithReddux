import React from "react";

import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App.jsx";
import reducers from "./reducers/reducers";

let store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed : ", store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./App/store";
import App from "./App/components/App";

store.subscribe(() => console.log("Store updated!", store.getState()));

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);

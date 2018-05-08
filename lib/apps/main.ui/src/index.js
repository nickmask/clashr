import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as StateProvider } from "react-redux";

import App from "./App";
import store from "./store";

import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

ReactDOM.render(
  <StateProvider store={store}>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById("root")
);

registerServiceWorker();

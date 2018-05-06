/* global it */
import React from "react";
import ReactDOM from "react-dom";
import AuthVerification from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AuthVerification />, div);
  ReactDOM.unmountComponentAtNode(div);
});

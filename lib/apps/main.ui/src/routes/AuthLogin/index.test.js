/* global it */
import React from "react";
import ReactDOM from "react-dom";
import AuthLogin from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AuthLogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* global it */
import React from "react";
import ReactDOM from "react-dom";
import AuthRegister from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AuthRegister />, div);
  ReactDOM.unmountComponentAtNode(div);
});

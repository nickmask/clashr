/* global it */
import React from "react";
import ReactDOM from "react-dom";
import AuthResetPassword from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AuthResetPassword />, div);
  ReactDOM.unmountComponentAtNode(div);
});

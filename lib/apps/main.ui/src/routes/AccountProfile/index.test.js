/* global it */
import React from "react";
import ReactDOM from "react-dom";
import AccountProfile from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AccountProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* global it */
import React from "react";
import ReactDOM from "react-dom";
import AccountSettings from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AccountSettings />, div);
  ReactDOM.unmountComponentAtNode(div);
});

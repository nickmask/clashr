/* global it */
import React from "react";
import ReactDOM from "react-dom";
import Data from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Data />, div);
  ReactDOM.unmountComponentAtNode(div);
});

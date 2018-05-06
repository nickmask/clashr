/* global it */
import React from "react";
import ReactDOM from "react-dom";
import ErrNotFound from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ErrNotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});

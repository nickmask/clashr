/* global it */
import React from "react";
import ReactDOM from "react-dom";
import ErrUnknown from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ErrUnknown />, div);
  ReactDOM.unmountComponentAtNode(div);
});

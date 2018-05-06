/* global it */
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Auth from "./";

describe("<Auth />", () => {
  const props = {
    routes: []
  };

  let component;
  beforeEach(() => {
    component = shallow(<Auth {...props} />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });
});

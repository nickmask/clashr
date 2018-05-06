/* global describe, it */
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Header from "./";
import routes from "../../routes";

describe("<Header />", () => {
  const props = {
    appName: "xo"
  };

  let component;

  beforeEach(() => {
    component = shallow(<Header {...props} />);
  });

  it("renders correctly", () => {
    expect(component.exists()).toBe(true);
    expect(component.first().name()).toBe("header");
    expect(component.hasClass("Header-main")).toBe(true);
    expect(component.contains(props.appName)).toBe(true);
  });

  describe("props.isLoggedIn === true", () => {
    beforeEach(() => {
      component = component.setProps({ isLoggedIn: true });
    });

    it("displays nav links for private routes", () => {
      const navContainer = component.find("nav");
      expect(navContainer.exists()).toBe(true);
      const navs = navContainer.children();
      expect(navs.length).toBeGreaterThan(1);
      expect(navs.every("NavLink")).toBe(true);
    });

    it("displays the logout option", () => {
      expect(true).toBe(true);
    });
  });

  describe("props.isLoggedIn === false", () => {
    beforeEach(() => {
      component = component.setProps({ isLoggedIn: true });
    });

    it("does not display nav links for private routes", () => {});

    it("displays the login/register option", () => {});
  });
});

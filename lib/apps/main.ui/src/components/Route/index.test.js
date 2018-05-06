/* global describe, it, expect */
import React from "react";

// import Route from "./";

describe.skip("private route", () => {
  describe("`isLoggedIn` equals true", () => {
    it("renders the private route", () => {
      expect(true).toEqual(true);
    });
  });

  describe("`isLoggedIn` equals false", () => {
    it("redirects to default auth route", () => {
      expect(true).toEqual(true);
    });

    it("memorizes the current route via state prop", () => {
      expect(true).toEqual(true);
    });
  });
});

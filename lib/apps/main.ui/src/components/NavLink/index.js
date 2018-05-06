import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { NavLink as RRNavLink } from "react-router-dom";

import "./index.css";

class NavLink extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <RRNavLink />;
  }
}

export default NavLink;

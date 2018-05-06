import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./index.css";

class HeaderNav extends PureComponent {
  static propTypes = {
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool
  };

  static defaultProps = {};

  render() {
    const { to, exact, ...nav } = this.props;
    return (
      <NavLink to={to} exact={exact}>
        {nav.label}
      </NavLink>
    );
  }
}

export default HeaderNav;

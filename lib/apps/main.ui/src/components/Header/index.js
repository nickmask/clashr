import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Container } from "semantic-ui-react";

import routes from "../../routes";

import "./index.css";

// get all private navs with a nav obj and the nav.header flag set to true.
const navlinks = routes.filter(r => r.guarded && (!!r.nav && r.nav.header));

class Header extends PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    appName: PropTypes.string.isRequired
  };

  static defaultProps = {
    isLoggedIn: false
  };

  render() {
    const { appName, isLoggedIn } = this.props;

    return (
      <header className="Header-main">
        <Container>
          <h1>{appName}</h1>
          {isLoggedIn && (
            <nav>
              {navlinks.map((r, i) => (
                <NavLink key={i} to={r.path}>
                  {r.nav.label}
                </NavLink>
              ))}
            </nav>
          )}

          {!isLoggedIn && <div>{"Sign In / Register"}</div>}
        </Container>
      </header>
    );
  }
}

export default Header;

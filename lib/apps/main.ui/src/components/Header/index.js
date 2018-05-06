import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

import routes from "../../routes";

import "./index.css";

// get all private navs with a nav obj and nav.header obj.
const navlinks = routes.filter(r => r.guarded && (!!r.nav && !!r.nav.header));

class Header extends PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    appName: PropTypes.string.isRequired
  };

  static defaultProps = {
    isLoggedIn: false
  };

  state = {
    showAuthActionsModal: false
  };

  _toggleAuthActionsModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showAuthActionsModal: !prevState.showAuthActionsModal
    }));
  };

  render() {
    const { appName, isLoggedIn } = this.props;

    return (
      <header className="Header-main">
        <Container className="Header-container">
          <div className="Header-col-title">
            <h1>{appName}</h1>
          </div>

          <div className="Header-col-navs">
            <Menu as={"nav"} compact>
              {isLoggedIn &&
                navlinks.map((r, i) => (
                  <Menu.Item key={i}>
                    <NavLink to={r.path}>{r.nav.header.label}</NavLink>
                  </Menu.Item>
                ))}

              {!isLoggedIn && [
                <Menu.Item key={"auth-login"}>
                  <NavLink to={"/auth/login"}>{"login"}</NavLink>
                </Menu.Item>,
                <Menu.Item key={"auth-register"}>
                  <NavLink to={"/auth/register"}>{"register"}</NavLink>
                </Menu.Item>
              ]}
            </Menu>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;

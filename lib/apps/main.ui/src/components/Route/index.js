import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route as RRRoute, Redirect } from "react-router-dom";

import { DFLT_AUTH_PATH, DFLT_PRIVATE_PATH } from "../../routes";

class Route extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    path: PropTypes.string,
    exact: PropTypes.bool,
    guarded: PropTypes.bool.isRequired,
    component: PropTypes.element.isRequired,
    routes: PropTypes.array
  };

  static defaultProps = {
    isLoggedIn: false,
    exact: false
  };

  // redirect props as class property to avoid object literal in render fn.
  redirectProps = {
    pathname: DFLT_AUTH_PATH,
    state: { from: "" }
  };

  constructor(props) {
    super(props);

    this.redirectProps.state.from = props.path || DFLT_PRIVATE_PATH;
  }

  // renders the passed-in route and its sub-routes, if any.
  _renderRoute = routeProps => {
    const { component: RouteComponent, routes } = this.props;
    return <RouteComponent {...routeProps} routes={routes} />;
  };

  render() {
    const { path, exact, guarded, isLoggedIn } = this.props;

    // if requested page is marked protected and user is not authenticated,
    // redirect to the default auth page.
    if (guarded && !isLoggedIn) {
      // memorize current route for subsequent redirection upon successful authentication.
      return <Redirect to={this.redirectProps} />;
    }

    // if requested page is public, just render regardless of auth status.
    return <RRRoute path={path} exact={exact} render={this._renderRoute} />;
  }
}

export default Route;

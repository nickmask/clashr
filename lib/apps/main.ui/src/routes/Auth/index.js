import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { Card } from "semantic-ui-react";

import Route from "../../components/Route";

import "./index.css";

class Auth extends PureComponent {
  static propTypes = {
    routes: PropTypes.array
  };

  static defaultProps = {};

  render() {
    const { routes } = this.props;

    return (
      <div className="Auth-main">
        <div className="Auth-routes-main">
          <Card className="Auth-routes-container" fluid>
            <Switch>{routes.map((r, i) => <Route key={i} {...r} />)}</Switch>
          </Card>
        </div>
      </div>
    );
  }
}

export default Auth;

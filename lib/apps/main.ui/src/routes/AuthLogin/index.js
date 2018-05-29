import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import { AUTH_TOKEN } from "../../constants";
import { userLoggedIn } from "../../store/actions";

import {
  Icon,
  Card,
  Input,
  Button,
  Header,
  Divider,
  Checkbox
} from "semantic-ui-react";

import "./index.css";

class AuthLogin extends PureComponent {
  static propTypes = {};

  static defaultProps = {};
  state = {
    email: "",
    password: ""
  };

  onChange = e =>
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });

  onKeyPress = e => {
    if (e.key === "Enter") {
      this._confirm();
    }
  };

  _confirm = async () => {
    const { email, password } = this.state;
    const result = await this.props.loginMutation({
      variables: {
        email,
        password
      }
    });
    const { token } = result.data.login;
    this._saveUserData(token);
    this.props.login();
    this.props.history.push(`/dashboard`);
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Card.Content className="AuthLogin-main">
        <Card.Content>
          <Card.Header>
            <Header icon dividing as="h2" textAlign="center">
              <Icon name="sign in" />
              {"Sign in to Clashr"}
            </Header>
          </Card.Header>
        </Card.Content>

        <Card.Content>
          <Divider hidden />

          <div className="AuthLogin-input-group">
            <Input
              iconPosition="left"
              placeholder="username/email"
              name="email"
              value={email}
              onChange={this.onChange}
            >
              <Icon name="user" />
              <input />
            </Input>

            <br />
            <br />

            <Input
              iconPosition="left"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            >
              <Icon name="privacy" />
              <input />
            </Input>

            <br />
            <br />

            <Checkbox label="Remember me for 30 days" />
          </div>

          <Button primary positive fluid onClick={this._confirm}>
            {"Login"}
          </Button>
        </Card.Content>
      </Card.Content>
    );
  }
}

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(userLoggedIn());
    }
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  graphql(LOGIN_MUTATION, { name: "loginMutation" })
)(AuthLogin);

import React, { PureComponent } from "react";
import { Icon, Card, Input, Button, Header, Divider } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import { AUTH_TOKEN } from "../../constants";

import "./index.css";

class AuthRegister extends PureComponent {
  state = {
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  };

  static propTypes = {};

  static defaultProps = {};

  onChange = e =>
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });

  _confirm = async () => {
    const { name, email, password } = this.state;

    const result = await this.props.signupMutation({
      variables: {
        name,
        email,
        password
      }
    });
    const { token } = result.data.signup;
    this._saveUserData(token);
    this.props.history.push(`/auth/login`);
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  render() {
    const { email, name, password, confirmPassword } = this.state;
    return (
      <Card.Content className="AuthRegister-main">
        <Card.Content>
          <Card.Header>
            <Header icon dividing as="h2" textAlign="center">
              <Icon name="write square" />
              {"Sign up for Clashr"}
            </Header>
          </Card.Header>
        </Card.Content>

        <Card.Content>
          <Divider hidden />

          <div className="AuthRegister-input-group">
            <Input
              iconPosition="left"
              placeholder="email"
              name="email"
              value={email}
              onChange={this.onChange}
            >
              <Icon name="mail" />
              <input />
            </Input>

            <br />
            <br />

            <Input
              iconPosition="left"
              placeholder="username"
              name="name"
              value={name}
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
            >
              <Icon name="privacy" />
              <input />
            </Input>

            <br />
            <br />

            <Input
              iconPosition="left"
              placeholder="confirm password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.onChange}
            >
              <Icon name="privacy" />
              <input />
            </Input>
          </div>

          <Button primary positive fluid onClick={this._confirm}>
            {"Register"}
          </Button>
        </Card.Content>
      </Card.Content>
    );
  }
}

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export default compose(graphql(SIGNUP_MUTATION, { name: "signupMutation" }))(
  AuthRegister
);

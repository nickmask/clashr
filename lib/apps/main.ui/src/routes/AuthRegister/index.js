import React, { PureComponent } from "react";
import { Icon, Card, Input, Button, Header, Divider } from "semantic-ui-react";

import "./index.css";

class AuthRegister extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
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
            <Input iconPosition="left" placeholder="email">
              <Icon name="mail" />
              <input />
            </Input>

            <br />
            <br />

            <Input iconPosition="left" placeholder="username">
              <Icon name="user" />
              <input />
            </Input>

            <br />
            <br />

            <Input iconPosition="left" placeholder="password" type="password">
              <Icon name="privacy" />
              <input />
            </Input>

            <br />
            <br />

            <Input
              iconPosition="left"
              placeholder="confirm password"
              type="password"
            >
              <Icon name="privacy" />
              <input />
            </Input>
          </div>

          <Button primary positive fluid>
            {"Register"}
          </Button>
        </Card.Content>
      </Card.Content>
    );
  }
}

export default AuthRegister;

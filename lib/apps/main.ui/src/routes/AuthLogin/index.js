import React, { PureComponent } from "react";
import {
  Icon,
  Card,
  Input,
  Button,
  Header,
  Divider,
  Checkbox
} from "semantic-ui-react";
import { connect } from "react-redux";

import { tick } from "../../store/actions";

import "./index.css";

class AuthLogin extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  render() {
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
            <Input iconPosition="left" placeholder="username/email">
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

            <Checkbox label="Remember me for 30 days" />
          </div>

          <Button primary positive fluid>
            {"Login"}
          </Button>
          <Button onClick={() => this.props.onTick()} />
          {this.props.tick && <div>It's a tick!</div>}
        </Card.Content>
      </Card.Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    tick: state.tick.tick
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTick: () => {
      dispatch(tick());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);

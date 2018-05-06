import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";

import "./index.css";

class Footer extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <footer className="Footer-main">
        <Container>
          <h1>{"Footer"}</h1>
        </Container>
      </footer>
    );
  }
}

export default Footer;

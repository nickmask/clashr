import React, { PureComponent } from "react";
import { Header, Container } from "semantic-ui-react";
// import PropTypes from "prop-types";

import "./index.css";

class Footer extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <footer className="Footer-main">
        <Container className="Footer-container">
          <div className="Footer-col-title">
            <Header as="h3" inverted>
              {"Clashr"}
            </Header>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;

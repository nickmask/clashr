import React, { PureComponent } from "react";
// import PropTypes from "prop-types";

import "./index.css";

class Footer extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <footer className="Footer-main row">
        <h1>{"Footer"}</h1>
      </footer>
    );
  }
}

export default Footer;

import React, { PureComponent } from "react";

import "./index.css";

class Landing extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="Landing-main">
        <h1>{"Landing Page"}</h1>
      </div>
    );
  }
}

export default Landing;

import React, { PureComponent } from "react";

import "./index.css";

class Account extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="Account-main">
        <h1>{"Account Page"}</h1>
      </div>
    );
  }
}

export default Account;

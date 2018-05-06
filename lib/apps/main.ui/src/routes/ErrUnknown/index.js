import React, { PureComponent } from "react";

import "./index.css";

class ErrUnknown extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="ErrUnknown-main">
        <h1>{"ErrUnknown Page"}</h1>
      </div>
    );
  }
}

export default ErrUnknown;

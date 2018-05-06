import React, { PureComponent } from "react";

import "./index.css";

class ErrNotFound extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="ErrNotFound-main">
        <h1>{"ErrNotFound Page"}</h1>
      </div>
    );
  }
}

export default ErrNotFound;

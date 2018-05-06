import React, { PureComponent } from "react";

import "./index.css";

class Dashboard extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="Dashboard-main">
        <h1>{"Dashboard Page"}</h1>
      </div>
    );
  }
}

export default Dashboard;

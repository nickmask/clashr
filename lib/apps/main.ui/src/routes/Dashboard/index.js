import React, { PureComponent } from "react";
import LinkList from "../../components/LinkList";
import CreateLink from "../../components/CreateLink";

import "./index.css";

class Dashboard extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="Dashboard-main">
        <h1>{"Dashboard Page"}</h1>
        <LinkList />
        <br />
        <CreateLink />
      </div>
    );
  }
}

export default Dashboard;

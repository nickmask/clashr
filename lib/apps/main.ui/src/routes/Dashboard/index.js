import React, { PureComponent } from "react";
import LinkList from "../../components/LinkList";
import CreateLink from "../../components/CreateLink";
import Search from "../../components/Search";

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
        <br />
        <Search />
      </div>
    );
  }
}

export default Dashboard;

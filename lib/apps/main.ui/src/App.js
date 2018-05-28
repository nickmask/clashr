import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { Container } from "semantic-ui-react";

import routes from "./routes";
import Route from "./components/Route";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App-main">
        <Header appName={"clashr"} isLoggedIn={isLoggedIn} />

        <main className="App-routes-main">
          <Container className="App-routes-container">
            <Switch>
              {routes.map((r, i) => (
                <Route key={i} isLoggedIn={isLoggedIn} {...r} />
              ))}
            </Switch>
          </Container>
        </main>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default withRouter(connect(mapStateToProps)(App));

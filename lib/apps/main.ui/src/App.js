import React, { Component } from "react";
import { Switch } from "react-router-dom";

import routes from "./routes";
import Route from "./components/Route";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    const isLoggedIn = true;
    return (
      <div className="App-main">
        <Header appName={"clashr"} isLoggedIn={isLoggedIn} />

        <main className="App-routes-container">
          <Switch>
            {routes.map((r, i) => (
              <Route key={i} isLoggedIn={isLoggedIn} {...r} />
            ))}
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;

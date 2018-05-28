import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as StateProvider } from "react-redux";

// GraphQL stuff:
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AUTH_TOKEN } from "./constants";
import { ApolloLink } from "apollo-client-preset";

import App from "./App";
import store from "./store";

import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const httpLink = new HttpLink({ uri: "http://localhost:4000" });

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const authorizationHeader = token ? `Bearer ${token}` : null;
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  });
  return forward(operation);
});

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink);

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StateProvider store={store}>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();

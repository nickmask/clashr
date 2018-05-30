import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as StateProvider } from "react-redux";

// GraphQL stuff:
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, split } from "apollo-client-preset";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import { AUTH_TOKEN, serverWsUri, serverHttpUri } from "./constants";

import App from "./App";
import store from "./store";

import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const httpLink = new HttpLink({ uri: serverHttpUri });

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

const wsLink = new WebSocketLink({
  uri: serverWsUri,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem(AUTH_TOKEN)
    }
  }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLinkWithAuthToken
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <StateProvider store={store}>
        <App />
      </StateProvider>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();

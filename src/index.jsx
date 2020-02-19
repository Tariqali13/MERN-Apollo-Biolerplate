import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import 'antd/dist/antd.css';
// import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./store/reducers";
import thunk from "redux-thunk";
import { ApolloProvider } from "react-apollo";
import { createBrowserHistory } from "history";
import { client } from "./client";
export const history = createBrowserHistory();

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </Router>,
  document.getElementById("app")
);

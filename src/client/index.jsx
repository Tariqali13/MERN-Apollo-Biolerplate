import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

const AuthLink = (operation, next) => {
  //   const token = window.localStorage.getItem("vonza:token") || null;

  operation.setContext(context => ({
    ...context
    // headers: {
    //   ...context.headers,
    //   Authorization: `JWT ${token}`
    // }
  }));

  return next(operation);
};

const link = ApolloLink.from([
  AuthLink,
  new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI })
]);

const client = new ApolloClient({
  link,
  cache
});

export { client };

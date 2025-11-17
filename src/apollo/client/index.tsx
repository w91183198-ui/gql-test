import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql", // ← this is now correct
    // credentials: 'include',    // if you need cookies/auth
  }), // ← use the link here
  cache: new InMemoryCache(),
});

export default client;

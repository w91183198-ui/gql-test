import { ApolloProvider } from "@apollo/client/react";
import client from "./apollo/client";
import "./App.css";
import { FetchResults } from "./components/FetchResults";
import { FetchResultsUsingHook } from "./components/FetchResultsUsingHook";
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="flex gap-x-32">
          <FetchResults />
          <FetchResultsUsingHook />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;

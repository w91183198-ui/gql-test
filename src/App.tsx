import { ApolloProvider } from "@apollo/client/react";
import client from "./apollo/client";
import "./App.css";
import { FetchResults } from "./components/FetchResults";
import { FetchResultsUsingCustomHook } from "./components/FetchResultsUsingCustomHook";
import { FetchResultsUsingHook } from "./components/FetchResultsUsingHook";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="grid grid-cols-[1fr_1fr_3fr]">
          <FetchResults />
          <FetchResultsUsingHook />
          <FetchResultsUsingCustomHook />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;

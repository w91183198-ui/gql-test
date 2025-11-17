import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { type GetResultsGqlResponseType } from "../apollo/types.d";

export const FetchResultsUsingHook = () => {
  const { error, data, loading } = useQuery<GetResultsGqlResponseType>(gql`
    query {
      characters {
        results {
          id
          name
        }
      }
    }
  `);

  if (loading) return <div>loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data && data.characters.results.map((v) => <li key={v.id}>{v.name}</li>)}
    </ul>
  );
};

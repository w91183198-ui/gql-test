import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import client from "../apollo/client";

type Character = {
  id: number;
  name: string;
};

type GetResultsGqlResponseType = {
  characters: {
    results: Character[];
  };
};

export const FetchResults = () => {
  const [results, setResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    client
      .query<GetResultsGqlResponseType>({
        query: gql`
          query {
            characters {
              results {
                id
                name
              }
            }
          }
        `,
      })
      .then((res) => {
        console.log(res.data);
        setResults(res.data?.characters?.results ?? []);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <>loading...</>;

  if (error) return <>error {error}</>;

  return (
    <div>{results && results.map((v) => <li key={v.id}>{v.name}</li>)}</div>
  );
};

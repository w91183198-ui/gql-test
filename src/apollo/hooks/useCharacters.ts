import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { type GetResultsGqlResponseType } from "../types.d";

export const useCharacters = () => {
  return useQuery<GetResultsGqlResponseType>(gql`
    query {
      characters {
        results {
          id
          name
          image
        }
      }
    }
  `);
};

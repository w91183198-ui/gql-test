export type Character = {
  id: number;
  name: string;
};

export type GetResultsGqlResponseType = {
  characters: {
    results: Character[];
  };
};

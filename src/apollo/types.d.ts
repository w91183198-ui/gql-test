export type Character = {
  id: number;
  name: string;
  image: string;
};

export type GetResultsGqlResponseType = {
  characters: {
    results: Character[];
  };
};

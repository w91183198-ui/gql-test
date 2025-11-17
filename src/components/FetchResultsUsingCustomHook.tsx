import { useCharacters } from "../apollo/hooks/useCharacters";

export const FetchResultsUsingCustomHook = () => {
  const { error, data, loading } = useCharacters();

  if (loading) return <div>loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-8">
      {data &&
        data.characters.results.map((v) => (
          <div className="relative w-fit h-fit">
            <img className="rounded-full" src={v.image} alt=""></img>
            <div className="absolute -top-2 -right-2 bg-blue-200 text-black py-1 px-3 border-amber-200 border-2 shadow-4xl rounded-2xl truncate max-w-32">
              {v.name}
            </div>
          </div>
        ))}
    </div>
  );
};

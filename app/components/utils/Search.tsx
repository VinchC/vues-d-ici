/* eslint-disable @typescript-eslint/no-explicit-any */

const Search = ({
  search,
  handleSearchUpdate,
}: {
  search?: string;
  handleSearchUpdate?: any;
}) => {
  return (
    <input
      type="search"
      name={search}
      placeholder="Rechercher"
      aria-label="Recherche du contenu dans le titre ou le texte d'un article ou d'un journal"
      className="bg-white h-8 px-5 w-full max-sm:w-64 rounded-full text-black focus:outline-none"
      onChange={(event) => handleSearchUpdate(event.target.value)}
    />
  );
};

export default Search;

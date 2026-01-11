/* eslint-disable @typescript-eslint/no-explicit-any */

const Search = ({
  search,
  handleSearchUpdate,
}: {
  search?: string;
  handleSearchUpdate?: any;
}) => {
  return (
    <label htmlFor="Rechercher">
    <input
      type="search"
      name={search}
      placeholder="Rechercher"
      aria-label="Filtre les différentes publications disponibles sur le site"
      className="bg-white h-8 px-5 w-full max-sm:w-64 rounded-full text-black focus:outline-none"
      onChange={(event) => handleSearchUpdate(event.target.value)}
    /></label>
  );
};

export default Search;

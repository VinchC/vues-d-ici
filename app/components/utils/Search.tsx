
const Search = ({
  search,
  handleSearchUpdate,
}: {
  search?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSearchUpdate?: any;
}) => {
  return (
    <form action="" className="w-64" id="search-form">
      <input
        type="search"
        name={search}
        placeholder="Filtrer"
        aria-label="Recherche du contenu dans le titre ou le texte d'un article ou d'un journal"
        className="bg-white h-8 px-5 w-full rounded-full text-black focus:outline-none"
        onChange={(event) => handleSearchUpdate(event.target.value)}
      />
    </form>
  );
};

export default Search;

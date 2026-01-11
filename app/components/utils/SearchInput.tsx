import React from "react";

type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  placeholder?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
  placeholder = "Rechercher",
}) => {
  return (
    <input
      type="text"
      className="px-4 py-1 border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none md:w-56 w-48"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputRef}
      placeholder={placeholder}
      aria-label="Recherche du contenu dans le titre ou le texte d'un article ou d'un journal"
    />
  );
};

export default SearchInput;

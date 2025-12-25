"use client";

import { ARTICLES, JOURNALS } from "@/data/data";
import { useState, useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import ProductList from "./ProductList";
import { Publication } from "@/app/types";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [id, setId] = useState<number>(-1);
  const [searchResults, setSearchResults] = useState<Publication[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const publications = ARTICLES.concat(JOURNALS);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setId(-1);
    setSearchResults(
      publications
        .filter(
          (publication) =>
            publication.title
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            publication.text
              ?.toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            publication.chapeau
              ?.toLowerCase()
              .includes(event.target.value.toLowerCase())
        )
        .slice(0, 10)
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      setId((prevIndex) =>
        prevIndex === -1 ? searchResults.length - 1 : prevIndex - 1
      );
    } else if (event.key === "ArrowDown") {
      setId((prevIndex) =>
        prevIndex === searchResults.length - 1 ? -1 : prevIndex + 1
      );
    } else if (event.key === "Enter") {
      if (id !== -1) {
        // const selectedProduct = searchResults[id];
        setQuery("");
        setId(-1);
        setSearchResults([]);
      }
    }
  };

  const handleProductClick = () => {
    setQuery("");
    setId(-1);
  };

  const scrollActiveProductIntoView = (index: Publication["id"]) => {
    const activeProduct = document.getElementById(`product-${index}`);
    if (activeProduct) {
      activeProduct.scrollIntoView({
        block: "nearest",
        inline: "start",
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (id !== -1) {
      scrollActiveProductIntoView(id);
    }
  }, [id]);

  return (
    // <div className="flex flex-col max-w-lg mt-20 mx-auto font-FiraCode">
      <>
      <SearchInput
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
        placeholder="Rechercher"
      />

      {query !== "" && searchResults.length > 0 && (
        <ProductList
          publications={searchResults}
          id={id}
          handleProductClick={handleProductClick}
        />
      )}
      </>
    // {/* </div> */}
  );
}

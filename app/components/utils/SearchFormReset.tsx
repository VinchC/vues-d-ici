"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset2 = () => {
    const form = document.getElementById("search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <>
      <button
        type="reset"
        onClick={reset2}
        className="absolute right-0 top-0 mt-1 mr-10"
      >
        <Link href="" className="search-btn">
          <X className="size-6 text-red-800" />
        </Link>
      </button>
    </>
  );
};

export default SearchFormReset;

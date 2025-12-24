"use client";

import Search from "../components/utils/Search";
import { useState } from "react";
import { ARTICLES, CATEGORIES, JOURNALS } from "@/data/data";
import { CategoryProps } from "../types";
import { PublicationCard } from "../components/[Publications]/PublicationCard";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<null | CategoryProps>(null);

  const articlesByCategory = ARTICLES.filter(
    (article) => article.categoryId === category?.id
  );

  const journalsByCategory = JOURNALS.filter(
    (journal) => journal.categoryId === category?.id
  );

  const publicationsByCategory = articlesByCategory.concat(journalsByCategory);

  const articles = ARTICLES.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.text?.toLowerCase().includes(search.toLowerCase()) ||
      article.chapeau?.toLowerCase().includes(search.toLowerCase())
  );

  const journals = JOURNALS.filter(
    (journal) =>
      journal.title.toLowerCase().includes(search.toLowerCase()) ||
      journal.chapeau.toLowerCase().includes(search.toLowerCase()) ||
      journal.content.find((category) =>
        category.categoryName.toLowerCase().includes(search.toLowerCase())
      )
  );

  const publications = articles.concat(journals);

  return (
    <>
      <div>
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-twe-tab-active:block"
          id="nos-articles"
          role="tabpanel"
          aria-labelledby="nos-articles"
          data-twe-tab-active
        >
          <section className="flex max-md:flex-col justify-center items-center gap-4 max-lg:mt-12n">
            <div className="p-4 gap-2">
              <div className="flex justify-between items-center">
                <h1>
                  {search
                    ? `Résultats de recherche pour ${search}`
                    : "Toutes les publications"}
                </h1>
              </div>

              <p className="mb-4">Rechercher le contenu d&apos;un article</p>
              <div className="mb-8 mt-4">
                <Search search={search} handleSearchUpdate={setSearch} />
              </div>
              <h2>Filtrer par catégorie</h2>
              <div className="grid lg:grid-cols-6 md:grid-cols-3 max-md:grid-cols-2 gap-4 justify-items-center mt-8 mb-8">
                {CATEGORIES.map((category, index) => (
                  <button
                    key={index}
                    className="border-2 border-purple-500 rounded-lg text-sm max-sm:w-32 xs:text-xs w-36 h-8 max-sm:h-12 text-black bg-green-500 hover:bg-green-500/60"
                    onClick={() => setCategory(category)}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-8 justify-items-center">
                {category ? (
                  publicationsByCategory.length > 0 ? (
                    publicationsByCategory
                      .sort(
                        (a, b) =>
                          Date.parse(b.createdAt) - Date.parse(a.createdAt)
                      )
                      .map((publication, index) => (
                        <PublicationCard key={index} {...publication} />
                      ))
                  ) : (
                    <p>Aucun résultat</p>
                  )
                ) : publications.length > 0 ? (
                  publications
                    .sort(
                      (a, b) =>
                        Date.parse(b.createdAt) - Date.parse(a.createdAt)
                    )
                    .map((publication, index) => (
                      <PublicationCard key={index} {...publication} />
                    ))
                ) : (
                  <p>Aucun résultat</p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

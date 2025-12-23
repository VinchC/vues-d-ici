"use client";

// import Search from "../components/utils/Search";
import { useState } from "react";
import { ARTICLES, CATEGORIES, JOURNALS } from "@/data/data";
import { CategoryProps } from "../types";
import { ArticleCard } from "../components/[Publications]/ArticleCard";
// import { JournalCard } from "../components/[Journal]/JournalCard";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<null | CategoryProps>(null);

  const articlesByCategory = 
  ARTICLES.filter(
    (article) => article.categoryId === category?.id
  ) || 
  JOURNALS.filter(
    (journal) => journal.categoryId === category?.id
  );

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

  const publications = articles.concat(journals)

  console.log(articlesByCategory)
  // ||
  // journal.content
  // .map((e, index) => (e.text.find((f) => f.text2.toLowerCase()
  // .includes(search.toLowerCase()))))
  // ||
  // journal.content.find((e) =>
  //   e.text.map((i, index) =>
  //     i.text2.toLowerCase().includes(search.toLowerCase())
  //   )
  // )

  return (
    <>
      {/* <Tab /> */}
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
              {/* <div className="flex justify-between items-center">
                <h1>
                  {search
                    ? `Résultats de recherche pour ${search}`
                    : "Toutes les publications"}
                </h1>
              </div>

              <p className="mb-4">Rechercher le contenu d&apos;un article</p>
              <div className="mb-8">
                <Search search={search} handleSearchUpdate={setSearch} />
              </div> */}
              <h2>Filtrer par catégorie</h2>
              <div className="grid lg:grid-cols-6 sm:grid-cols-3 xs:grid-cols-2 gap-4 justify-items-center mt-8 mb-8">
                {CATEGORIES.map((category, index) => (
                  <button
                    key={index}
                    className="categoryLink"
                    onClick={() => setCategory(category)}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-8 justify-items-center">
                {category ? (
                  articlesByCategory.length > 0 ? (
                    articlesByCategory
                      .sort((a, b) => b.id - a.id)
                      .map((article, index) => (
                        <ArticleCard key={index} {...article} />
                      ))
                  ) : (
                    <p>Aucun résultat</p>
                  )
                ) : publications.length > 0 ? (
                  publications
                    .sort((a, b) => b.id - a.id)
                    .map((publication, index) => (
                      <ArticleCard key={index} {...publication} />
                    ))
                ) : (
                  <p>Aucun résultat</p>
                )}
              </div>
            </div>
          </section>
        </div>
        {/* <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-twe-tab-active:block"
          id="nos-journaux"
          role="tabpanel"
          aria-labelledby="nos-journaux"
        > */}
          {/* <section className="flex max-md:flex-col justify-center items-center gap-4 spacingMedium max-lg:mt-12">
            <div className="p-4 gap-2">
              <div className="flex justify-between items-center">
                <h2>
                  {search
                    ? `Résultats de recherche pour ${search}`
                    : "Tous les journaux"}
                </h2>
              </div>
              <p>Rechercher le contenu d&apos;un journal</p>
              <Search search={search} handleSearchUpdate={setSearch} />
              <div className="grid lg:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2 gap-4 justify-items-center"></div>
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-8">
                {journals.length > 0 ? (
                  journals
                    .sort((a, b) => b.id - a.id)
                    .map((journal, index) => (
                      <JournalCard key={index} {...journal} />
                    ))
                ) : (
                  <p>Aucun résultat</p>
                )}
              </div>
            </div>
          </section> */}
        {/* </div> */}
      </div>
    </>
  );
}

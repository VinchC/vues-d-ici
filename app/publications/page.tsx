"use client";

import { useState } from "react";
import { ARTICLES, CATEGORIES, JOURNALS } from "@/data/data";
import { CategoryProps } from "@/app/types";
import { usePathname } from "next/navigation";
import Search from "../components/utils/Search";
import { PublicationCard } from "../components/[Publications]/PublicationCard";
import Button from "../components/utils/Button";

export default function Publications() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<null | CategoryProps>(null);

  const pathname = usePathname();
  const articlesByCategory = ARTICLES.filter(
    (article) => article.categoryId === category?.id
  );

  const journalsByCategory = JOURNALS.filter(
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

  const publicationsByCategory = articlesByCategory
    .concat(journalsByCategory)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  const publications = articles
    .concat(journals)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return (
    <>
      <section className="secondarySection">
        <h1>
          {search
            ? `Résultats de recherche pour ${search}`
            : "Toutes les publications"}
        </h1>

        <p className="marginBottom">
          Rechercher le contenu d&apos;un article ou d&apos;un journal
        </p>
        <div className="marginBottom">
          <Search search={search} handleSearchUpdate={setSearch} />
        </div>
        <h2 className="marginTop">Filtrer par catégorie</h2>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 max-md:grid-cols-2 gap-4 justify-items-center marginTop marginBottom">
          {CATEGORIES.map((category, index) => (
            <Button
              key={index}
              title={category.title}
              type={"submit"}
              style={"categoryLink greenBG"}
              click={() => setCategory(category)}
            />
          ))}
        </div>
        <div className="cardGrid">
          {pathname != "/" && category && publicationsByCategory.length > 0 ? (
            publicationsByCategory.map((publication, index) => (
              <PublicationCard key={index} {...publication} />
            ))
          ) : publications.length > 0 ? (
            publications.map((publication, index) => (
              <PublicationCard key={index} {...publication} />
            ))
          ) : (
            <p>Aucun résultat</p>
          )}
        </div>
      </section>
    </>
  );
}

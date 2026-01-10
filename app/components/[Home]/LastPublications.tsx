"use client";

import { ARTICLES, JOURNALS } from "@/data/data";
import { PublicationCard } from "../[Publications]/PublicationCard";
import { usePathname } from "next/navigation";

export default function LastPublications() {
  const pathname = usePathname();

  const publicationsLast = ARTICLES.concat(JOURNALS);

  return (
    <>
      <section className="secondarySection">
        <h2>Nos dernières publications</h2>
        <div className="cardGrid">
          {pathname == "/" && publicationsLast.length > 0 ? (
            publicationsLast
              .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
              .map((publication, index) => (
                <PublicationCard key={index} {...publication} />
              ))
              .slice(0, 6)
          ) : (
            <p>Aucun résultat</p>
          )}
        </div>
      </section>
    </>
  );
}

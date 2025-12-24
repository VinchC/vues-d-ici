"use client";

import { ARTICLES, JOURNALS } from "@/data/data";
import { PublicationCard } from "../[Publications]/PublicationCard";
import { usePathname } from "next/navigation";

export default function LastPublications() {
  const pathname = usePathname();

  const publicationsLast = ARTICLES.concat(JOURNALS);

  return (
    <>

        <h2>Nos dernières publications</h2>
        <section className="flex max-md:flex-col justify-center items-center gap-4 max-lg:mt-12n">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-8 justify-items-center">
            {pathname == "/" && publicationsLast.length > 0 ? (
              publicationsLast
                .sort(
                  (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
                )
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

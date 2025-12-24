import { ARTICLES } from "@/data/data";
import Link from "next/link";
import { PublicationCard } from "../PublicationCard";

export const LastArticles = () => {
  return (
    <>
      <section className="section justify-center">
        <div className="p-4 gap-2">
          <h2>Nos derniers articles</h2>
          <div className="articlesGrid">
            {ARTICLES.sort((a, b) => b.id - a.id)
              .slice(0, 6)
              .map((article, index) => (
                <PublicationCard key={index} {...article} />
              ))}
          </div>
          <div className="flex justify-center items-center">
            <Link href="/articles" className="largeButton">
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

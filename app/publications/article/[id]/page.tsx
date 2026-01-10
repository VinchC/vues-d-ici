/* eslint-disable @typescript-eslint/no-explicit-any */

import { ArticleComponent } from "@/app/components/[Publications]/[Article]/ArticleComponent";
import { PublicationCard } from "@/app/components/[Publications]/PublicationCard";
import { ArticleProps } from "@/app/types";
import { ARTICLES } from "@/data/data";

export default async function ArticleDetailPage({ params }: { params: any }) {
  const { id } = await params;

  const article: ArticleProps = ARTICLES.filter((e) => e.id == id)[0];

  const articlesJournal = ARTICLES.filter(
    (e) => e.newspaperId == article.newspaperId && e.id != article.id
  )
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, 3);

  const articlesCategory = ARTICLES.filter(
    (e) => e.categoryId == article.categoryId && e.id != article.id
  )
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, 3);

  return (
    <>
      <section className="secondarySection">
        <ArticleComponent {...article} />
        <div className="marginTop">
          <h2>Dans la même édition</h2>
          <div className="cardGrid">
            {articlesJournal.map((articleJournal, index) => (
              <PublicationCard key={index} {...articleJournal} />
            ))}
          </div>
        </div>
        <div className="marginTop">
          <h2>Dans la même catégorie</h2>
          <div className="cardGrid">
            {articlesCategory.map((articleCategory, index) => (
              <PublicationCard key={index} {...articleCategory} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

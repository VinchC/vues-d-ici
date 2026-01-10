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
    .slice(0, 6)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  const articlesCategory = ARTICLES.filter(
    (e) => e.categoryId == article.categoryId && e.id != article.id
  )
    .slice(0, 6)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return (
    <>
      <section className="flex max-md:flex-col justify-center items-center gap-4 max-lg:mt-12n">
        <div>
          <ArticleComponent {...article} />
          <div className="">
            <h2>Dans la même édition</h2>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-8 justify-items-center">
              {articlesJournal.map((articleJournal, index) => (
                <PublicationCard key={index} {...articleJournal} />
              ))}
            </div>
          </div>
          <div className="p-4 gap-2">
            <h2>Dans la même catégorie</h2>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-8 justify-items-center">
              {articlesCategory.map((articleCategory, index) => (
                <PublicationCard key={index} {...articleCategory} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

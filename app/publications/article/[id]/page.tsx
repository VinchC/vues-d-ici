/* eslint-disable @typescript-eslint/no-explicit-any */

import { ArticleComponent } from "@/app/components/[Publications]/[Article]/ArticleComponent";
import { PublicationCard } from "@/app/components/[Publications]/PublicationCard";
import { ArticleProps } from "@/app/types";
import { ARTICLES } from "@/data/data";

export default async function ArticleDetailPage({ params }: { params: any }) {
  const { id } = await params;

  // const index = id - 1;
  const article: ArticleProps = ARTICLES.filter((e) => e.id == id)[0];

  const articlesJournal = ARTICLES.filter(
    (e) => e.newspaperId == article.newspaperId
  );

  const articlesCategory = ARTICLES.filter(
    (e) => e.categoryId == article.categoryId
  );

  return (
    <>
      <section className="flex max-md:flex-col justify-center items-center gap-4 max-lg:mt-12n">
        <div>
          <ArticleComponent {...article} />
          <div>
            <div className="">
              <h2>Dans la même édition</h2>
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-8 justify-items-center">
                {articlesJournal
                  .sort(
                    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
                  )
                  .map((articleJournal, index) => (
                    <PublicationCard key={index} {...articleJournal} />
                  ))}
              </div>
            </div>
          </div>
          <div>
            <div className="p-4 gap-2">
              <h2>Dans la même catégorie</h2>
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-lg:gap-8 justify-items-center">
                {articlesCategory
                  .sort(
                    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
                  )
                  .map((articleCategory, index) => (
                    <PublicationCard key={index} {...articleCategory} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

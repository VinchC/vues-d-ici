import { ArticleComponent } from "@/app/components/[Publications]/[Article]/ArticleComponent";
import { PublicationCard } from "@/app/components/[Publications]/PublicationCard";
import { ArticleProps } from "@/app/types";
import { ARTICLES } from "@/data/data";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article: ArticleProps =
    slug && slug.length > 3
      ? ARTICLES.filter((e) => e.slug == slug)[0]
      : ARTICLES.filter((e) => e.id == Number(slug))[0];

  const articlesJournal = ARTICLES.filter(
    (e) => e.newspaperId == article.newspaperId && e.id != article.id,
  )
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, 3);

  const articlesCategory = ARTICLES.filter(
    (e) => e.categoryId == article.categoryId && e.id != article.id,
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

"use client";

import { ArticleComponent } from "@/app/components/[Publications]/[Article]/ArticleComponent";
import { ArticleProps } from "@/app/types";
import { ARTICLES } from "@/data/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PublicationDetailPage(req: any) {
  const id = parseInt(req.params.id);

  const index = id - 1;
  const article: ArticleProps = ARTICLES[index];

  console.log(article)

  return (
    <>
      <section className="section">
        <ArticleComponent {...article} />
      </section>
    </>
  );
}

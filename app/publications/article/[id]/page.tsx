/* eslint-disable @typescript-eslint/no-explicit-any */

import { ArticleComponent } from "@/app/components/[Publications]/[Article]/ArticleComponent";
import { ArticleProps } from "@/app/types";
import { ARTICLES } from "@/data/data";

export default async function ArticleDetailPage({ params }: { params: any }) {
  const { id } = await params;

  const index = id - 1;
  const article: ArticleProps = ARTICLES[index];

  return (
    <>
      <ArticleComponent {...article} />
    </>
  );
}

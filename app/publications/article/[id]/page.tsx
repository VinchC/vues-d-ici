/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

import { ArticleComponent } from "@/app/components/[Publications]/[Article]/ArticleComponent";
import { ArticleProps } from "@/app/types";
import { ARTICLES } from "@/data/data";
import React from "react";

export default async function ArticleDetailPage({ params }: { params: any }) {
  const { id } = await params;

  const index = id - 1;
  const article: ArticleProps = ARTICLES[index];

  return (
    <>
      <section className="section">
        <ArticleComponent {...article} />
      </section>
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import { ArticleProps } from "@/app/types";
import { CATEGORIES } from "@/data/data";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ArticleComponent: any = (props: ArticleProps) => {
  const category = CATEGORIES.filter((e) => props.categoryId === e.id).map(
    (e) => e.title
  );

  return (
    <>
      <section className="flex flex-col gap-0">
        <div className="p-4 gap-2 w-full rounded-b-none m-0">
          <div className="flex justify-between items-center">
            <div>
              <h2>{props.title}</h2>
              <button className="categoryLink spacingMedium">{category}</button>
              <p className="text-xs italic spacing">
                Publié le {props.createdAt}
              </p>
            </div>
            <Link
              href={`/publications/journal/${props.newspaperId}`}
              className="mediumButton"
            >
              Lire le journal
            </Link>
          </div>
        </div>
        <img src={props.picture} alt={props.alt} className="m-0 w-full" />
        <div className="p-4 gap-2 w-full rounded-t-none m-0">
          <p className="chapeau">{props.chapeau}</p>
          <article className="textArticle">{props.text}</article>
        </div>
      </section>
    </>
  );
};

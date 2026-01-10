/* eslint-disable @next/next/no-img-element */
import { ArticleProps } from "@/app/types";
import { CATEGORIES } from "@/data/data";
import MainLink from "../../utils/MainLink";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ArticleComponent: any = (props: ArticleProps) => {
  const category = CATEGORIES.filter((e) => props.categoryId === e.id).map(
    (e) => e.title
  );

  const publishDate: string = props.createdAt;
  const date = new Date(publishDate).toLocaleDateString();

  return (
    <>
      <h1>{props.title}</h1>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-green-300">{category}</p>
          <p className="text-xs italic spacing">Publié le {date}</p>
        </div>
        <MainLink
          title={"Lire le journal"}
          href={`/publications/journal/${props.newspaperId}`}
          style={"cta purpleBG"}
        />
      </div>
      <img src={props.picture} alt={props.alt} className="m-0 w-full" />
      <div className="p-4 gap-2 w-full rounded-t-none m-0">
        <p>{props.chapeau}</p>
        <article>{props.text}</article>
      </div>
    </>
  );
};

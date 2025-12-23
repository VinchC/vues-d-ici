/* eslint-disable @next/next/no-img-element */
import { ArticleProps } from "@/app/types";
import { CATEGORIES } from "@/data/data";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ArticleComponent: any = (props: ArticleProps) => {
  const category = CATEGORIES.filter((e) => props.categoryId === e.id).map(
    (e) => e.title
  );

  const publishDate: string = props.createdAt;
  const date = new Date(publishDate).toLocaleDateString()

  return (
    <>
      <h1>{props.title}</h1>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-green-300">{category}</p>
          <p className="text-xs italic spacing">Publié le {date}</p>
        </div>
        <div className="bg-gray-400 text-black text-center align-middle w-40 h-8 border-2 border-purple-500 hover:border-purple-500/60 rounded-lg">
          <Link href={`/publications/journal/${props.newspaperId}`} className="bg-gray-400 text-black text-center align-middle">
            Lire le journal
          </Link>
        </div>
      </div>
      <img src={props.picture} alt={props.alt} className="m-0 w-full" />
      <div className="p-4 gap-2 w-full rounded-t-none m-0">
        <p>{props.chapeau}</p>
        <article>{props.text}</article>
      </div>
    </>
  );
};

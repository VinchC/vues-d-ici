/* eslint-disable @next/next/no-img-element */

import { ArticleProps } from "@/app/types";
import Link from "next/link";

export const PublicationCard = (props: ArticleProps) => {

  return (
    <div className="flex flex-col gap-4 shadow-md rounded-lg w-68 h-76 max-sm:w-80 max-sm:h-80 border-purple-500 dark:border-green-500 border-2">
      <img
        src={props.picture}
        alt={props.alt}
        className="flex items-center max-w-80 max-h-160 rounded-t-lg "
      />
      <div className="px-4">
        <p className="font-semibold">{props.title}</p>
        <p className="text-sm line-clamp-3">{props.chapeau}</p>
        <div className="bg-gray-500 text-black text-center w-24 h-8 border-2 dark:border-green-500 border-purple-500 hover:bg-gray-500/60 rounded-lg">
          {props.categoryId == 6 ? (
            <Link href={`/publications/journal/${props.id}`}>Lire</Link>
          ) : (
            <Link href={`/publications/article/${props.id}`}>Lire</Link>
          )}
        </div>
      </div>
    </div>
  );
};

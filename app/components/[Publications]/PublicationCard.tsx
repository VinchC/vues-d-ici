/* eslint-disable @next/next/no-img-element */

import { ArticleProps } from "@/app/types";
import Link from "next/link";
import ReadLink from "../utils/ReadLink";

export const PublicationCard = (props: ArticleProps) => {
  return (
    <div className="flex flex-col gap-4 shadow-md rounded-lg w-80 h-84 sm:w-64 max-sm:h-80 border-purple-500 dark:border-green-500 border-2">
      <img
        src={props.picture}
        alt={props.alt}
        className="flex items-center justify-content max-w-80 max-h-160 rounded-t-lg "
      />
      <div className="flex flex-col px-4">
        <p className="font-semibold text-xs">{props.title}</p>
        <p className="text-sm line-clamp-3">{props.chapeau}</p>
        {props.categoryId == 6 ? (
          <ReadLink href={`/publications/journal/${props.id}`} />
        ) : (
          <ReadLink href={`/publications/article/${props.id}`} />
        )}
      </div>
    </div>
  );
};

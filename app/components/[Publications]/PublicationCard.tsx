/* eslint-disable @next/next/no-img-element */

import { ArticleProps } from "@/app/types";
import MainLink from "../utils/MainLink";

export const PublicationCard = (props: ArticleProps) => {
  return (
    <div className="flex flex-col gap-4 shadow-md rounded-lg w-80 h-88 border-2 dark:border-purple-500 border-green-500">
      <img
        src={props.picture}
        alt={props.alt}
        className="flex items-center justify-content max-w-80 max-h-160 rounded-t-lg "
      />
      <div className="flex flex-col px-4">
        <p className="font-semibold text-xs">{props.title}</p>
        <p className="text-sm line-clamp-3">{props.chapeau}</p>
        {props.categoryId == 6 ? (
          <MainLink
            title={"Lire"}
            href={`/publications/journal/${props.id}`}
            style={"readLink grayBG"}
          />
        ) : (
          <MainLink
            title={"Lire"}
            href={`/publications/article/${props.id}`}
            style={"readLink grayBG"}
          />
        )}
      </div>
    </div>
  );
};

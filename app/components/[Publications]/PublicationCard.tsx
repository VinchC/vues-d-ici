/* eslint-disable @next/next/no-img-element */

import { ArticleProps } from "@/app/types";
import MainLink from "../utils/MainLink";

export const PublicationCard = (props: ArticleProps) => {
  return (
    <div className="flex flex-col gap-4 shadow-md rounded-lg w-76 h-112 border-2 border-purple-500 dark:border-green-500">
      <div className="max-w-76 max-h-48 rounded-t-lg">
        <img
          src={props.picture}
          alt={props.alt}
          className="w-76 h-48 rounded-t-lg"
        />
      </div>
      <p className="font-semibold publicationCard">{props.title}</p>
      <p className="line-clamp-3 publicationCard">{props.chapeau}</p>
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
  );
};

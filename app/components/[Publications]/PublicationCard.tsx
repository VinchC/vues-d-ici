/* eslint-disable @next/next/no-img-element */

import { ArticleProps } from "@/app/types";
import MainLink from "../utils/MainLink";

export const PublicationCard = (props: ArticleProps) => {
  return (
    <div className="flex flex-col gap-4 shadow-md rounded-lg w-76 h-96 border-2 dark:border-purple-500 border-green-500">
      <img
        src={props.picture}
        alt={props.alt}
        className="max-w-80 max-h-160 rounded-t-lg"
      />
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

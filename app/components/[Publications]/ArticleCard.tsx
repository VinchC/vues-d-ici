/* eslint-disable @next/next/no-img-element */

import { ArticleProps } from "@/app/types";
import Link from "next/link";

export const ArticleCard = (props: ArticleProps) => {
  return (
    <div className="flex flex-col gap-4 shadow-md rounded-lg w-72 h-80 max-sm:w-80 border-purple-500 border-2">
      <img
        src={props.picture}
        alt={props.alt}
        className="flex items-center max-w-80 max-h-160 rounded-t-lg "
      />
      <div className="px-4">
        <p className="font-semibold">{props.title}</p>
        <p className="text-sm line-clamp-3">{props.chapeau}</p>
        <Link href={`/publications/${props.id}`} className="mediumButton">
          Lire l&apos;article
        </Link>
      </div>
    </div>
  );
};

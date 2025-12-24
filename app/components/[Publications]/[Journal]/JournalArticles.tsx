import Link from "next/link";
import { JournalProps } from "@/app/types";
import { ARTICLES } from "@/data/data";
import { PublicationCard } from "../PublicationCard";

export const JournalArticles = (props: JournalProps) => {
  const articlesJournal = ARTICLES.filter((e) => e.newspaperId == props.id);

  const minIndex = 1;
  const maxIndex = 6;

  return (
    <>
        <div className="p-4 gap-2">
          <h2>Dans cette édition</h2>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 justify-items-center">
            {articlesJournal
              .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
              .map((articleJournal, index) => (
                <PublicationCard key={index} {...articleJournal} />
              ))}
          </div>
          <div className="flex justify-between mt-8">
            {props.id - 1 >= minIndex ? (
              <Link
                href={`/publications/journal/${props.id - 1}`}
                className="bg-orange-500 text-black text-md text-center w-40 max-sm:w-32 max-sm:text-sm py-1 h-8 border-2 border-gray-500 hover:bg-orange-500/60 rounded-lg"
              >
                Edition précédente
              </Link>
            ) : (
              <div></div>
            )}
            {props.id + 1 <= maxIndex ? (
              <Link
                href={`/publications/journal/${props.id + 1}`}
                className="bg-orange-500 text-black text-center w-40 max-sm:w-32 max-sm:text-sm py-1 h-8 border-2 border-gray-500 hover:bg-orange-500/60 rounded-lg"
              >
                Edition suivante
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
    </>
  );
};

import { JournalProps } from "@/app/types";
import { ARTICLES, JOURNALS } from "@/data/data";
import MainLink from "../../utils/MainLink";
import { PublicationCard } from "../PublicationCard";

export const JournalArticles = (props: JournalProps) => {
  const articlesJournal = ARTICLES.filter((e) => e.newspaperId == props.id);
  const journals = JOURNALS.map((e) => e.id);

  const indexMin = Math.min(...journals);
  const indexMax = Math.max(...journals);

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
          {props.id - 1 >= indexMin ? (
            <MainLink
              title={"Edition précédente"}
              href={`/publications/journal/${props.id - 1}`}
              style={"cta purpleBG"}
            />
          ) : (
            <div></div>
          )}{" "}
          {props.id + 1 <= indexMax ? (
            <MainLink
              title={"Edition suivante"}
              href={`/publications/journal/${props.id + 1}`}
              style={"cta purpleBG"}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

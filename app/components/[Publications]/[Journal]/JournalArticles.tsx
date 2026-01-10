import { JournalProps } from "@/app/types";
import { ARTICLES, JOURNALS } from "@/data/data";
import MainLink from "../../utils/MainLink";
import { PublicationCard } from "../PublicationCard";

export const JournalArticles = (props: JournalProps) => {
  const articlesJournal = ARTICLES.filter(
    (e) => e.newspaperId == props.id
  ).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  const journals = JOURNALS.map((e) => e.id);

  const indexMin = Math.min(...journals);
  const indexMax = Math.max(...journals);

  return (
    <>
      <h2>Dans cette édition</h2>
      <div className="cardGrid">
        {articlesJournal.map((articleJournal, index) => (
          <PublicationCard key={index} {...articleJournal} />
        ))}
      </div>
      <div className="flex justify-evenly marginTop">
        {props.id - 1 >= indexMin ? (
          <MainLink
            title={"Edition précédente"}
            href={`/publications/journal/${props.id - 1}`}
            style={"cta purpleBG"}
          />
        ) : (
          <div></div>
        )}
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
    </>
  );
};

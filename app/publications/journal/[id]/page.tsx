/* eslint-disable @typescript-eslint/no-explicit-any */
// import { JournalArticles } from "@/app/components/[Publications]/[Journal]/JournalArticles";
import { JournalComponent } from "@/app/components/[Publications]/[Journal]/JournalComponent";
import { JournalProps } from "@/app/types";
import { JOURNALS } from "@/data/data";

export default async function JournalDetailPage({ params }: { params: any }) {
  const { id } = await params;

  const index = id - 1;
  const journal: JournalProps = JOURNALS[index];

  console.log(journal);

  return (
    <>
      <section className="section">
        <JournalComponent {...journal} />
      </section>
      {/* <section className="section">
        <JournalArticles {...journal} />
      </section> */}
    </>
  );
}

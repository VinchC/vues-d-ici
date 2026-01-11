/* eslint-disable @typescript-eslint/no-explicit-any */

import { JournalArticles } from "@/app/components/[Publications]/[Journal]/JournalArticles";
import { JournalComponent } from "@/app/components/[Publications]/[Journal]/JournalComponent";
import { JournalProps } from "@/app/types";
import { JOURNALS } from "@/data/data";

export default async function JournalDetailPage({ params }: { params: any }) {
  const { id } = await params;

  const journal: JournalProps = JOURNALS.filter((e) => e.id == id)[0];

  console.log(journal)

  return (
    <>
      <section className="secondarySection">
        <JournalComponent {...journal} />
        <JournalArticles {...journal} />
      </section>
    </>
  );
}

"use client";

import { BackTheJournal } from "./components/[Home]/BackTheJournal";
import { Hero } from "./components/[Home]/Hero";
import LastPublications from "./components/[Home]/LastPublications";
import { WhereToFind } from "./components/[Home]/WhereToFind";

export default function Home() {
  return (
    <>
      <div className="p-4 gap-2">
        <Hero />
        <LastPublications />
        <WhereToFind />
        <BackTheJournal />
      </div>
    </>
  );
}

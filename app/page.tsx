"use client";

import { BackTheJournal } from "./components/[Home]/BackTheJournal";
import { Hero } from "./components/[Home]/Hero";
import LastPublications from "./components/[Home]/LastPublications";
import { WhereToFind } from "./components/[Home]/WhereToFind";

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <Hero />
        <LastPublications />
        <WhereToFind />
        <BackTheJournal />
      </div>
    </>
  );
}

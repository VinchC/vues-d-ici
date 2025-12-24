"use client";

import { BackTheJournal } from "./components/[Home]/BackTheJournal";
import { Hero } from "./components/[Home]/Hero";
import { WhereToFind } from "./components/[Home]/WhereToFind";
import { LastArticles } from "./components/[Publications]/[Article]/LastArticles";

export default function Home() {
  return (
    <>
      <Hero />
      <LastArticles />
      <WhereToFind />
      <BackTheJournal />
    </>
  );
}

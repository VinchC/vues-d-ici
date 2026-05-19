"use client";

import { BackTheJournal } from "./components/[Home]/BackTheJournal";
import { Hero } from "./components/[Home]/Hero";
import LastPublications from "./components/[Home]/LastPublications";
import { WhereToFind } from "./components/[Home]/WhereToFind";
import EmblaCarousel from "./components/[Carousel]/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "./styles/embla.css";

import { ARTICLES } from "@/data/data";
import { ArticleProps } from "./types";
const OPTIONS: EmblaOptionsType = { loop: true, duration: 50 };
const SLIDES: ArticleProps[] = ARTICLES.filter((e) => e.id > 36);

export default function Home() {
  return (
    <>
      <Hero />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <LastPublications />
      <WhereToFind />
      <BackTheJournal />
    </>
  );
}

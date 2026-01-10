"use client";

import { BackTheJournal } from "./components/[Home]/BackTheJournal";
import { Hero } from "./components/[Home]/Hero";
import LastPublications from "./components/[Home]/LastPublications";
import { WhereToFind } from "./components/[Home]/WhereToFind";
import EmblaCarousel from "./components/[Carousel]/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "./styles/embla.css";

import { CAROUSELPICTURES } from "@/data/data";
import { CarouselPictureProps } from "./types";
const OPTIONS: EmblaOptionsType = { loop: true, duration: 50 };
const SLIDES: CarouselPictureProps[] = CAROUSELPICTURES;

export default function Home() {
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Hero />
      <LastPublications />
      <WhereToFind />
      <BackTheJournal />
    </>
  );
}

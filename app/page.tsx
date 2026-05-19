"use client";

import { Hero } from "./components/[Home]/Hero";
import LastPublications from "./components/[Home]/LastPublications";
import { WhereToFind } from "./components/[Home]/WhereToFind";
import "./styles/embla.css";

export default function Home() {
  return (
    <>
      <Hero />
      <LastPublications />
      <WhereToFind />
    </>
  );
}

"use client";
import MainLink from "./components/utils/MainLink";
import "./styles/not-found.css";

export default function Error() {
  return (
    <>
      <section className="error-container">
        <span>O</span>
        <span>O</span>
        <span>P</span>
        <span>S</span>
      </section>
      <div className="text-center flex flex-col gap-4">
        <p>Une erreur s&apos;est produite.</p>
        <div className="flex justify-center">
          <MainLink
            title={"Retour à l'accueil"}
            href={"/"}
            style={"cta yellowBG"}
          />
        </div>
      </div>
    </>
  );
}

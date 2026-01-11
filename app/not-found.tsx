import MainLink from "./components/utils/MainLink";
import "./styles/not-found.css";

export default function Custom404() {
  return (
    <>
      <section className="notfound-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="flex justify-center">
        <MainLink
          title={"Retour à l'accueil"}
          href={"/"}
          style={"cta yellowBG"}
        />
      </div>
    </>
  );
}

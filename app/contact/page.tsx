import Link from "next/link";
import Contact from "../components/[ContactForm]/Contact";

export default function ContactPage() {
  return (
    <>
      <section className="secondarySection">
        <h1>Nous contacter</h1>
        <p>
          Vous avez une question, voulez adhérer au journal ou nous partager un
          évènement, une info ?
        </p>
        <p>
          Envoyez nous un mail à{" "}
          <strong>
            <Link href="mailto:journaldequartier1920@gmail.com">
              journaldequartier1920@gmail.com
            </Link>
          </strong>{" "}
          ou remplissez le formulaire ci-dessous et nous reviendrons vers vous
          au plus vite !
        </p>
        <Contact />
      </section>
    </>
  );
}

import Link from "next/link";
import Contact from "../components/[ContactForm]/Contact";

export default function ContactPage() {
  return (
    <>
      <section className="flex max-md:flex-col justify-center items-center gap-4 spacingMedium max-lg:mt-12">
        <div className="p-4 gap-2">
          <h2>Nous contacter</h2>
          <p>
            Vous avez une question, voulez adhérer au journal ou nous partager
            un évènement, une info ?
          </p>
          <p className="whitespace-pre-line leading-7 max-lg:text-sm max-sm:text-xs">
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
        </div>
      </section>
    </>
  );
}

import { FORM_FIELDS } from "../../data/data";
import Link from "next/link";
import FormComponent from "../components/[ContactForm]/FormComponent";
import PolicyAcceptance from "../components/utils/PolicyAcceptance";

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
          <div className="isolate py-12">
            <form action="#" method="POST" className="mx-auto max-w-2xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FORM_FIELDS.map((e, index) => (
                  <FormComponent key={index} {...e} />
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="message-subject" className="block font-semibold">
                    Objet du message
                  </label>
                  <div className="relative">
                    <label htmlFor="subject" className="sr-only">
                      Sujet
                    </label>
                    <select
                      id="message-subject"
                      name="message-subject"
                      className="block w-full text-black rounded-xl border-0 px-3.5 py-2 bg-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 h-10"
                      required
                    >
                      <option value="">--Choisissez un sujet--</option>
                      <option value="join">Adhésion</option>
                      <option value="ad">Encart publicitaire</option>
                      <option value="event">Evènement</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block font-semibold">
                    Message
                  </label>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-xl border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-200 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <PolicyAcceptance />
              </div>
              <div className="mt-8 flex justify-center">
                <button type="submit" className="categoryLink">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

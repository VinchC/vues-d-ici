import Link from "next/link";
import {
  MAIN_DISTRIBUTION_PLACES,
  SECONDARY_DISTRIBUTION_PLACES,
} from "@/data/data";
import { useState } from "react";
import UpAccordionIcon from "../icons/UpAccordionIcon";
import DownAccordionIcon from "../icons/DownAccordionIcon";

export const WhereToFind = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [chosenPlace, setChosenPlace] = useState<string | undefined>();

  function toggleAccordion() {
    const content = document.getElementById("secondary");

    if (content) {
      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0";
        setOpen(false);
      } else {
        content.style.maxHeight = content?.scrollHeight + "px";
        setOpen(true);
      }
    }
  }
  return (
    <>
      <section id="nous-trouver" className="secondarySection">
        <h2>Où trouver le journal ?</h2>
        <p>
          A chaque parution, vous pouvez vous servir gratuitement dans un des
          lieux répartis sur le quartier. Les points de collecte principaux sont
          approvisionnés prioritairement.
        </p>
        <h3 className="marginTop">Points de collecte principaux</h3>
        <p>
          Cliquer sur le{" "}
          <span className="font-bold text-green-600">
            nom de l&apos;établissement
          </span>{" "}
          pour l&apos;afficher sur la carte.
        </p>
        <div className="twoItems">
          <div className="flex-2 marginBottom">
            {MAIN_DISTRIBUTION_PLACES.map((place, index) => (
              <>
                <div key={index}>
                  <button
                    onClick={() => setChosenPlace(place.link)}
                    className="font-bold mt-4 text-green-600"
                  >
                    {place.business_name}
                  </button>
                  <p>
                    {place.address}, {place.city} {place.district}
                  </p>
                </div>
              </>
            ))}
          </div>
          <div className="flex-2">
            {chosenPlace ? (
              <iframe
                src={chosenPlace}
                width="440"
                height="330"
                style={{ marginRight: 1 + "em" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10495.229275063457!2d2.3662814078125094!3d48.88094960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dc6143ed387%3A0xf26bed6076959491!2sParc%20des%20Buttes-Chaumont!5e0!3m2!1sfr!2sfr!4v1766596341521!5m2!1sfr!2sfr"
                width="440"
                height="330"
                style={{ marginRight: 1 + "em" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
        </div>
        <div className="mt-12">
          <button
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              toggleAccordion(), setOpen;
            }}
            className="w-full flex justify-between"
          >
            <h3>Points de collecte secondaires</h3>
            <span className="transition-transform duration-300">
              {open ? <UpAccordionIcon /> : <DownAccordionIcon />}
            </span>
          </button>
          <div
            id="secondary"
            className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
          >
            {SECONDARY_DISTRIBUTION_PLACES.map((place, index) => (
              <Link key={index} href="/">
                <p>{place.business_name}</p>
              </Link>
            ))}
            <p>
              <strong>
                Et plein d’autres commerces, cafés et équipements !
              </strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

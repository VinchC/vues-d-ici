/* eslint-disable @typescript-eslint/no-unused-expressions */
import Link from "next/link";
import {
  MAIN_DISTRIBUTION_PLACES,
  SECONDARY_DISTRIBUTION_PLACES,
} from "@/data/data";
import { useState } from "react";
import UpAccordionIcon from "../icons/UpAccordionIcon";
import DownAccordionIcon from "../icons/DownAccordionIcon";

export const WhereToFind = () => {
  const [open, setOpen] = useState(false);
  const [chosenPlace, setChosenPlace] = useState("");

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
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <section id="nous-trouver">
          <div className="p-4 gap-2">
            <h2>Où trouver le journal ?</h2>
            <p>
              A chaque parution, vous pouvez vous servir gratuitement dans un
              des lieux répartis sur le quartier. Les points de collecte
              principaux sont approvisionnés prioritairement.
            </p>
            <div className="flex max-sm:flex-col-reverse items-center max-sm:items-start mb-8">
                <h3 className="h3Title">Points de collecte principaux</h3>
              <div className="flex-2 flex flex-col gap-2">
                <div>
                  {MAIN_DISTRIBUTION_PLACES.map((place, index) => (
                    <>
                      <div key={index}>
                        <button onClick={() => setChosenPlace(place.link)}>
                          {place.business_name}
                        </button>
                        <p className="text">
                          {place.address}, {place.city} {place.district}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
                <div className="flex-3 flex justify-around items-center max-md:m-auto ml-auto">
                  {chosenPlace ? (
                    <iframe
                      src={chosenPlace}
                      width="600"
                      height="450"
                      style={{ marginRight: 1 + "em" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  ) : (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10495.229275063457!2d2.3662814078125094!3d48.88094960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dc6143ed387%3A0xf26bed6076959491!2sParc%20des%20Buttes-Chaumont!5e0!3m2!1sfr!2sfr!4v1766596341521!5m2!1sfr!2sfr"
                      width="600"
                      height="450"
                      style={{ marginRight: 1 + "em" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                toggleAccordion(), setOpen;
              }}
              className="w-full flex justify-between"
            >
              <h3 className="h3Title">Points de collecte secondaires</h3>
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
                  <p className="text">{place.business_name}</p>
                </Link>
              ))}
              <p className="paragraph">
                <strong>
                  Et plein d’autres commerces, cafés et équipements !
                </strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

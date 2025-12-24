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
      <div id="nous-trouver">
        <section className="section">
          <div className="cardBase">
            <h2>Où trouver le journal ?</h2>
            <p className="paragraph">
              A chaque parution, vous pouvez vous servir gratuitement dans un
              des lieux répartis sur le quartier. Les points de collecte
              principaux sont approvisionnés prioritairement.
            </p>
            <div className="flex max-sm:flex-col-reverse items-center max-sm:items-start mb-8">
              <div className="flex-2 flex flex-col gap-2">
                <h3 className="h3Title">Points de collecte principaux</h3>
                {MAIN_DISTRIBUTION_PLACES.map((place, index) => (
                  <Link key={index} href="/">
                    <p className="font-bold">{place.business_name}</p>
                    <p className="text">
                      {place.address}, {place.city} {place.district}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="flex-3 flex justify-around items-center max-md:m-auto ml-auto">
                <div className="max-lg:w-64 max-lg:h-64 w-96 h-96 bg-red-500 mt-4"></div>
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

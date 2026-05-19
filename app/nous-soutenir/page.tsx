"use client";

import { ASSOCIATION, CHARTER } from "@/data/data";
import SupportComponent from "../components/[Association]/SupportComponent";
import Charter from "../components/[Association]/Charter";

export default function BackUpPage() {
  return (
    <>
      <section className="secondarySection">
        <h1>L&apos;association Vues d&apos;ici</h1>
        <p>
          Le journal de quartier Vues d’ici est une publication locale,
          indépendante et gratuite, mise en place bénévolement par les habitants
          des quartiers Belleville, Jourdain, Buttes- Chaumont et Place des
          Fetes à Paris. L’impression est financée par les cotisations à
          l’association, les encarts publicitaires et les dons libres.
        </p>
        <p>
          Vous pouvez nous soutenir de plusieurs façon: en adhérant à
          l’association, en rejoignant l’équipe on en faisant un don.
        </p>
        <div className="grid grid-cols-2 gap-8 max-md:block marginTop">
          {ASSOCIATION.map((e, index) => (
            <SupportComponent key={index} {...e} />
          ))}
        </div>

      </section>
    </>
  );
}

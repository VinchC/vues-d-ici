import Link from "next/link";
import MainLink from "../utils/MainLink";

export const Hero = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <section>
          <div className="p-4 gap-2">
            <h2>
              L&apos;actu locale <span className="italic font-normal">par</span>{" "}
              et <span className="italic font-normal">pour</span> les habitants
              !
            </h2>
            <p className="mt-8">
              Vues d&apos;ici est un journal gratuit et indépendant soutenu par
              les habitants des quartiers Belleville, Jourdain, Buttes-Chaumont
              et Place des Fêtes à Paris.
            </p>
            <div className="flex justify-evenly mt-8">
              <MainLink title={"Trouver une édition"} href={"/publications"} />
              <MainLink
                title={"Nous soutenir"}
                href={"/association#nous-soutenir"}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

import MainLink from "../utils/MainLink";

export const Hero = () => {
  return (
    <>
      <section className="secondarySection">
        <h2>
          L&apos;actu locale <span className="italic font-normal">par</span> et{" "}
          <span className="italic font-normal">pour</span> les habitants !
        </h2>
        <p className="marginTop">
          Vues d&apos;ici est un journal gratuit et indépendant soutenu par les
          habitants des quartiers Belleville, Jourdain, Buttes-Chaumont et Place
          des Fêtes à Paris.
        </p>
        <div className="flex justify-evenly marginTop">
          <MainLink
            title={"Voir nos publications"}
            href={"/publications"}
            style={"cta purpleBG"}
          />
          <MainLink
            title={"Nous soutenir"}
            href={"/association#nous-soutenir"}
            style={"cta purpleBG"}
          />
        </div>
      </section>
    </>
  );
};

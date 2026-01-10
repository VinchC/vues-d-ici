import MainLink from "../utils/MainLink";

export const BackTheJournal = () => {
  return (
    <>
      <section className="secondarySection">
        <h2>Soutenir le journal</h2>
        <p className="">
          Vous aimez l&apos;initiative et souhaitez investir dans Vues
          d&apos;Ici ? Vous pouvez choisir d&apos;adhérer à l&apos;association
          ou faire un don pour financer la prochaine édition, ainsi que
          rejoindre l&apos;équipe de rédaction !
        </p>
        <div className="flex justify-evenly marginTop">
          <MainLink
            title={"Nous contacter"}
            href={"/contact"}
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

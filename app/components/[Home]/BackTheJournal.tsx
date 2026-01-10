import MainLink from "../utils/MainLink";

export const BackTheJournal = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <section>
          <div className="p-4 gap-2">
            <h2>Soutenir le journal</h2>
            <p className="">
              Vous aimez l&apos;initiative et souhaitez investir dans Vues
              d&apos;Ici ? Vous pouvez choisir d&apos;adhérer à
              l&apos;association ou faire un don pour financer la prochaine
              édition, ainsi que rejoindre l&apos;équipe de rédaction !
            </p>
            <div className="flex justify-evenly mt-8">
              <MainLink title={"Nous contacter"} href={"/contact"} />
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

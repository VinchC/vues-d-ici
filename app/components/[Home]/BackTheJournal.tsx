import Link from "next/link";

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
              <Link
                href="/association#nous-soutenir"
                className="bg-blue-500 text-black text-md text-center w-40 max-sm:w-32 max-sm:text-sm py-1 h-8 border-2 border-gray-500 hover:bg-blue-500/60 rounded-lg"
              >
                Nous soutenir
              </Link>
              <Link
                href="/contact"
                className="bg-blue-500 text-black text-md text-center w-40 max-sm:w-32 max-sm:text-sm py-1 h-8 border-2 border-gray-500 hover:bg-blue-500/60 rounded-lg"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

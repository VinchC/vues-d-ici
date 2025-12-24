import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <section className="section">
        <div className="flex-[3] flex flex-col gap-2 w-full p-4">
          <h2 className="text-4xl max-md:text-3xl font-semibold spacing">
            L&apos;actu locale <span className="italic font-normal">par</span>{" "}
            et <span className="italic font-normal">pour</span> les habitants !
          </h2>
          <p className="paragraph">
            Vues d&apos;ici est un journal gratuit et indépendant soutenu par
            les habitants des quartiers Belleville, Jourdain, Buttes-Chaumonts
            et Place des Fêtes à Paris.
          </p>
          <div className="flex justify-evenly spacingMedium">
            <Link href="/articles#nos-journaux" className="mediumButton">
              Trouver une édition
            </Link>
            <Link
              href="/association#nous-soutenir"
              className="mediumButton"
            >
              Nous soutenir
            </Link>
          </div>
        </div>
        {/* <div className="flex-[2] flex justify-around items-center max-md:m-auto ml-auto">
          <Carousel />
        </div> */}
      </section>
    </>
  );
};

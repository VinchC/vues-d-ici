import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <section>
        <div className="p-4 gap-2">
          <h2>
            L&apos;actu locale <span className="italic font-normal">par</span>{" "}
            et <span className="italic font-normal">pour</span> les habitants !
          </h2>
          <p className="mt-8">
            Vues d&apos;ici est un journal gratuit et indépendant soutenu par
            les habitants des quartiers Belleville, Jourdain, Buttes-Chaumont
            et Place des Fêtes à Paris.
          </p>
          <div className="flex justify-evenly mt-8">
            <Link
              href="/publications?categoryId=6"
              className="bg-yellow-300 hover:bg-yellow-300/60 text-black p-2 rounded-xl w-48 text-center"
            >
              Trouver une édition
            </Link>
            <Link
              href="/association#nous-soutenir"
              className="bg-yellow-300 hover:bg-yellow-300/60 text-black p-2 rounded-xl w-48 text-center"
            >
              Nous soutenir
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

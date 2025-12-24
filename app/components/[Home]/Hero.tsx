import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="">
          <h2 className="text-4xl max-md:text-3xl font-semibold spacing">
            L&apos;actu locale <span className="italic font-normal">par</span>{" "}
            et <span className="italic font-normal">pour</span> les habitants !
          </h2>
          <p>
            Vues d&apos;ici est un journal gratuit et indépendant soutenu par
            les habitants des quartiers Belleville, Jourdain, Buttes-Chaumonts
            et Place des Fêtes à Paris.
          </p>
          <div className="flex justify-evenly">
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
      </div>
    </>
  );
};

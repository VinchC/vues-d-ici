"use client";

import Report from "../components/[Association]/Report";

export default function AssociationPage() {
  return (
    <>
      <section>
        <h2 className="mt-8">Notre association</h2>
        <p>
          Créer du lien sur le quartier, faire connaître ses acteurs, partager
          de l&apos;information, susciter la curiosité... Voici ce qui anime
          notre association depuis sa création en juillet 2018. En travaillant
          ensemble sur des projets - à commencer par la réalisation d’un journal
          de quartier- nous construisons un lien entre voisins dans l’action.
        </p>
        <div className="mt-8">
          <Report />
        </div>
        <h2 className="mt-8">Qu&apos;est-ce que Vues d&apos;Ici ?</h2>
        <p>
          Vues d’Ici est un journal pluriel, citoyen, tourné vers le
          vivre-ensemble et la capacité d’action des habitants. C’est un journal
          local qui couvre les quartiers Pyrénées, Plateau-Buttes Chaumont,
          Jourdain, Place des Fêtes, à cheval sur les 19e et 20e arrondissements
          de Paris. Il est réalisé par des habitants bénévoles, avec ou sans
          expérience du journalisme. Sa version papier est distribuée
          gratuitement (ou contribution libre) via des points de distribution
          (associations, centres sociaux, bibliothèques, centres d’animation,
          commerces...) et de la main à la main.
        </p>
        <h2 className="mt-8">Nous rejoindre</h2>
        <p>
          Vous souhaitez vous impliquer de manière plus régulière dans la
          publication du journal? Nos réunions de rédaction sont ouvertes à
          tous.tes; pour connaître la date de la prochaine, rendez-vous sur
          notre compte instagram ou contactez-nous!
        </p>
        <p>
          Nous sommes à la recherche de Rédacteur, Photographe, Contributeur
          d’idées, Coordinateur éditorial, Relecteur, Animateur du groupe,
          Contact pub, Maquettiste, Coordinateur de l’impression, Distributeur
          des exemplaires papier, Animateur des réseaux sociaux.
        </p>
      </section>
    </>
  );
}

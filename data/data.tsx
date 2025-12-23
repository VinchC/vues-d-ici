import {
  CarouselButtonProps,
  CarouselSliderProps,
  CategoryProps,
  NavLinkProps,
  // MediaProps,
  DistributionPlacesProps,
  ArticleProps,
  CharterProps,
  FormProps,
  JournalProps,
  DisplayContentProps,
  AssociationProps,
} from "../app/types";

import distribution from "@/public/images/distribution_jeunes_ambitieux.jpg";
import station from "@/public/images/station_serge_gainsbourg.jpg";

export const DISPLAY_CONTENT: DisplayContentProps[] = [
  {
    id: 1,
    title: "Articles",
    link: "nos-articles",
    dataTweNavActive: "data-twe-nav-active",
    ariaSelected: true,
  },
  {
    id: 2,
    title: "Journaux",
    link: "nos-journaux",
    ariaSelected: false,
  },
];

export const JOURNALS: JournalProps[] = [
  {
    id: 1,
    title: "nov.-déc. 2021",
    picture: distribution.src,
    alt: "Journal n°1",
    chapeau:
      "Lorem bobo ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    createdAt: "1970-01-01T00:00:01Z",
    categoryId: 6,
    content: [
      {
        id: 1,
        categoryName: "Actooooos et initiatives... pp. 4-6",
        text: [
          "La maison de santé bubu",
          "La médiathèque",
          "Librairie Boréalia",
        ],
      },
      {
        id: 2,
        categoryName: "Le dossier... pp. 7-13",
        text: [
          "Elles et ils défendent une idée de Belleville : leurs visions, leurs combats",
        ],
      },
      {
        id: 3,
        categoryName: "Rencontre... p. 14",
        text: ["Digudus, artiste à Belleville, nulle part ailleurs"],
      },
      {
        id: 4,
        categoryName: "Mémoire... p. 15",
        text: ["Quand Belleville intégra Paris"],
      },
      {
        id: 5,
        categoryName: "Lecture et Agenda... p. 15",
        text: ["Le poète Jean-Luc Evens"],
      },
      {
        id: 6,
        categoryName: "Jeux... p. 16",
        text: ["Photos énigmes"],
      },
    ],
  },
  {
    id: 2,
    title: "mai-juin 2022",
    picture: distribution.src,
    alt: "Journal n°2",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    createdAt: "1970-10-01T00:00:01Z",
    categoryId: 6,
    content: [
      {
        id: 1,
        categoryName: "Actas et initiatives... pp. 4-6",
        text: ["La maison de santé", "La médiathèque", "Librairie Boréalia"],
      },
      {
        id: 2,
        categoryName: "Le dossier... pp. 7-13",
        text: [
          "Elles et ils défendent une idée de Belleville : leurs visions, leurs combats",
        ],
      },
      {
        id: 3,
        categoryName: "Rencontre... p. 14",
        text: ["Digudus, artiste à Belleville, nulle part ailleurs"],
      },
      {
        id: 4,
        categoryName: "Mémoire... p. 15",
        text: ["Quand Belleville intégra Paris"],
      },
      {
        id: 5,
        categoryName: "Lecture et Agenda... p. 15",
        text: ["Le poète Jean-Luc Evens"],
      },
      {
        id: 6,
        categoryName: "Jeux... p. 16",
        text: ["Photos énigmes"],
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "nov.-déc. 2022",
  //   picture: distribution.src,
  //   alt: "Journal n°3",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   createdAt: "1er novembre 2022",
  //       categoryId: 6,
  //   content: [
  //     {
  //       id: 1,
  //       categoryName: "pppppppp Actus et initiatives... pp. 4-6",
  //       text: ["La maison de santé", "La médiathèque", "Librairie Boréalia"],
  //     },
  //     {
  //       id: 2,
  //       categoryName: "Le dossier... pp. 7-13",
  //       text: [
  //         "Elles et ils défendent une idée de Belleville : leurs visions, leurs combats",
  //       ],
  //     },
  //     {
  //       id: 3,
  //       categoryName: "Rencontre... p. 14",
  //       text: ["Digudus, artiste à Belleville, nulle part ailleurs"],
  //     },
  //     {
  //       id: 4,
  //       categoryName: "Mémoire... p. 15",
  //       text: ["Quand Belleville intégra Paris"],
  //     },
  //     {
  //       id: 5,
  //       categoryName: "Lecture et Agenda... p. 15",
  //       text: ["Le poète Jean-Luc Evens"],
  //     },
  //     {
  //       id: 6,
  //       categoryName: "Jeux... p. 16",
  //       text: ["Photos énigmes"],
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "mai-juin 2023",
  //   picture: distribution.src,
  //   alt: "Journal n°4",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   createdAt: "1er mai 2023",
  //       categoryId: 6,
  //   content: [
  //     {
  //       id: 1,
  //       categoryName: "Actus et initiatives... pp. 4-6",
  //       text: ["La maison de santé", "La médiathèque", "Librairie Boréalia"],
  //     },
  //     {
  //       id: 2,
  //       categoryName: "Le dossier... pp. 7-13",
  //       text: [
  //         "Elles et ils défendent une idée de Belleville : leurs visions, leurs combats",
  //       ],
  //     },
  //     {
  //       id: 3,
  //       categoryName: "Rencontre... p. 14",
  //       text: ["Digudus, artiste à Belleville, nulle part ailleurs"],
  //     },
  //     {
  //       id: 4,
  //       categoryName: "Mémoire... p. 15",
  //       text: ["Quand Belleville intégra Paris"],
  //     },
  //     {
  //       id: 5,
  //       categoryName: "Lecture et Agenda... p. 15",
  //       text: ["Le poète Jean-Luc Evens"],
  //     },
  //     {
  //       id: 6,
  //       categoryName: "Jeux... p. 16",
  //       text: ["Photos énigmes"],
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "déc. 2023-jan. 2024",
  //   picture: distribution.src,
  //   alt: "Journal n°5",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   createdAt: "1er décembre 2023",
  //       categoryId: 6,
  //   content: [
  //     {
  //       id: 1,
  //       categoryName: "Actus et initiatives... pp. 4-6",
  //       text: ["La maison de santé", "La médiathèque", "Librairie Boréalia"],
  //     },
  //     {
  //       id: 2,
  //       categoryName: "Le dossier... pp. 7-13",
  //       text: [
  //         "Elles et ils défendent une idée de Belleville : leurs visions, leurs combats",
  //       ],
  //     },
  //     {
  //       id: 3,
  //       categoryName: "Rencontre... p. 14",
  //       text: ["Digudus, artiste à Belleville, nulle part ailleurs"],
  //     },
  //     {
  //       id: 4,
  //       categoryName: "Mémoire... p. 15",
  //       text: ["Quand Belleville intégra Paris"],
  //     },
  //     {
  //       id: 5,
  //       categoryName: "Lecture et Agenda... p. 15",
  //       text: ["Le poète Jean-Luc Evens"],
  //     },
  //     {
  //       id: 6,
  //       categoryName: "Jeux... p. 16",
  //       text: ["Photos énigmes"],
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "mai-juil. 2024",
  //   picture: distribution.src,
  //   alt: "Journal n°6",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...bibi",
  //   createdAt: "1er mai 2024",
  //       categoryId: 6,
  //   content: [
  //     {
  //       id: 1,
  //       categoryName: "Actus et initiatives... pp. 4-6",
  //       text: ["La maison de santé", "La médiathèque", "Librairie Boréalia"],
  //     },
  //     {
  //       id: 2,
  //       categoryName: "Le dossier... pp. 7-13",
  //       text: [
  //         "Elles et ils défendent une idée de Belleville : leurs visions, leurs combats",
  //       ],
  //     },
  //     {
  //       id: 3,
  //       categoryName: "Rencontre... p. 14",
  //       text: ["Digudus, artiste à Belleville, nulle part ailleurs"],
  //     },
  //     {
  //       id: 4,
  //       categoryName: "Mémoire... p. 15",
  //       text: ["Quand Belleville intégra Paris"],
  //     },
  //     {
  //       id: 5,
  //       categoryName: "Lecture et Agenda... p. 15",
  //       text: ["Le poète Jean-Luc Evens"],
  //     },
  //     {
  //       id: 6,
  //       categoryName: "Jeux... p. 16",
  //       text: ["Photos énigmes"],
  //     },
  //   ],
  // },
];

export const FORM_FIELDS: FormProps[] = [
  {
    id: 1,
    title: "first-name",
    fieldName: "Prénom",
    autoComplete: "given-name",
  },
  {
    id: 2,
    title: "last-name",
    fieldName: "Nom de famille",
    autoComplete: "family-name",
  },
  {
    id: 3,
    title: "email",
    fieldName: "Email",
    autoComplete: "email",
  },
  {
    id: 4,
    title: "company",
    fieldName: "Entreprise",
    autoComplete: "organization",
  },
];

export const CHARTER: CharterProps[] = [
  {
    id: 1,
    title: "1. Sur l'implication de chacun",
    text: [
      "Chaque membre du groupe reste libre de participer ou de ne pas participer à l’élaboration d’un numéro. Il détermine son niveau de participation.",
      "Il est attendu que les engagements pris par chacun pour chaque numéro soient tenus.",
      "Les impératifs du journal ne sauraient empiéter sur la liberté de chacun. Des solutions en bonne intelligence devront être cherchées en cas de difficulté d’un participant à contribuer selon les engagements pris.",
      "Plusieurs rôles sont nécessaires à la réalisation du journal. A ce jour, voici les rôles identifiés : Rédacteur, Photographe, Contributeur d’idées, Coordinateur éditorial, Relecteur, Animateur du groupe, Contact pub, Maquettiste, Coordinateur de l’impression, Distributeur des exemplaires papier, Animateur des réseaux sociaux.",
      "Chaque participant peut jouer un ou plusieurs rôles. Plusieurs participants peuvent se partager un rôle.",
      "Nous devrons veiller à ce qu’aucune contrainte extérieure ne porte atteinte à ce projet bénévole et donc tourné vers la libre participation.",
    ],
  },
  {
    id: 2,
    title: "2. Sur les rôles de chacun",
    text: [
      "Rédacteur : réalise des articles",
      "Photographe : réalise des photos",
      "Contributeur d’idées : participe aux réunions, apporte ses idées et propositions",
      "Coordinateur éditorial : suivi du chemin de fer, réception des articles et autres contenus, vérification de la cohérence et de la conformité de ces contenus, propositions d’amélioration des textes écrits.",
      "Relecteur : relecture et corrections typographiques",
      "Animateur du groupe : programme les réunions, propose l’ordre du jour, détermine le mode de compte-rendu, gère le calendrier",
      "Contact pub : démarche les commerçants et autres annonceurs potentiels pour des encarts pub dans le journal",
      "Maquettiste : réalise la maquette",
      "Coordinateur de l’impression : suit les relations avec l’imprimeur",
      "Distributeur des exemplaires papier : alimente en journaux les points de distribution",
      "Animateur des réseaux sociaux : alimente notre présence numérique (Facebook, blog…)",
    ],
  },
  {
    id: 3,
    title: "3. Sur nos échanges groupés",
    text: [
      "Les décisions sur le contenu doivent être prises en réunion, formalisées si besoin dans un compte-rendu ou un chemin de fer.",
      "Entre les réunions, chacun peut réfléchir à des propositions de modifications/ compléments quidevront être soumises au groupe en réunion pour être validées.",
      "La discussion et le consensus sont privilégiés pour prendre les décisions. Le vote à la majorité est utilisable en dernier recours.",
      "Evitons toute invective et remarque personnelle désobligeante dans nos envois groupés qui doivent être réservés à des discussions sur le fond, limités dans la mesure du possible (les réunions sont privilégiées pour nos échanges collectifs), et tournés vers l’avancement du journal.",
    ],
  },
  {
    id: 4,
    title: "4. Sur les choix de contenu",
    text: [
      "Chacun est libre d’exprimer son désaccord sur un contenu, dans un principe de liberté d’expression. Chaque point de vue doit être basé sur des arguments de fond.",
      "Nous partons du principe que chaque proposition de contenu (texte, photo, poème…) a de la valeur et doit pouvoir trouver sa place dans le journal, dans le numéro à en préparation ou l’un des suivants, avec des ajustements si nécessaire en fonction des observations étayées des autres membres du groupe.",
      "Des limites devront être respectées dans les choix de contenu : \n – l’identité du journal telle que nous l’avons définie. Cette définition peut évoluer. A ce jour, elle est la suivante : pluriel, citoyen, tourné vers le vivre-ensemble et la capacité d’action des habitants. \n – le périmètre du journal en terme de lectorat et de distribution. Il correspond aux quartiers Pyrénées, Plateau, Jourdain et Place des Fêtes. \n – le respect des contraintes techniques du journal : espace disponible, rubricage… \n – les règles éthiques du traitement de l’information : vérification des sources, croisement des informations, non-diffamation…",
    ],
  },
  {
    id: 5,
    title: "5. Sur les envois et relectures de contenus",
    text: [
      "Il est demandé au rédacteur de respecter les règles suivantes de production des écrits : \n – Conformité au chemin de fer : sujet, éventuellement angle, et calibrage de l’article \n – Prise en compte de règles journalistiques : \n    - Chaque article doit répondre aux 5W quant à l’information principale (what, why…), c’est-à-dire répondre aux questions quoi, pourquoi, qui, où, quand? \n     - Les informations doivent être vérifiées.Toute citation entre guillemets doit être attribuée.",
      "Le Rédacteur est signataire des articles, il reste responsable de ses productions mais doit se conformer aux limites qui s’appliquent au contenu",
      "Si les modifications sur les textes doivent être soumises au rédacteur avant maquette, le coordinateur éditorial est libre de placer de nouveaux titres, chapo et inter avant et pendant la phase de maquette.",
    ],
  },
  {
    id: 6,
    title: "6. Sur les retours sur la version finale",
    text: [
      "Le journal, une fois maquette, sera adressé à tous (via la liste mail) pour permettre à chacun de partager ses observations avant impression/diffusion.",
    ],
  },
];

export const MAIN_DISTRIBUTION_PLACES: DistributionPlacesProps[] = [
  {
    business_name: "Centre Paris Anim' Clavel",
    address: "24 bis rue Clavel",
    city: "Paris",
    district: "19ème",
  },
  {
    business_name: "Centre Paris Anim' Place des Fêtes",
    address: "2 rue des Lilas",
    city: "Paris",
    district: "19ème",
  },
  {
    business_name: "Centre socio-culturel Archipelia",
    address: "17 rue des Envierges",
    city: "Paris",
    district: "20ème",
  },
  {
    business_name: "Bibliothèque Fessart",
    address: "6 rue Fessart",
    city: "Paris",
    district: "19ème",
  },
  {
    business_name: "MJC Les Hauts de Belleville",
    address: "43 rue du Borrégo",
    city: "Paris",
    district: "20ème",
  },
  {
    business_name: "Bibliothèque Oscar Wilde",
    address: "12 rue du Télégraphe",
    city: "Paris",
    district: "20ème",
  },
];

export const SECONDARY_DISTRIBUTION_PLACES: DistributionPlacesProps[] = [
  {
    business_name: "Bibliothèque de la Place des Fêtes",
  },
  {
    business_name: "La Fabrik coopérative",
  },
  {
    business_name: "La Maison de la Place des Fêtes",
  },
  {
    business_name: "Le DOC",
  },
  {
    business_name: "La librairie Boréalia",
  },
  {
    business_name: "Le foyer Pauline Roland",
  },
  {
    business_name: "L'atelier Kats",
  },
  {
    business_name: "Le théâtre Atelier du Plateau",
  },
  {
    business_name: "L'espace Reine de Saba",
  },
  {
    business_name: "Le coiffeur Ça décoiffe",
  },
  {
    business_name: "Le Point presse La Fée Carabine",
  },
  {
    business_name: "Le centre socio-culturel des Rigoles.",
  },
  {
    business_name: "Les Mairies et Maisons des associations des 19e et 20e",
  },
];

// export const SOCIAL_MEDIA: MediaProps[] = [
//   {
//     href: "https://www.facebook.com/Journal.Vuesdici",
//     icon: <FacebookIcon />,
//     label: "Lien vers la page Facebook de Vues d'ici.",
//   },
//   {
//     href: "https://www.google.fr/maps/place/Pl.+des+F%C3%AAtes,+75019+Paris/@48.8771718,2.3915075,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66dbfb478cde1:0x8bc8dca1c6be6a3d!8m2!3d48.8771683!4d2.3940824!16s%2Fg%2F122czk_y?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
//     icon: <GoogleIcon />,
//     label: "Lien vers la page Google Maps centrée sur la Place des Fêtes.",
//   },
//   {
//     href: "https://www.instagram.com/vues_d_ici_/",
//     icon: <InstagramIcon />,
//     label: "Lien vers la page Instagram de Vues d'ici.",
//   },
//   {
//     href: "https://www.helloasso.com/",
//     icon: <HelloAssoIcon />,
//     label: "Lien vers la page du site Hello Asso.",
//   },
// ];

export const NAVBAR_LINKS: NavLinkProps[] = [
  {
    href: "/articles",
    title: "Publications",
  },
  {
    href: "/#nous-trouver",
    title: "Nous trouver",
  },
  {
    href: "/contact",
    title: "Nous contacter",
  },
  {
    href: "/association",
    title: "L'association",
  },
];

export const FOOTER_LINKS: NavLinkProps[] = [
  {
    href: "/articles",
    title: "Articles",
  },
  {
    href: "/#nous-trouver",
    title: "Nous trouver",
  },
  {
    href: "/association#nous-rejoindre",
    title: "Nous rejoindre",
  },
  {
    href: "/association#nous-soutenir",
    title: "Nous soutenir",
  },
  {
    href: "/contact",
    title: "Nous contacter",
  },
  {
    href: "/association",
    title: "Qui sommes-nous ?",
  },
];

export const CATEGORIES: CategoryProps[] = [
  {
    id: 1,
    picture: distribution.src,
    alt: "Image représentant la catégorie Mémoire & patrimoine",
    title: "Mémoire & patrimoine",
    data_twe_carousel_active: "data-twe-carousel-active",
    href: "/articles?category=",
  },
  {
    id: 2,
    picture: station.src,
    alt: "Image représentant la catégorie Art & culture",
    title: "Art & culture",
    href: "/articles?category=",
  },
  {
    id: 3,
    picture: distribution.src,
    alt: "Image représentant la catégorie Nature & Ecologie",
    title: "Nature & Ecologie",
    href: "/articles?category=",
  },
  {
    id: 4,
    picture: station.src,
    alt: "Image représentant la catégorie Activités",
    title: "Activités",
    href: "/articles?category=",
  },
  {
    id: 5,
    picture: distribution.src,
    alt: "Image représentant la catégorie Actu du journal",
    title: "Actu du journal",
    href: "/articles?category=",
  },
  {
    id: 6,
    picture: station.src,
    alt: "Image représentant la catégorie Editions complètes",
    title: "Editions complètes",
    href: "/articles?category=",
  },
];

export const CAROUSEL_SLIDERS: CarouselSliderProps[] = [
  {
    data_twe_slide: "prev",
    path_d: "M15.75 19.5L8.25 12l7.5-7.5",
    title: "Previous",
    className: "left-0",
  },
  {
    data_twe_slide: "next",
    path_d: "M8.25 4.5l7.5 7.5-7.5 7.5",
    title: "Next",
    className: "right-0",
  },
];

export const CAROUSEL_BUTTONS: CarouselButtonProps[] = [
  {
    data_twe_slide_to: "0",
    aria_label: "slide 1",
    data_twe_carousel_active: "data-twe-carousel-active",
  },
  {
    data_twe_slide_to: "1",
    aria_label: "slide 2",
  },
  {
    data_twe_slide_to: "2",
    aria_label: "slide 3",
  },
  {
    data_twe_slide_to: "3",
    aria_label: "slide 4",
    data_twe_carousel_active: "data-twe-carousel-active",
  },
  {
    data_twe_slide_to: "4",
    aria_label: "slide 5",
  },
  {
    data_twe_slide_to: "5",
    aria_label: "slide 6",
  },
];

export const ASSOCIATION: AssociationProps[] = [
  {
    title: "Adhérer",
    text: "Pour adhérer à l’association, remplissez le formulaire et retournez le par voie postale avec un chèque. \n Vous pouvez également retrouver le bulletin d’adhésion dans chacun des numéros du journal.",
    textButton: "Télécharger le bulletin d'adhésion",
  },
  {
    title: "Faire un don",
    text: "Pour nous soutenir, et nous aider à financer le prochain numéro, cliquez sur le lien ci-dessous. \n Après le paiement, vous recevrez le reçu pour la défiscalisation directement dans votre boîte mail.",
    textButton: "Faire un don",
  },
];

export const ARTICLES: ArticleProps[] = [
  {
    id: 1,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 1",
    chapeau:
      "baba Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: `bubu Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.`,
    createdAt: "1970-01-01T00:00:00Z",
    categoryId: 1,
    newspaperId: 1,
  },
  {
    id: 2,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 2",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "1970-02-01T00:00:00Z",
    categoryId: 2,
    newspaperId: 2,
  },
  {
    id: 3,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 3",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "1970-04-01T00:00:00Z",
    categoryId: 3,
    newspaperId: 3,
  },
  {
    id: 4,
    picture: station.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 4",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "1970-03-01T00:00:00Z",
    categoryId: 4,
    newspaperId: 4,
  },
  {
    id: 5,
    picture: distribution.src,
    alt: "Article à propos de ...",
    title: "Titre de l'article 5",
    chapeau:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
    createdAt: "1970-03-01T00:00:01Z",
    categoryId: 5,
    newspaperId: 5,
  },
  // {
  //   id: 6,
  //   picture: station.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 6",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "06/11/2024",
  //   categoryId: 5,
  //   newspaperId: 6,
  // },
  // {
  //   id: 7,
  //   picture: distribution.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 7",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "07/11/2024",
  //   categoryId: 1,
  //   newspaperId: 1,
  // },
  // {
  //   id: 8,
  //   picture: station.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 8",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "08/11/2024",
  //   categoryId: 2,
  //   newspaperId: 2,
  // },
  // {
  //   id: 9,
  //   picture: distribution.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 9",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "09/11/2024",
  //   categoryId: 3,
  //   newspaperId: 3,
  // },
  // {
  //   id: 10,
  //   picture: station.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 10",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "10/11/2024",
  //   categoryId: 4,
  //   newspaperId: 4,
  // },
  // {
  //   id: 11,
  //   picture: distribution.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 11",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "11/11/2024",
  //   categoryId: 5,
  //   newspaperId: 5,
  // },
  // {
  //   id: 12,
  //   picture: station.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 12",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "12/11/2024",
  //   categoryId: 5,
  //   newspaperId: 6,
  // },
  // {
  //   id: 13,
  //   picture: distribution.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 13",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "13/11/2024",
  //   categoryId: 1,
  //   newspaperId: 1,
  // },
  // {
  //   id: 14,
  //   picture: station.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 14",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "14/11/2024",
  //   categoryId: 2,
  //   newspaperId: 2,
  // },
  // {
  //   id: 15,
  //   picture: distribution.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 15",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem pops ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "15/11/2024",
  //   categoryId: 3,
  //   newspaperId: 3,
  // },
  // {
  //   id: 16,
  //   picture: distribution.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 16",
  //   chapeau:
  //     "Lorem pops ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "16/11/2024",
  //   categoryId: 4,
  //   newspaperId: 4,
  // },
  // {
  //   id: 17,
  //   picture: station.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 17 pops",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.",
  //   createdAt: "17/11/2024",
  //   categoryId: 5,
  //   newspaperId: 5,
  // },
  // {
  //   id: 18,
  //   picture: distribution.src,
  //   alt: "Article à propos de ...",
  //   title: "Titre de l'article 18 Pops",
  //   chapeau:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam quod dicta voluptatum. Aliquid, veniam autem natus necessitatibus labore culpa quo...",
  //   text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto hic ullam minus culpa repudiandae, nesciunt, facilis voluptates quas adipisci dolores tempora quae repellendus commodi deserunt rem? Blanditiis iure voluptas laborum.`,
  //   createdAt: "18/11/2024",
  //   categoryId: 5,
  //   newspaperId: 6,
  // },
];

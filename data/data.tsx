import {
  CarouselButtonProps,
  CarouselSliderProps,
  CategoryProps,
  NavLinkProps,
  DistributionPlacesProps,
  ArticleProps,
  CharterProps,
  FormProps,
  JournalProps,
  DisplayContentProps,
  AssociationProps,
  CarouselPicturesProps,
} from "../app/types";

import distribution from "@/public/images/distribution_jeunes_ambitieux.jpg";
import station from "@/public/images/station_serge_gainsbourg.jpg";
import playground from "@/public/images/inauguration_playground_2.jpg";

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
    id: 20,
    title: "Journal n°20 - déc. 25-mai 26",
    picture: distribution.src,
    alt: "Journal n°20",
    chapeau:
      "Nous et l'IA elle grignote nos vies ? \n La ressource des rigoles \n Les bombasphères",
    createdAt: "2025-12-01T00:00:01Z",
    categoryId: 6,
    link: "/journal/",
    content: [
      {
        id: 201,
        categoryName: "Actus et initiatives... pp. 4-6",
        text: [
          "Les Buttes-Chaumont se rénovent",
          "Visite de la Ressource des Rigoles",
          "Profitons de la Petite Ceinture",
        ],
      },
      {
        id: 202,
        categoryName: "Le dossier... pp. 7-13",
        text: ["Nous et l'IA"],
      },
      {
        id: 203,
        categoryName: "Rencontre... p. 14",
        text: ["Les bombasphères"],
      },
      {
        id: 204,
        categoryName: "Mémoire... p. 15",
        text: ["Le musée de Poulaille rue Fessart"],
      },
      {
        id: 205,
        categoryName: "Lecture et Agenda... p. 15",
        text: ["Quartiers libres, ancêtre de Vues d’Ici"],
      },
      {
        id: 206,
        categoryName: "L'oeil des habitants p. 16",
        text: ["Photos"],
      },
    ],
  },
  {
    id: 19,
    title: "Journal n°19 - juin à sept. 2025",
    picture: distribution.src,
    alt: "Journal n°19",
    chapeau:
      "Nos cafés - du comptoir au coffee-shop \n Lycée Jules Richard - 100 ans qui racontent le quartier \n Nos parts d'ombre avec Fabrice Tassel",
    createdAt: "2025-06-01T00:00:01Z",
    categoryId: 6,
    link: "/journal/",
    content: [
      {
        id: 191,
        categoryName: "Actus et initiatives... pp. 4-6",
        text: [
          "La Maison des réfugiés",
          "Hommage à Maxime Braquet",
          "Aure Chauvet",
        ],
      },
      {
        id: 192,
        categoryName: "Le dossier... pp. 7-13",
        text: ["Un café s'il vous plaît !"],
      },
      {
        id: 193,
        categoryName: "Rencontre... p. 14",
        text: ["Fabrice Tassel"],
      },
      {
        id: 194,
        categoryName: "Mémoire... p. 15",
        text: ["Qui était Jules Richard ?"],
      },
      {
        id: 195,
        categoryName: "Lecture et Agenda... p. 15",
        text: ["Lire Petit chien sans ficelle", "Sélection d'événements"],
      },
      {
        id: 196,
        categoryName: "L'oeil des habitants p. 16",
        text: ["Photos"],
      },
    ],
  },
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
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.1528121628435!2d2.381152076935638!3d48.87581997133458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dc2741727d9%3A0xdacedf28fae0d123!2s24%20bis%20Rue%20Clavel%2C%2075019%20Paris!5e0!3m2!1sfr!2sfr!4v1766595085318!5m2!1sfr!2sfr",
  },
  {
    business_name: "Centre Paris Anim' Place des Fêtes",
    address: "2 rue des Lilas",
    city: "Paris",
    district: "19ème",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5247.910935996512!2d2.393374576935787!3d48.878125471334954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dbe606ab07f%3A0x718d1ff1505e2131!2s2%20Rue%20des%20Lilas%2C%2075019%20Paris!5e0!3m2!1sfr!2sfr!4v1766595743694!5m2!1sfr!2sfr",
  },
  {
    business_name: "Centre socio-culturel Archipelia",
    address: "17 rue des Envierges",
    city: "Paris",
    district: "20ème",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.267375212451!2d2.384435676935477!3d48.87217927133409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66debbbb5a2c9%3A0xe7bdb397f446e6b4!2s17%20Rue%20des%20Envierges%2C%2075020%20Paris!5e0!3m2!1sfr!2sfr!4v1766595826816!5m2!1sfr!2sfr",
  },
  {
    business_name: "Bibliothèque Fessart",
    address: "6 rue Fessart",
    city: "Paris",
    district: "19ème",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0514934402017!2d2.3856191767568165!3d48.87629489944584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dc1ccb7d26b%3A0xf25510e4f0b3d80b!2s6%20Rue%20Fessart%2C%2075019%20Paris!5e0!3m2!1sfr!2sfr!4v1766598819689!5m2!1sfr!2sfr",
  },
  {
    business_name: "MJC Les Hauts de Belleville",
    address: "43 rue du Borrégo",
    city: "Paris",
    district: "20ème",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.231810743399!2d2.397856976756662!3d48.87285729968794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d97a0e00bcb%3A0x4f86684bb38cb92c!2s43%20Rue%20du%20Borr%C3%A9go%2C%2075020%20Paris!5e0!3m2!1sfr!2sfr!4v1766598854846!5m2!1sfr!2sfr",
  },
  {
    business_name: "Bibliothèque Oscar Wilde",
    address: "12 rue du Télégraphe",
    city: "Paris",
    district: "20ème",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.268050359912!2d2.3975108767566446!3d48.872166399736564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d970fb67421%3A0xeefa04683cc0dbc0!2s12%20Rue%20du%20T%C3%A9l%C3%A9graphe%2C%2075020%20Paris!5e0!3m2!1sfr!2sfr!4v1766598890136!5m2!1sfr!2sfr",
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

export const NAVBAR_LINKS: NavLinkProps[] = [
  {
    href: "/publications",
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
export const CAROUSELPICTURES: CarouselPicturesProps[] = [
  {
    id: 1,
    picture: distribution.src,
    alt: "Distribution aux jeunes ambitieux",
    title: "Distribution aux jeunes ambitieux",
  },
  {
    id: 2,
    picture: station.src,
    alt: "Station de métro Serge Gainsbourg",
    title: "Station de métro Serge Gainsbourg",
  },
  {
    id: 3,
    picture: playground.src,
    alt: "Inauguration du playground de la Place des Fêtes",
    title: "Inauguration du playground de la Place des Fêtes",
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
    id: 31,
    picture: distribution.src,
    alt: "Article à propos de Jules Richard",
    title: "Connaissez-vous Jules Richard ?",
    chapeau:
      "Pour le centenaire du lycée Jules Richard, en juin, nous avons rassemblé de grands spécialistes de la stéréoscopie et de la métrologie », explique Joëlle Girard, enseignante dans ce lycée technologique situé rue Carducci organisatrice de l'événement avec son collègue Geoffrey Chavigny.",
    text: `Mais qui était Jules Richard, figure industrielle du quartier du Plateau? Né en 1848, il effectue un apprentissage du métier d’horloger puis devient technicien à l’administration des télégraphes. En 1871, il prend la direction de l’usine de fabrication d’instruments scientifiques créée par son père Félix, rue Mélingue. Alors qu'elle était menacée de faillite, l’usine ainsi reprise en main devient une référence dans son domaine. Jules Richard est à l’origine de progrès majeurs en métrologie, discipline de la mesure, en créant notamment des appareils portatifs, simples et peu coûteux. Passionné de photographie, il se lance aussi en 1893 dans la création d’appareils stéréoscopiques, créant du relief à partir d'images planes: glyphoscope, taxiphote, vérascope. Ce dernier, appareil photo à plaques de verre, connaît un énorme succès. Dans les années 1900, l’usine se développe. Elle occupe une bonne partie de la rue Mélingue et s’étend vers les rues Clavel et de la Villette. Elle est voisine de la cité Elgé de Léon Gaumont. S'il n’en reste rien aujourd’hui, Jules Richard, manquant d’ouvriers qualifiés pour son usine, a créé en 1923 par contrat avec la Ville de Paris une fondation et une école professionnelle de mécanique de précision. L’école, inaugurée en 1925, est devenue le lycée technologique privé Jules Richard. Gratuit, il est spécialisé aujourd’hui dans l’enseignement des microtechniques. \n
    Journées du centenaire : voir notre agenda`,
    createdAt: "2025-06-01T00:00:01Z",
    author: "CC",
    categoryId: 1,
    newspaperId: 19,
    link: "/article/",
  },
  {
    id: 32,
    picture: station.src,
    alt: "Pourquoi photographier ? Pour éveiller les consciences",
    title: "Pourquoi photographier ? Pour éveiller les consciences",
    chapeau:
      "Utilisant la photographie pour capter le réel en profondeur, Aure Chauvet s'est orientée vers le photojournalisme avant de tourner son objectif vers son arrondissement et ses habitants.",
    text: "Je vois la photo comme un engagement, une possibilité d’éveiller les consciences » dit Aure Chauvet, jeune photographe. «Donner la parole à chacun, recueillir des récits, transmettre des histoires, c’est ce qui guide mon travail » poursuit cette Parisienne d'adoption. Aure prend ses premières photos à l’âge de quatorze ans. La découverte du documentaire de Wim Wenders sur la vie et le travail de Sebastião Salgado, Le Sel de la terre, marque pour elle un tournant. Ce photographe brésilien qui, pendant plus de quarante ans, a parcouru le monde pour capturer la réalité sociale des plus humbles dans le monde sert de révélateur à sa vocation. C’est donc vers le documentaire qu’elle a décidé de s’orienter après un an et demi dans une filiale de l’Agence France-Presse (AFP). Je veux «donner à voir et à entendre le monde à travers ceux qui le vivent». Aure a également à cœur de travailler sur l’histoire et la mémoire du 20e arrondissement. «Mon amour de ce quartier s’est déjà concrétisé à travers une exposition chez Philou, un bar rue des Envierges, et un partenariat avec la bibliothèque Louise Michel qui aboutira à une exposition au mois de juin ». Elle y a rencontré des usagers pour les interroger sur leurs souvenirs du quartier avant de les photographier dans la bibliothèque même. Pour un autre projet, Ceux qui racontent, elle sollicite directement les habitants en leur proposant de lui raconter une ou plusieurs anecdotes de leur choix, sans thème imposé. Elle prend le temps d’une longue conversation avant de leur demander de choisir un lieu dans lequel ils se sentent à l’aise, qui a du sens pour eux. Là elle réalise des portraits photographiques nourris par tout ce qu’ils viennent de dire. Lors des expositions, elle accompagne ses photos d’enregistrements sonores afin de restituer également la voix, les émotions, les silences.",
    createdAt: "2025-06-01T00:00:02Z",
    author: "IY, CC, JCC",
    categoryId: 2,
    newspaperId: 19,
    link: "/article/",
  },
  {
    id: 33,
    picture: distribution.src,
    alt: "Rues végétalisées : c’est oui",
    title: "Rues végétalisées : c’est oui",
    chapeau:
      "Le 23 mars dernier, les Parisiens étaient appelés à se prononcer sur «la végétalisation et la piétonnisation de 500 nouvelles rues».",
    text: "À une grande majorité (65,96%), la réponse a été positive, même si ce résultat doit être tempéré par une très, très faible participation (4,06 % seulement). L’approbation est encore supérieure dans les 19e (71,67%) et 20e  (77,54%) arrondissements, avec le même déficit de participation. On ne connaît pas les nouvelles rues qui seront concernées et les modalités de leurs choix, mais des opérations, décidées avant la votation, sont dès à présent en cours. Sur notre périmètre peuvent être citées: \n - la rue des Solitaires avec l’aménagement de la rue, l’élargissement des espaces piétons, la rénovation de la chaussée et la végétalisation, avec plantation des arbres à l’automne; \n - la rue Clavel avec la création d'un plateau piéton, une allée en stabilisé et des pavés enherbés, la plantation de treize arbres ainsi que deux jardinières d'un total de 150 m², la végétalisation des murs pignons avec l'accord des copropriétés, et la vitesse de tous les véhicules limitée à 20 km/h. La réalisation est prévue au deuxième semestre 2025; \n - la rue du Jourdain avec la pose d’un revêtement clair et la végétalisation avec création de jardinières entre les arbres; \n - la rue Pixérécourt avec la création d’une aire piétonne, la plantation de vingt-cinq arbres et la pose de pavés enherbés.",
    createdAt: "2025-06-01T00:00:03Z",
    author: "JCC",
    categoryId: 3,
    newspaperId: 19,
    link: "/article/",
  },
  {
    id: 34,
    picture: station.src,
    alt: "Le café, base de la convivialité et de la rencontre",
    title: "Le café, base de la convivialité et de la rencontre",
    chapeau:
      "L’Éternel solidaire est un lieu associatif, un tiers-lieu, destiné à tous, quel que soit l’endroit d’habitation et sans condition de ressources.",
    text: "Il est situé dans un quartier prioritaire. À l’origine, ce lieu était un dispensaire de la Ville de Paris. En 1902, les compagnons du Tour de France y sont également passés et ont laissé leur trace: une mosaïque au sol du restaurant ainsi qu’une carte de France creusée sur l’un des murs de l’entrée. Dès l’arrivée, on se sent bien, tables et bancs en bois, murs peints de couleurs rafraîchissantes, avec des dessins explicites. La fourchette, pour le restaurant ; la pince pour l’insertion dans le bâtiment; l’ordinateur pour la médiation numérique. Au fond du jardin, un potager et un coin avec des lapins offrent un dépaysement total. Emmanuel Saunier est le créateur et directeur de l’Éternel solidaire depuis 2017. Il réside dans le quartier depuis plus de cinquante ans. «Le 19e, c’est la maison», dit-il. Au lycée Bergson, il a vécu un temps en famille dans un logement de fonction. Le restaurant est tenu par sept personnes en réinsertion et un encadrant qui cuisinent, servent, apprennent le métier. Les plats sont faits maison et les tarifs raisonnables. Ici, pas de gaspillage, tout est travaillé, modifié pour le goûter ou l’apéro. Ensuite, s’il y a des restes, ils sont donnés aux lapins ou mis dans le composteur. Vous êtes accueillis par une équipe dynamique, souriante, un accueil inconditionnel. Le lieu propose des activités gratuites, des rencontres culturelles et citoyennes, ateliers et conférences. Et aussi, sur rendez-vous, une «médiation numérique et sociale» (cours d’informatique, aide aux démarches administratives, cv, lettre de motivation…). Souvent les participants se retrouvent autour d’un café solidaire pour échanger et faire des connaissances. C’est la base de la convivialité. \n 1 rue de la Solidarité, eternel-solidaire.fr",
    createdAt: "2025-06-01T00:00:04Z",
    author: "AB, YA",
    categoryId: 4,
    newspaperId: 19,
    link: "/article/",
  },
  {
    id: 35,
    picture: distribution.src,
    alt: "Les 40 ans du Regard du Cygne",
    title: "Les 40 ans du Regard du Cygne",
    chapeau:
      "Dissimulé derrière un portail banal de la rue de Belleville, une impasse pavée, une belle végétation de treille, glycine et bambous.",
    text: "Tout au fond, dans un ancien relais de poste du 18e  siècle, s’ouvre le Regard du Cygne, inconnu de beaucoup de passants. Une riche histoire pour ce studio de danse créé en 1984 par une danseuse d’origine américaine, Amy Swanson, dans la lignée d’Isadora Duncan, et son mari Alain Salmon. \n Haut lieu dédié à la danse contemporaine, il est à la fois pôle de création et de production et salle de représentation. De nombreux danseurs y ont préparé leurs spectacles, et enseigné, tel Fabrice Dugied, jusqu’à son décès en 2016. \n Le Studio accueille encore aujourd’hui un programme de cours fourni. Parallèlement à sa vocation initiale, le Regard du Cygne a rassemblé sous l’enseigne Carnegie Small de nombreux musiciens, aujourd’hui célèbres, dans des cycles de concerts de musique classique, contemporaine ou du monde. Sur un programme retrouvé de juin 1987, on peut ainsi lire que s’y sont produits Kenneth Weiss, Frédéric Lodéon, Pierre-Laurent Aimard, le Cuarteto Cedron… \n Depuis plusieurs années, son activité publique s’organise autour des deux temps forts que sont les festivals Signes de printemps et Signes d’automne. En décembre dernier, le studio fêtait son 40e  anniversaire avec la publication d’un livre souvenir, Regards partagés, et par le beau spectacle Le Cabaret des Signes.",
    createdAt: "2025-06-01T00:00:05Z",
    author: "JCC",
    categoryId: 5,
    newspaperId: 19,
    link: "/article/",
  },
  {
    id: 36,
    picture: station.src,
    alt: "Le Musée du Soir, ancêtre des maisons de la culture",
    title: "Le Musée du Soir, ancêtre des maisons de la culture",
    chapeau:
      "Son nom est peu connu, et pourtant, Henry Poulaille fut le promoteur d’un genre littéraire, un découvreur d’écrivains, un collectionneur passionné.",
    text: "Né à la toute fin du 19e , d’une mère canneuse de chaises à Ménilmontant et d’un père charpentier, il se retrouve orphelin, comme en témoigne le titre de son dernier ouvrage Seul dans la vie à 14 ans paru en 1980, l’année de son décès. Avec seulement le certificat d’études pour viatique, cet autodidacte insatiable parvient à entrer chez Grasset où il fera éditer, entre autres, Giono et Ramuz. Lui-même crée plusieurs revues et s’engage dans la littérature, avec la volonté de témoigner de la vie des ouvriers parisiens du début du siècle, considérant que « pour parler de la misère, il faut l’avoir connue ». Ainsi, en 1931, le premier tome de La Saga des Magneux2 marque l’avènement d’un nouveau genre : le roman prolétarien. Mais la littérature, comme l’art, la science et la connaissance en général, sont difficilement accessibles au monde ouvrier. Alors Poulaille, dans le souci d’une « culture prolétarienne » ouvre en 1935 un premier Musée du Soir, un lieu où l’on peut venir après sa journée de travail, accéder gratuitement à la bibliothèque, admirer des tableaux, assister à des conférences (1). Ce premier musée est situé à Belleville, au 69 rue Fessart et, si nulle plaque n’en témoigne, espérons qu’un peu de l’esprit Poulaille continue de flotter sur le quartier. \n (1) Les archives sont déposées à la Maison Raspail, à Cachan \n (2) Le Pain quotidien, suivi de Les damnés de la terre et Le Pain de soldat",
    createdAt: "2025-12-01T00:00:01Z",
    author: "MR",
    categoryId: 1,
    newspaperId: 20,
    link: "/article/",
  },
  {
    id: 37,
    picture: distribution.src,
    alt: "Avec Demoiselle MM et les Bombasphères, l’art explose dans le quartier",
    title:
      "Avec Demoiselle MM et les Bombasphères, l’art explose dans le quartier",
    chapeau:
      "Merci les Bombasphères! La poésie, l’humour s’affichent sur nos murs, nos rues sont plus gaies, tout en couleurs.",
    text: "Les Bombasphères? Une belle histoire. À l’origine, il y a Marianne M., jeune artiste peintre de Marseille qui, après les Beaux-Arts, vient à Paris et travaille en atelier dans le quartier du Plateau. Plus tard, elle s’intéresse au street art. Commence par imprimer et coller les photos de ses tableaux sur les murs puis évolue vers la création de fresques murales. Elle signe ses œuvres Demoiselle MM. L’aventure continue, Marianne fonde un collectif de jeunes femmes artistes, les Bombasphères, du nom, on l’aura compris, de l’instrument de travail associé aux street artistes, la bombe de peinture. Certaines l’utilisent mais d’autres préfèrent le pinceau, le pochoir... Quel style ? Tous les styles ! Poétique, militant, humoristique… Des femmes uniquement ? Oui mais l’intention n’est pas féministe. Le street art, à ses débuts, était avant tout masculin. Elles veulent changer ça, atteindre une parité dans la rue. Trouver un mur ? Pas compliqué, nous dit Marianne. Elle en choisit dans le 19e , le 20e et ailleurs. Ses œuvres enchantent les habitants des immeubles voisins. Elle les veut douces et poétiques. « Je ne suis pas partie en vacances, mais grâce à vos œuvres je voyage » lui a dit une passante fin août. Cette phrase l’a beaucoup touchée. Un mur dédié rue de la Mare Elle avait « son » mur au 86, rue de la Mare et l’a cédé aux artistes des Bombasphères. Il est renouvelé tous les deux mois. Allez-y, en ce moment vous y verrez une œuvre de Louyz, Le loup de Belleville. Marianne organise régulièrement avec son collectif (80 à 90 jeunes femmes) des événements artistiques, elles exposent leurs créations. En septembre dernier, à la Lab galerie dans le 11e  arrondissement, exposition de 120 bombes de peinture customisées, en octobre, vingt femmes artistes repeignent les murs du Balou, brasserie du 10e. Dernier évènement en date, le salon des Bombasphères : jusqu’au 18 décembre, exposition de cent artistes dans un lieu de 300 mètres carrés sur l’île Saint-Louis avec notamment des performances de live painting. \n En savoir plus: \n www.bombaspheres.com \n insta / @demoisellemm \n insta / @les bombaspheres",
    createdAt: "2025-12-01T00:00:02Z",
    author: "CC, FK",
    categoryId: 2,
    newspaperId: 20,
    link: "/article/",
  },
  {
    id: 38,
    picture: station.src,
    alt: "La petite ceinture, un endroit pour rêver",
    title: "La petite ceinture, un endroit pour rêver",
    chapeau:
      "Le charme de ce lieu qui offre une biodiversité rare à Paris ce sont les rails.",
    text: "Qui dit rails dit train, départ, voyage, et votre imaginaire est embarqué!» nous explique Jéromine Derigny, photojournaliste indépendante, membre de l’Association des Promeneurs de la Petite Ceinture et du collectif Argos. \n «La Petite Ceinture, c’est un endroit pour rêver. Les rails demeurent propriété de la SNCF, la ligne n’est pas désaffectée d’où le fait qu’elle est inconstructible. Une chance ! Je l’ai découverte en 2015 quand les deux premiers tronçons se sont ouverts au public. Au départ, plus que le lieu, c’est la démarche de concertation pour savoir quoi faire de ces tronçons qui m’a intéressée, qui réunissait des collectifs d’urbanistes, d’architectes, de designers et des riverains.» \n Depuis Jéromine n’a pas arrêté de documenter cette voie qui fait le tour de Paris sur 32 kilomètres, dont environ dix sont accessibles pour le moment. \n Et au printemps 2025, ses clichés ont eu les honneurs des grilles de l’Hôtel de Ville de Paris: «La balade demeure insolite. On y voit plein de plantes sauvages, plusieurs espèces animales dont des renards. Dans nos quartiers ont été aménagées la gare de la porte de Clignancourt devenue une recyclerie, celle de la porte de Saint-Ouen, le Hasard ludique, un lieu hybride proposant concerts, performances et restaurant et la gare du Pont de Flandre qui propose des concerts de jazz gratuits. \n La Petite Ceinture, c’est un lieu appelé à s’agrandir, de partage, de rencontre, joyeux!». \n Plus d’infos : \n www.promeneurspetiteceinture.paris",
    createdAt: "2025-12-01T00:00:03Z",
    author: "IY, PB",
    categoryId: 3,
    newspaperId: 20,
    link: "/article/",
  },
  {
    id: 39,
    picture: distribution.src,
    alt: "Au 44, rue des Rigoles, créez des cadeaux solidaires",
    title: "Au 44, rue des Rigoles, créez des cadeaux solidaires",
    chapeau:
      "Vous souhaitez créer, et pourquoi pas offrir, un bijou, réaliser une pochette à partir de chutes de cuir, construire un nichoir, ou participer à un atelier d’écriture ?",
    text: "Discuter, tricoter, découvrir le yoga, réparer vos objets ou appareils ? Alors, vous êtes au bon endroit! \n L’agenda des ateliers proposés par le Café Atelier, attenant à la Ressource de Belleville, nous a séduites, nos pas nous y mènent. Marie nous accueille, elle qui a fondé en 2016 la Ressource de Belleville puis ce Café Atelier au printemps dernier, ainsi que Layla, coordinatrice des activités. Un binôme à l’enthousiasme communicatif, dans ce lieu chaleureux, ouvert à tout public. \n Le jardin, vous pouvez vous y installer dès les premiers rayons de soleil. Passez les portes, une salle lumineuse vous incite à déguster une restauration légère et/ou des boissons. Dans les salles ouvertes à l’arrière se déroulent les ateliers (gratuits ou à prix libre à partir de 5 euros), animés par les seize salariés de la Ressource et des bénévoles, aux compétences diversifiées. Dans d’autres espaces, des jouets sont mis à disposition des familles et des enfants, des livres, des jeux de société… le tout trié et remis en état par La Ressource. \n C’est un lieu solidaire, convivial, de sensibilisation au zéro déchet et au réemploi. Les projets ne manquent pas: mise en place d’une bricothèque, expositions, karaoké… Que vous souhaitiez être bénévole ou participer, vous êtes les bienvenu.e.s. \n Café Atelier, ouvert du mercredi au samedi de 13h à 19h \n Contact : ressource.belleville@gmail.com \n Facebook/LaRessourcedeBelleville \n Instagram/la_ressource_de_belleville",
    createdAt: "2025-12-01T00:00:04Z",
    author: "MFQ et PB",
    categoryId: 4,
    newspaperId: 20,
    link: "/article/",
  },
  {
    id: 40,
    picture: station.src,
    alt: "Buttes-Chaumont, pour une rénovation pérenne",
    title: "Buttes-Chaumont, pour une rénovation pérenne",
    chapeau:
      "L’avez-vous remarqué? La partie centrale des Buttes-Chaumont n’est plus accessible.",
    text: "Pour des raisons de sécurité, une vaste opération de restauration a été engagée (passerelle, pont, falaise, grotte…). \n Ce paysage construit artificiellement grâce à des prouesses techniques exceptionnelles donnait à voir lors de sa création des entités géographiques, inspirées notamment des falaises d’Etretat pour la partie centrale, ou de la forêt vosgienne au niveau de la petite ceinture. \n Un véritable livre de géographie à ciel ouvert à destination des petits Parisiens et de leur famille dans un quartier populaire. Le parc gardera-t-il ses promesses initiales d’invitation au voyage? \n Comment la dimension patrimoniale et sociale sera-t-elle réinventée en regard des différents enjeux aussi bien sur la biodiversité à l’aune du réchauffement climatique que sur les nouveaux usages ? \n Quelles réponses seront données à l’équation: plus devisiteurs, plus de biodiversité et de tranquillité? Unique à l’échelle européenne, il n’y a pas de modèle de référence pour le rénover. \n Un dialogue compétitif est lancé afin de trouver les meilleures solutions pour une rénovation pérenne défiant le temps. Objectif visé: un siècle! \n Dates du chantier: 2027-2031 \n  Estimation du coût: 100 millions d’euros \n  Bilan de la concertation sur decider.paris.fr",
    createdAt: "2025-12-01T00:00:05Z",
    author: "CA",
    categoryId: 5,
    newspaperId: 20,
    link: "/article/",
  },
];

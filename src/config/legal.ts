/**
 * Contenu légal du site ombrelle.
 *
 * Ce site est une vitrine : il n'ouvre pas de compte, ne traite pas de
 * paiement et ne dépose aucun cookie. Les conditions d'utilisation des
 * applications sont publiées sur le site du département Atlas SaaS.
 */

export type LegalSection = {
  heading: string;
  /** Paragraphes du bloc ; les retours à la ligne sont rendus tels quels. */
  body: string[];
};

export type LegalBlock = {
  /** Ancre utilisée dans l'URL (#confidentialite). */
  id: string;
  index: string;
  title: string;
  sections: LegalSection[];
};

export const LEGAL_BLOCKS: LegalBlock[] = [
  {
    id: 'mentions-legales',
    index: '01',
    title: 'Mentions légales',
    sections: [
      {
        heading: 'Éditeur du site',
        body: [
          'Atlas Studio',
          "Siège social : Abidjan, Côte d'Ivoire",
          'Email : contact@atlas-studio.org',
          'Directrice de la publication : Pamela Atokouna',
        ],
      },
      {
        heading: 'Hébergement',
        body: [
          'Vercel Inc.',
          '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
          'Site web : vercel.com',
        ],
      },
      {
        heading: 'Départements',
        body: [
          "Atlas Studio réunit deux départements : Atlas SaaS, qui édite les applications métier de la gamme Atlas, et Atlas Consulting, qui conduit les missions de conseil et de formation.",
          "Chaque département publie ses propres conditions sur son site : saas-branch.atlas-studio.org et consulting-branch.atlas-studio.org.",
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        body: [
          "L'ensemble du contenu de ce site (textes, images, logos, icônes, logiciels) est protégé par le droit de la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite d'Atlas Studio.",
        ],
      },
      {
        heading: 'Responsabilité',
        body: [
          "Atlas Studio s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, Atlas Studio ne peut garantir l'exactitude, la complétude ou l'actualité des informations publiées, et se réserve le droit d'en modifier le contenu à tout moment et sans préavis.",
        ],
      },
    ],
  },
  {
    id: 'confidentialite',
    index: '02',
    title: 'Confidentialité',
    sections: [
      {
        heading: 'Données collectées',
        body: [
          "Ce site ne comporte ni compte utilisateur, ni formulaire, ni mesure d'audience. Aucune donnée personnelle n'y est collectée par Atlas Studio.",
        ],
      },
      {
        heading: 'Cookies',
        body: [
          "Aucun cookie n'est déposé sur votre navigateur : ni cookie de suivi, ni cookie publicitaire, ni cookie de mesure.",
        ],
      },
      {
        heading: 'Écrire à Atlas Studio',
        body: [
          "Lorsque vous nous écrivez à contact@atlas-studio.org, votre message et votre adresse email sont utilisés pour vous répondre et orienter votre demande vers le département concerné. Ils ne sont ni revendus, ni transmis à des tiers à des fins commerciales.",
        ],
      },
      {
        heading: 'Vos droits',
        body: [
          "Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour l'exercer, écrivez à contact@atlas-studio.org.",
        ],
      },
      {
        heading: 'Données des applications',
        body: [
          "Les données traitées dans les applications de la gamme Atlas relèvent de la politique de confidentialité du département Atlas SaaS, publiée sur saas-branch.atlas-studio.org.",
        ],
      },
    ],
  },
];

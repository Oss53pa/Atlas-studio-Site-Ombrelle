/**
 * Contenu légal du site ombrelle.
 *
 * Ce site est une vitrine : il n'ouvre pas de compte, ne traite pas de
 * paiement et ne dépose aucun cookie. Les conditions d'utilisation des
 * applications sont publiées sur le site du département Atlas SaaS.
 *
 * La version anglaise est une traduction de courtoisie : la page anglaise
 * précise que la version française prévaut.
 */

import type { Locale } from '../i18n/locale';

export type LegalSection = {
  heading: string;
  /** Paragraphes du bloc ; les retours à la ligne sont rendus tels quels. */
  body: string[];
};

export type LegalBlock = {
  /** Ancre utilisée dans l'URL (#confidentialite, #privacy). */
  id: string;
  index: string;
  title: string;
  sections: LegalSection[];
};

/** Ancre de la partie confidentialité, visée par le pied de page. */
export const PRIVACY_ANCHOR: Record<Locale, string> = { fr: 'confidentialite', en: 'privacy' };

const FR: LegalBlock[] = [
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
          "Atlas Studio réunit deux départements : Atlas Consulting, qui conduit les missions de conseil et de formation, et Atlas SaaS, qui édite les applications métier de la gamme Atlas.",
          "Chaque département publie ses propres conditions sur son site : consulting-branch.atlas-studio.org et saas-branch.atlas-studio.org.",
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
    id: PRIVACY_ANCHOR.fr,
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

const EN: LegalBlock[] = [
  {
    id: 'legal-notice',
    index: '01',
    title: 'Legal notice',
    sections: [
      {
        heading: 'Website publisher',
        body: [
          'Atlas Studio',
          "Registered office: Abidjan, Côte d'Ivoire",
          'Email: contact@atlas-studio.org',
          'Publication director: Pamela Atokouna',
        ],
      },
      {
        heading: 'Hosting',
        body: [
          'Vercel Inc.',
          '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
          'Website: vercel.com',
        ],
      },
      {
        heading: 'Departments',
        body: [
          'Atlas Studio brings together two departments: Atlas Consulting, which carries out consulting and training assignments, and Atlas SaaS, which publishes the business applications of the Atlas range.',
          'Each department publishes its own terms on its website: consulting-branch.atlas-studio.org and saas-branch.atlas-studio.org.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          "All content on this website (text, images, logos, icons, software) is protected by intellectual property law. Any reproduction, even partial, is prohibited without Atlas Studio's prior written consent.",
        ],
      },
      {
        heading: 'Liability',
        body: [
          'Atlas Studio strives to ensure that the information published on this website is accurate. However, Atlas Studio cannot guarantee that the information is accurate, complete or up to date, and reserves the right to change its content at any time without notice.',
        ],
      },
    ],
  },
  {
    id: PRIVACY_ANCHOR.en,
    index: '02',
    title: 'Privacy',
    sections: [
      {
        heading: 'Data collected',
        body: [
          'This website has no user accounts, no forms and no audience measurement. Atlas Studio collects no personal data through it.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'No cookies are placed on your browser: no tracking, advertising or analytics cookies.',
        ],
      },
      {
        heading: 'Writing to Atlas Studio',
        body: [
          'When you write to us at contact@atlas-studio.org, your message and email address are used to reply to you and to route your request to the relevant department. They are never sold or passed on to third parties for commercial purposes.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You have the right to access, rectify, erase and port your data. To exercise these rights, write to contact@atlas-studio.org.',
        ],
      },
      {
        heading: 'Application data',
        body: [
          'Data processed in the applications of the Atlas range is governed by the privacy policy of the Atlas SaaS department, published on saas-branch.atlas-studio.org.',
        ],
      },
    ],
  },
];

export const LEGAL_BLOCKS: Record<Locale, LegalBlock[]> = { fr: FR, en: EN };

/**
 * Textes d'interface (en-tête, pied de page, pages secondaires) et
 * métadonnées de chaque page, dans les deux langues.
 *
 * Le type est déclaré une fois : une traduction manquante ne compile pas.
 */

import { SITE } from '../config/site';
import type { Locale, PageKey } from './locale';

type PageMeta = { title: string; description: string };

export type UiStrings = {
  skipLink: string;
  header: {
    homeLabel: string;
    nav: { label: string; anchor: string }[];
    contact: string;
    /** Libellé visible du sélecteur : la langue vers laquelle il bascule. */
    switchLabel: string;
    switchAria: string;
  };
  identityContact: string;
  departments: {
    label: string;
    hintTouch: string;
    hintPointer: string;
    cardAria: (name: string) => string;
  };
  footer: {
    tagline: string;
    company: string;
    contact: string;
    legal: string;
    privacy: string;
  };
  legal: {
    eyebrow: string;
    title: string;
    back: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    body: string;
    back: string;
  };
  meta: Record<PageKey, PageMeta> & { notFound: PageMeta };
};

export const UI: Record<Locale, UiStrings> = {
  fr: {
    skipLink: 'Aller au contenu',
    header: {
      homeLabel: `${SITE.name}, accueil`,
      nav: [
        { label: 'Départements', anchor: 'departements' },
        { label: 'Méthode', anchor: 'methode' },
      ],
      contact: 'Contact',
      switchLabel: 'EN',
      switchAria: 'Read this page in English',
    },
    identityContact: 'Contact',
    departments: {
      label: '01. Les deux départements',
      hintTouch: 'Deux sites, deux univers',
      hintPointer: 'Survolez un bloc',
      cardAria: (name) => `${name}, ouvrir le site du département`,
    },
    footer: {
      tagline: 'Édition de logiciels, conseil et formation.',
      company: 'Entreprise',
      contact: 'Contact',
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
    },
    legal: {
      eyebrow: 'Informations légales',
      title: 'Mentions légales',
      back: '← Retour à l’accueil',
    },
    notFound: {
      eyebrow: 'Erreur 404',
      title: 'Page introuvable',
      body:
        'Cette adresse ne correspond à aucune page du site. Les deux départements sont présentés sur la page ' +
        'd’accueil.',
      back: '← Retour à l’accueil',
    },
    meta: {
      home: {
        title: 'Atlas Studio | Le terrain écrit le code',
        description:
          "Atlas Studio réunit deux départements : Atlas SaaS, édition d'applications métier en SaaS, et Atlas Consulting, conseil et formation.",
      },
      legal: {
        title: `Mentions légales | ${SITE.name}`,
        description: `Mentions légales et politique de confidentialité du site ${SITE.domain}.`,
      },
      notFound: {
        title: `Page introuvable | ${SITE.name}`,
        description: 'Éditeur de logiciels métier, cabinet de conseil et de formation.',
      },
    },
  },
  en: {
    skipLink: 'Skip to content',
    header: {
      homeLabel: `${SITE.name}, home`,
      nav: [
        { label: 'Departments', anchor: 'departements' },
        { label: 'Approach', anchor: 'methode' },
      ],
      contact: 'Contact',
      switchLabel: 'FR',
      switchAria: 'Lire cette page en français',
    },
    identityContact: 'Contact',
    departments: {
      label: '01. Our two departments',
      hintTouch: 'Two websites, two worlds',
      hintPointer: 'Hover over a block',
      cardAria: (name) => `${name}: open the department’s website`,
    },
    footer: {
      tagline: 'Software publishing, consulting and training.',
      company: 'Company',
      contact: 'Contact',
      legal: 'Legal notice',
      privacy: 'Privacy',
    },
    legal: {
      eyebrow: 'Legal information',
      title: 'Legal notice',
      back: '← Back to home',
    },
    notFound: {
      eyebrow: 'Error 404',
      title: 'Page not found',
      body: 'This address does not match any page on this site. Both departments are presented on the home page.',
      back: '← Back to home',
    },
    meta: {
      home: {
        title: 'Atlas Studio | The field writes the code',
        description:
          'Atlas Studio brings together two departments: Atlas SaaS, which publishes business applications delivered as SaaS, and Atlas Consulting, for consulting and training.',
      },
      legal: {
        title: `Legal notice | ${SITE.name}`,
        description: `Legal notice and privacy policy for the ${SITE.domain} website.`,
      },
      notFound: {
        title: `Page not found | ${SITE.name}`,
        description: 'Business software publisher, consulting and training firm.',
      },
    },
  },
};

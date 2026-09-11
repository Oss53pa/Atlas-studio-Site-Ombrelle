/**
 * Contenu éditorial de la page d'accueil.
 *
 * Séparé des composants pour que les textes se relisent et se corrigent sans
 * toucher à la mise en page.
 */

import { DEPARTMENTS } from '../config/site';

export const HERO = {
  eyebrow: 'Édition de logiciels · Conseil & formation',
  title: 'Atlas Studio',
  lead: 'Éditeur de logiciels métier, cabinet de conseil et de formation.',
  body:
    'Deux départements réunis sous un même nom. Nous accompagnons les organisations sur le terrain, ' +
    'et nous éditons les logiciels qu’elles utilisent au quotidien.',
} as const;

/** Bandeau d'identité, juste sous le hero. */
export const IDENTITY = [
  { label: 'Entreprise', value: 'Atlas Studio' },
  { label: 'Départements', value: 'Atlas SaaS · Atlas Consulting' },
  { label: 'Offre', value: 'Applications métier · Conseil · Formation' },
] as const;

export type DepartmentCardContent = {
  key: 'saas' | 'consulting';
  /** Lettre de repère affichée en haut du bloc. */
  index: string;
  kicker: string;
  name: string;
  url: string;
  host: string;
  description: string;
  rows: { term: string; detail: string }[];
};

export const DEPARTMENT_CARDS: DepartmentCardContent[] = [
  {
    key: 'saas',
    index: 'A.',
    kicker: 'Édition de logiciels',
    name: DEPARTMENTS.saas.name,
    url: DEPARTMENTS.saas.url,
    host: DEPARTMENTS.saas.host,
    description:
      "Le département d'édition d'Atlas Studio. Des applications métier pensées pour les organisations " +
      'qui pilotent des actifs, des équipes et des contrats, déployées en SaaS, maintenues et enrichies ' +
      "en continu. L'ensemble de la gamme Atlas est présenté sur le site du département.",
    rows: [
      { term: "Une suite d'applications métier", detail: 'Gamme Atlas' },
      { term: 'Déploiement', detail: 'SaaS, hébergé et infogéré' },
      { term: 'Suivi', detail: 'Maintenance & évolutions' },
    ],
  },
  {
    key: 'consulting',
    index: 'B.',
    kicker: 'Conseil & formation',
    name: DEPARTMENTS.consulting.name,
    url: DEPARTMENTS.consulting.url,
    host: DEPARTMENTS.consulting.host,
    description:
      "Le département de conseil et de formation d'Atlas Studio. Nous intervenons du cadrage au transfert " +
      'de compétences, aux côtés des équipes qui portent le changement dans leur organisation.',
    rows: [
      { term: 'Diagnostic', detail: 'Cadrage & audit' },
      { term: 'Accompagnement', detail: 'Conduite du changement' },
      { term: 'Formation', detail: 'Montée en compétences' },
    ],
  },
];

export const METHOD = {
  label: '02. Une entreprise, deux activités',
  statement: 'Ce que nous voyons en mission oriente ce que nous développons.',
  steps: [
    {
      index: '01',
      text:
        "Chaque mission de conseil part d'un usage réel : ce que les équipes font, avec quels outils, " +
        "à quel coût d'effort.",
    },
    {
      index: '02',
      text:
        'Ce que nous observons en mission alimente la feuille de route des logiciels que nous éditons.',
    },
    {
      index: '03',
      text: 'Un seul interlocuteur, de la stratégie à la mise en production, puis dans la durée.',
    },
  ],
  figure: {
    alt: 'Une équipe en séance de travail dans les bureaux d’Atlas Studio',
    caption: 'Séance de travail commune aux équipes édition et conseil.',
  },
} as const;

export const CONTACT = {
  label: '03. Contact',
  title: 'Écrivez-nous',
  body:
    'Écrivez-nous une fois : nous orientons votre demande vers le département concerné, édition ou conseil.',
} as const;

/**
 * Colonnes du pied de page.
 *
 * Les liens Atlas SaaS pointent vers les routes réelles de son site ; celles-ci
 * sont définies dans le routeur du dépôt du département. Atlas Consulting reste
 * sur sa racine tant que son site n'expose pas de sous-pages stables.
 */
export const FOOTER_COLUMNS = [
  {
    title: DEPARTMENTS.saas.name,
    links: [
      { label: 'Le département', href: DEPARTMENTS.saas.url },
      { label: 'Les applications', href: `${DEPARTMENTS.saas.url}/applications` },
      { label: 'Tarifs', href: `${DEPARTMENTS.saas.url}/tarifs` },
      { label: 'À propos', href: `${DEPARTMENTS.saas.url}/a-propos` },
      { label: 'Blog', href: `${DEPARTMENTS.saas.url}/blog` },
      { label: 'Questions fréquentes', href: `${DEPARTMENTS.saas.url}/faq` },
      { label: 'Contact', href: `${DEPARTMENTS.saas.url}/contact` },
    ],
  },
  {
    title: DEPARTMENTS.consulting.name,
    links: [
      { label: 'Le département', href: DEPARTMENTS.consulting.url },
      { label: 'Diagnostic', href: DEPARTMENTS.consulting.url },
      { label: 'Accompagnement', href: DEPARTMENTS.consulting.url },
      { label: 'Formation', href: DEPARTMENTS.consulting.url },
    ],
  },
] as const;

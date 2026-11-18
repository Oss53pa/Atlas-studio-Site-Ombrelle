/**
 * Contenu éditorial de la page d'accueil, en français et en anglais.
 *
 * Séparé des composants pour que les textes se relisent et se corrigent sans
 * toucher à la mise en page. Le type HomeContent impose la même structure aux
 * deux langues : une traduction manquante ne compile pas.
 */

import { DEPARTMENTS, type DepartmentKey } from '../config/site';
import type { Locale } from '../i18n/locale';

export type DepartmentCardContent = {
  key: DepartmentKey;
  /** Lettre de repère affichée en haut du bloc. */
  index: string;
  kicker: string;
  name: string;
  url: string;
  host: string;
  description: string;
  rows: { term: string; detail: string }[];
};

type FooterColumn = { title: string; links: { label: string; href: string }[] };

export type HomeContent = {
  hero: { eyebrow: string; title: string; lead: string; body: string };
  /** Bandeau d'identité, juste sous le hero. */
  identity: { label: string; value: string }[];
  departmentCards: DepartmentCardContent[];
  method: {
    label: string;
    statement: string;
    steps: { index: string; text: string }[];
    figure: { alt: string; caption: string };
  };
  contact: { label: string; title: string; body: string };
  footerColumns: FooterColumn[];
};

/** Champs d'un bloc qui ne dépendent pas de la langue. */
function department(key: DepartmentKey, index: string) {
  const { name, url, host } = DEPARTMENTS[key];
  return { key, index, name, url, host };
}

const SAAS = DEPARTMENTS.saas.url;
const CONSULTING = DEPARTMENTS.consulting.url;

/*
 * Colonnes du pied de page.
 *
 * Les liens Atlas SaaS pointent vers les routes réelles de son site ; celles-ci
 * sont définies dans le routeur du dépôt du département. Atlas Consulting reste
 * sur sa racine tant que son site n'expose pas de sous-pages stables. Les sites
 * des départements n'ont qu'une version française : la version anglaise du
 * pied de page y renvoie donc aussi.
 */

export const HOME: Record<Locale, HomeContent> = {
  fr: {
    hero: {
      eyebrow: 'Édition de logiciels · Conseil & formation',
      title: 'Atlas Studio',
      lead: 'Éditeur de logiciels métier, cabinet de conseil et de formation.',
      body:
        'Deux départements réunis sous un même nom. Nous accompagnons les organisations sur le terrain, ' +
        'et nous éditons les logiciels qu’elles utilisent au quotidien.',
    },
    identity: [
      { label: 'Entreprise', value: 'Atlas Studio' },
      { label: 'Départements', value: 'Atlas SaaS · Atlas Consulting' },
      { label: 'Offre', value: 'Applications métier · Conseil · Formation' },
    ],
    departmentCards: [
      {
        ...department('saas', 'A.'),
        kicker: 'Édition de logiciels',
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
        ...department('consulting', 'B.'),
        kicker: 'Conseil & formation',
        description:
          "Le département de conseil et de formation d'Atlas Studio. Nous intervenons du cadrage au transfert " +
          'de compétences, aux côtés des équipes qui portent le changement dans leur organisation.',
        rows: [
          { term: 'Diagnostic', detail: 'Cadrage & audit' },
          { term: 'Accompagnement', detail: 'Conduite du changement' },
          { term: 'Formation', detail: 'Montée en compétences' },
        ],
      },
    ],
    method: {
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
          text: 'Ce que nous observons en mission alimente la feuille de route des logiciels que nous éditons.',
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
    },
    contact: {
      label: '03. Contact',
      title: 'Écrivez-nous',
      body:
        'Écrivez-nous une fois : nous orientons votre demande vers le département concerné, édition ou conseil.',
    },
    footerColumns: [
      {
        title: DEPARTMENTS.saas.name,
        links: [
          { label: 'Le département', href: SAAS },
          { label: 'Les applications', href: `${SAAS}/applications` },
          { label: 'Tarifs', href: `${SAAS}/tarifs` },
          { label: 'À propos', href: `${SAAS}/a-propos` },
          { label: 'Blog', href: `${SAAS}/blog` },
          { label: 'Questions fréquentes', href: `${SAAS}/faq` },
          { label: 'Contact', href: `${SAAS}/contact` },
        ],
      },
      {
        title: DEPARTMENTS.consulting.name,
        links: [
          { label: 'Le département', href: CONSULTING },
          { label: 'Diagnostic', href: CONSULTING },
          { label: 'Accompagnement', href: CONSULTING },
          { label: 'Formation', href: CONSULTING },
        ],
      },
    ],
  },
  en: {
    hero: {
      eyebrow: 'Software publishing · Consulting & training',
      title: 'Atlas Studio',
      lead: 'Business software publisher, consulting and training firm.',
      body:
        'Two departments under one name. We work alongside organizations in the field, ' +
        'and we publish the software they use every day.',
    },
    identity: [
      { label: 'Company', value: 'Atlas Studio' },
      { label: 'Departments', value: 'Atlas SaaS · Atlas Consulting' },
      { label: 'Offering', value: 'Business applications · Consulting · Training' },
    ],
    departmentCards: [
      {
        ...department('saas', 'A.'),
        kicker: 'Software publishing',
        description:
          "Atlas Studio's software publishing department. Business applications built for organizations " +
          'that manage assets, teams and contracts, delivered as SaaS, maintained and continuously ' +
          "improved. The full Atlas range is presented on the department's website.",
        rows: [
          { term: 'A suite of business applications', detail: 'Atlas range' },
          { term: 'Deployment', detail: 'SaaS, hosted and managed' },
          { term: 'Ongoing support', detail: 'Maintenance & updates' },
        ],
      },
      {
        ...department('consulting', 'B.'),
        kicker: 'Consulting & training',
        description:
          "Atlas Studio's consulting and training department. We work from scoping through to skills " +
          'transfer, alongside the teams driving change within their organization.',
        rows: [
          { term: 'Assessment', detail: 'Scoping & audit' },
          { term: 'Support', detail: 'Change management' },
          { term: 'Training', detail: 'Upskilling' },
        ],
      },
    ],
    method: {
      label: '02. One company, two activities',
      statement: 'What we see in the field shapes what we build.',
      steps: [
        {
          index: '01',
          text:
            'Every consulting assignment starts from real-world practice: what teams do, with which tools, ' +
            'and at what cost in effort.',
        },
        {
          index: '02',
          text: 'What we observe on assignments feeds the roadmap of the software we publish.',
        },
        {
          index: '03',
          text: 'A single point of contact, from strategy to go-live, and for the long term.',
        },
      ],
      figure: {
        alt: 'A team in a working session at the Atlas Studio offices',
        caption: 'Joint working session of the software and consulting teams.',
      },
    },
    contact: {
      label: '03. Contact',
      title: 'Write to us',
      body:
        'Write to us once: we route your request to the right department, software or consulting.',
    },
    footerColumns: [
      {
        title: DEPARTMENTS.saas.name,
        links: [
          { label: 'The department', href: SAAS },
          { label: 'Applications', href: `${SAAS}/applications` },
          { label: 'Pricing', href: `${SAAS}/tarifs` },
          { label: 'About', href: `${SAAS}/a-propos` },
          { label: 'Blog', href: `${SAAS}/blog` },
          { label: 'FAQ', href: `${SAAS}/faq` },
          { label: 'Contact', href: `${SAAS}/contact` },
        ],
      },
      {
        title: DEPARTMENTS.consulting.name,
        links: [
          { label: 'The department', href: CONSULTING },
          { label: 'Assessment', href: CONSULTING },
          { label: 'Change support', href: CONSULTING },
          { label: 'Training', href: CONSULTING },
        ],
      },
    ],
  },
};

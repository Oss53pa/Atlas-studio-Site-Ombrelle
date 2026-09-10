/**
 * Coordonnées et liens du site ombrelle.
 *
 * Les deux départements vivent sur leurs propres sous-domaines : ce site ne
 * fait que les présenter et y renvoyer. Toute modification d'URL se fait ici.
 */

export const SITE = {
  name: 'Atlas Studio',
  domain: 'atlas-studio.org',
  url: 'https://atlas-studio.org',
  tagline: 'Éditeur de logiciels métier, cabinet de conseil et de formation.',
  email: 'contact@atlas-studio.org',
} as const;

export const DEPARTMENTS = {
  saas: {
    key: 'saas',
    name: 'Atlas SaaS',
    url: 'https://saas-branch.atlas-studio.org',
    host: 'saas-branch.atlas-studio.org',
  },
  consulting: {
    key: 'consulting',
    name: 'Atlas Consulting',
    url: 'https://consulting-branch.atlas-studio.org',
    host: 'consulting-branch.atlas-studio.org',
  },
} as const;

export type DepartmentKey = keyof typeof DEPARTMENTS;

/** Ancres de l'en-tête, consommées par <Link> : d'où le champ `to`. */
export const NAV_LINKS = [
  { label: 'Départements', to: '/#departements' },
  { label: 'Méthode', to: '/#methode' },
] as const;

/**
 * Langues du site et correspondance des URL entre elles.
 *
 * Le français reste à la racine pour ne casser aucune URL déjà indexée ;
 * l'anglais vit sous /en. Chaque page a une adresse par langue, ce qui permet
 * au sélecteur de langue et aux balises hreflang de renvoyer vers la page
 * équivalente plutôt que vers l'accueil.
 */

export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

export type PageKey = 'home' | 'legal';

export const PATHS: Record<Locale, Record<PageKey, string>> = {
  fr: { home: '/', legal: '/mentions-legales' },
  en: { home: '/en', legal: '/en/legal-notice' },
};

/** Code Open Graph de chaque langue. */
export const OG_LOCALE: Record<Locale, string> = { fr: 'fr_FR', en: 'en_GB' };

function normalize(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

export function localeFromPath(pathname: string): Locale {
  const path = normalize(pathname);
  return path === '/en' || path.startsWith('/en/') ? 'en' : DEFAULT_LOCALE;
}

/** Page désignée par l'URL, ou null pour une adresse inconnue (404). */
export function pageFromPath(pathname: string): PageKey | null {
  const path = normalize(pathname);
  for (const locale of LOCALES) {
    for (const page of Object.keys(PATHS[locale]) as PageKey[]) {
      if (PATHS[locale][page] === path) return page;
    }
  }
  return null;
}

/** Ancre d'une section de l'accueil, dans la langue donnée. */
export function homeAnchor(locale: Locale, id: string): string {
  return `${PATHS[locale].home}#${id}`;
}

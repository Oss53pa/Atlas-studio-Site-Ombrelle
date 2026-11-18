import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config/site';
import { LOCALES, localeFromPath, OG_LOCALE, pageFromPath, PATHS } from '../i18n/locale';
import { UI } from '../i18n/ui';

/**
 * Tient à jour la langue du document, le titre, la description, l'URL
 * canonique et les variantes linguistiques (hreflang) au fil de la
 * navigation, et rejoue le défilement vers l'ancre demandée : le routeur ne
 * le fait pas de lui-même sur une navigation côté client.
 */
export default function RouteMeta() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const locale = localeFromPath(pathname);
    const page = pageFromPath(pathname);
    const meta = UI[locale].meta[page ?? 'notFound'];

    document.documentElement.lang = locale;
    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:locale', OG_LOCALE[locale]);
    setMeta('property', 'og:locale:alternate', OG_LOCALE[locale === 'fr' ? 'en' : 'fr']);
    // og:url suit la page courante, comme la canonique : sans cela un partage
    // des mentions légales serait attribué à l'accueil.
    const canonical = `${SITE.url}${page ? PATHS[locale][page] : pathname}`;
    setMeta('property', 'og:url', canonical);
    setCanonical(canonical);
    // Une page 404 n'a pas de variante : aucune balise hreflang.
    setAlternates(
      page
        ? [
            ...LOCALES.map((l) => ({ lang: l as string, href: `${SITE.url}${PATHS[l][page]}` })),
            { lang: 'x-default', href: `${SITE.url}${PATHS.fr[page]}` },
          ]
        : [],
    );
  }, [pathname]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [pathname, hash]);

  return null;
}

function setMeta(keyName: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${keyName}="${key}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(keyName, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

function setAlternates(alternates: { lang: string; href: string }[]) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => link.remove());
  for (const { lang, href } of alternates) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = href;
    document.head.appendChild(link);
  }
}

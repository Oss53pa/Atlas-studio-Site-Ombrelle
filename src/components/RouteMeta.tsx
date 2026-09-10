import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config/site';

const META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Atlas Studio, édition de logiciels, conseil et formation',
    description:
      "Atlas Studio réunit deux départements : Atlas SaaS, édition d'applications métier en SaaS, et Atlas Consulting, conseil et formation.",
  },
  '/mentions-legales': {
    title: `Mentions légales — ${SITE.name}`,
    description: `Mentions légales et politique de confidentialité du site ${SITE.domain}.`,
  },
};

const FALLBACK = {
  title: `Page introuvable — ${SITE.name}`,
  description: SITE.tagline,
};

/**
 * Tient à jour le titre, la description et l'URL canonique au fil de la
 * navigation, et rejoue le défilement vers l'ancre demandée : le routeur ne
 * le fait pas de lui-même sur une navigation côté client.
 */
export default function RouteMeta() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const meta = META[pathname] ?? FALLBACK;
    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setCanonical(`${SITE.url}${pathname}`);
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

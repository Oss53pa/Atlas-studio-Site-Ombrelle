/**
 * Contenu légal du site ombrelle.
 *
 * Le texte est géré depuis la console d'administration (table
 * legal_documents, ligne « ombrelle »), qui le valide en base avant écriture.
 * La page le lit au chargement ; si la base ne répond pas, elle affiche la
 * copie embarquée (legal.fallback.json), pour que les mentions restent en ligne.
 *
 * La version anglaise est une traduction de courtoisie : la page anglaise
 * précise que la version française prévaut.
 */

import { useEffect, useState } from 'react';
import type { Locale } from '../i18n/locale';
import FALLBACK from './legal.fallback.json';

export type LegalItem =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; title?: string; items: string[] }
  | { type: 'definitions'; items: { term: string; definition: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; variant: 'warning' | 'info' | 'important'; text: string };

export type LegalSection = { heading?: string; content: LegalItem[] };

export type LegalBlock = {
  /** Ancre utilisée dans l'URL (#confidentialite, #privacy). */
  id: string;
  index: string;
  title: string;
  sections: LegalSection[];
};

export type LegalPage = {
  slug: string;
  title: string;
  intro?: string;
  version?: string;
  effective_date?: string;
  previous_version?: string;
  contact_email?: string;
  blocks: LegalBlock[];
};

export type LegalContent = { fr: { pages: LegalPage[] }; en?: { pages: LegalPage[] } };

/** Ancre de la partie confidentialité, visée par le pied de page. */
export const PRIVACY_ANCHOR: Record<Locale, string> = { fr: 'confidentialite', en: 'privacy' };

const SITE_KEY = 'ombrelle';
const PAGE_SLUG = 'mentions-legales';
// URL du projet et clé publiable : publiques par conception (lecture seule, RLS).
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://vgtmljfayiysuvrcmunt.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_j8Bo9N9MiKw2DVtKULa0yA_wvhwzPdW';

const fallback = FALLBACK as LegalContent;

function pickPage(content: LegalContent, locale: Locale): LegalPage | null {
  const pages = content[locale]?.pages ?? content.fr.pages;
  const page = pages.find((p) => p.slug === PAGE_SLUG);
  return page && Array.isArray(page.blocks) && page.blocks.length > 0 ? page : null;
}

let request: Promise<LegalContent | null> | null = null;

function loadContent(): Promise<LegalContent | null> {
  if (!request) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    request = fetch(`${SUPABASE_URL}/rest/v1/legal_documents?site=eq.${SITE_KEY}&select=content`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      signal: controller.signal,
    })
      .then((r) => (r.ok ? r.json() : []))
      .then((rows: { content?: LegalContent }[]) => rows[0]?.content ?? null)
      .catch(() => null)
      .finally(() => clearTimeout(timer));
  }
  return request;
}

/** Page légale de la langue demandée : version console si disponible, copie embarquée sinon. */
export function useLegalPage(locale: Locale): LegalPage {
  const [remote, setRemote] = useState<LegalContent | null>(null);

  useEffect(() => {
    let alive = true;
    loadContent().then((content) => {
      if (alive && content) setRemote(content);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (remote && pickPage(remote, locale)) || pickPage(fallback, locale)!;
}

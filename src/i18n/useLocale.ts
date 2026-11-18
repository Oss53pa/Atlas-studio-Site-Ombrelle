import { useLocation } from 'react-router-dom';
import { localeFromPath, type Locale } from './locale';

/** Langue de la page courante, déduite de l'URL. */
export function useLocale(): Locale {
  return localeFromPath(useLocation().pathname);
}

import { Link, useLocation } from 'react-router-dom';
import { homeAnchor, localeFromPath, pageFromPath, PATHS, type Locale } from '../i18n/locale';
import { UI } from '../i18n/ui';
import AtlasLogo from './AtlasLogo';

/**
 * En-tête collant : logo du studio, deux ancres de section, bouton contact et
 * sélecteur de langue.
 */
export default function SiteHeader() {
  const { pathname, hash } = useLocation();
  const locale = localeFromPath(pathname);
  const t = UI[locale].header;
  const other: Locale = locale === 'fr' ? 'en' : 'fr';
  // Le sélecteur mène à la même page dans l'autre langue. Sur l'accueil, il
  // garde l'ancre : les identifiants de section sont communs aux deux langues.
  // Sur une adresse inconnue, il ramène à l'accueil de l'autre langue.
  const page = pageFromPath(pathname) ?? 'home';
  const switchTo = `${PATHS[other][page]}${page === 'home' ? hash : ''}`;

  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-sable/[0.86] backdrop-blur-md">
      <div className="shell flex flex-wrap items-center justify-between gap-6 py-4">
        <Link to={PATHS[locale].home} aria-label={t.homeLabel} className="order-1 text-encre">
          <AtlasLogo className="block h-11 w-auto" />
        </Link>
        <nav className="order-3 flex w-full flex-wrap items-center gap-x-[clamp(14px,2.2vw,32px)] gap-y-3 text-[13px] uppercase tracking-[0.1em] sm:order-2 sm:ml-auto sm:w-auto">
          {t.nav.map((link) => (
            <Link
              key={link.anchor}
              to={homeAnchor(locale, link.anchor)}
              className="text-texte-faible transition-colors hover:text-sauge"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={homeAnchor(locale, 'contact')}
            className="inline-flex items-center gap-2 rounded-full border border-sauge px-[18px] py-[9px] text-sauge transition-[background-color,color] duration-[260ms] ease-out hover:bg-sauge hover:text-sable"
          >
            {t.contact}
          </Link>
        </nav>
        {/* Sur mobile, le sélecteur reste sur la ligne du logo et la navigation
            prend la ligne suivante ; à partir de 640 px, il suit la navigation. */}
        <Link
          to={switchTo}
          hrefLang={other}
          lang={other}
          aria-label={t.switchAria}
          className="order-2 text-[13px] uppercase tracking-[0.1em] text-texte-faible transition-colors hover:text-sauge sm:order-3"
        >
          {t.switchLabel}
        </Link>
      </div>
    </header>
  );
}

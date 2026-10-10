import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE } from '../config/site';
import AtlasLogo from './AtlasLogo';

/** En-tête collant : logo du studio, deux ancres de section, bouton contact. */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-sable/[0.86] backdrop-blur-md">
      <div className="shell flex flex-wrap items-center justify-between gap-6 py-4">
        <Link to="/" aria-label={`${SITE.name}, accueil`} className="text-encre">
          <AtlasLogo className="block h-11 w-auto" />
        </Link>
        <nav className="flex items-center gap-[clamp(14px,2.2vw,32px)] text-[13px] uppercase tracking-[0.1em]">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="text-texte-faible transition-colors hover:text-sauge">
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-sauge px-[18px] py-[9px] text-sauge transition-[background-color,color] duration-[260ms] ease-out hover:bg-sauge hover:text-sable"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

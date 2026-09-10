import { Link } from 'react-router-dom';
import { SITE } from '../config/site';
import { FOOTER_COLUMNS } from '../content/home';

const YEAR = new Date().getFullYear();

/** Pied de page : rappel des deux départements et liens de l'entreprise. */
export default function SiteFooter() {
  return (
    <footer className="shell mt-[clamp(56px,9vh,112px)] pb-[clamp(32px,5vh,56px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-[clamp(24px,4vw,56px)] border-t border-rule py-[clamp(28px,4vh,44px)]">
        <div className="flex flex-col gap-3">
          <span className="font-logo text-2xl">{SITE.name}</span>
          <span className="max-w-[26ch] text-sm leading-[1.7] text-texte">
            Édition de logiciels, conseil et formation.
          </span>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title} className="flex flex-col gap-2.5">
            <span className="mb-1 text-xs uppercase tracking-[0.2em] text-texte-label">{column.title}</span>
            {column.links.map((link) => (
              <a
                key={`${column.title}-${link.label}`}
                href={link.href}
                className="text-sm text-texte transition-colors hover:text-sauge"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-2.5">
          <span className="mb-1 text-xs uppercase tracking-[0.2em] text-texte-label">Entreprise</span>
          <a href={`mailto:${SITE.email}`} className="text-sm text-texte transition-colors hover:text-sauge">
            Contact
          </a>
          <Link to="/mentions-legales" className="text-sm text-texte transition-colors hover:text-sauge">
            Mentions légales
          </Link>
          <Link
            to="/mentions-legales#confidentialite"
            className="text-sm text-texte transition-colors hover:text-sauge"
          >
            Confidentialité
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-rule pt-5 text-[13px] text-texte-label">
        <span>© {YEAR} {SITE.name}</span>
        <span>{SITE.domain}</span>
      </div>
    </footer>
  );
}

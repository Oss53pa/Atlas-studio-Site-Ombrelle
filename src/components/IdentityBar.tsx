import { IDENTITY } from '../content/home';
import { SITE } from '../config/site';

/** Bandeau d'identité : ce qu'est l'entreprise, en quatre colonnes. */
export default function IdentityBar() {
  return (
    <div className="shell">
      <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] border-y border-rule">
        {IDENTITY.map((item) => (
          <div key={item.label} className="flex flex-col gap-1.5 py-5">
            <dt className="text-xs uppercase tracking-[0.2em] text-texte-label">{item.label}</dt>
            <dd className="m-0 text-[15px] text-texte-fort">{item.value}</dd>
          </div>
        ))}
        <div className="flex flex-col gap-1.5 py-5">
          <dt className="text-xs uppercase tracking-[0.2em] text-texte-label">Contact</dt>
          <dd className="m-0">
            <a href={`mailto:${SITE.email}`} className="text-[15px] text-sauge transition-colors hover:text-encre">
              {SITE.email}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}

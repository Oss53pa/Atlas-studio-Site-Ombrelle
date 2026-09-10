import { CONTACT } from '../content/home';
import { SITE } from '../config/site';

/** Bandeau sombre de fin de page : une seule adresse, pour les deux départements. */
export default function ContactSection() {
  return (
    <section id="contact" className="shell mt-[clamp(72px,12vh,144px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-end gap-[clamp(28px,5vw,72px)] rounded-bloc bg-nuit p-[clamp(36px,6vw,88px)] text-sable">
        <div className="flex flex-col gap-5">
          <span className="text-xs uppercase tracking-[0.24em] text-nuit-muted">{CONTACT.label}</span>
          <p className="m-0 font-logo text-invitation">{CONTACT.title}</p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="m-0 max-w-[40ch] text-base leading-[1.8] text-nuit-texte [text-wrap:pretty]">
            {CONTACT.body}
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-3 self-start rounded-full border border-sauge-clair px-[26px] py-3.5 text-[15px] tracking-[0.03em] text-sauge-clair transition-[background-color,color,border-color] duration-300 ease-out hover:bg-sauge-clair hover:text-saas-encre focus-visible:ring-offset-nuit"
          >
            {SITE.email} <span aria-hidden="true" className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

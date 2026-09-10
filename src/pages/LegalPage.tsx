import { Link } from 'react-router-dom';
import { LEGAL_BLOCKS } from '../config/legal';
import { SITE } from '../config/site';

/** Mentions légales et confidentialité, sur une seule page à deux ancres. */
export default function LegalPage() {
  return (
    <main className="shell pb-[clamp(40px,7vh,80px)] pt-[clamp(48px,9vh,104px)]">
      <div className="mb-[clamp(24px,4vh,44px)] flex items-center gap-[14px]">
        <span className="block h-px w-[34px] bg-encre" />
        <span className="eyebrow">Informations légales</span>
      </div>

      <h1 className="m-0 max-w-[16ch] font-logo text-invitation font-normal">Mentions légales</h1>

      <p className="mb-0 mt-[clamp(24px,4vh,40px)] max-w-[52ch] text-base leading-[1.8] text-texte [text-wrap:pretty]">
        Ces informations concernent le site ombrelle {SITE.domain}. Les conditions propres aux applications
        et aux missions sont publiées sur les sites des départements.
      </p>

      {LEGAL_BLOCKS.map((block) => (
        <section key={block.id} id={block.id} className="mt-[clamp(48px,8vh,96px)]">
          <h2 className="section-label m-0">
            {block.index}. {block.title}
          </h2>

          <div className="mt-[clamp(20px,3vh,34px)] grid gap-[clamp(20px,3vh,34px)]">
            {block.sections.map((section) => (
              <div
                key={section.heading}
                className="grid grid-cols-1 gap-x-[clamp(24px,4vw,56px)] gap-y-3 border-t border-rule pt-[18px] md:grid-cols-[minmax(0,220px)_minmax(0,1fr)]"
              >
                <h3 className="m-0 text-[15px] font-normal tracking-[0.02em] text-encre">{section.heading}</h3>
                <div className="flex flex-col gap-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="m-0 max-w-[62ch] text-[15px] leading-[1.8] text-texte-fort [text-wrap:pretty]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className="mt-[clamp(40px,7vh,80px)] text-[15px]">
        <Link to="/" className="text-sauge transition-colors hover:text-encre">
          ← Retour à l’accueil
        </Link>
      </p>
    </main>
  );
}

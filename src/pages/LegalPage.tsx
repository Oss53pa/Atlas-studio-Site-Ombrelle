import { Link } from 'react-router-dom';
import { useLegalPage } from '../config/legal';
import { LegalItemView } from '../components/LegalContent';
import { PATHS } from '../i18n/locale';
import { useLocale } from '../i18n/useLocale';
import { UI } from '../i18n/ui';

/** Mentions légales et confidentialité, sur une seule page à deux ancres. */
export default function LegalPage() {
  const locale = useLocale();
  const t = UI[locale].legal;
  const page = useLegalPage(locale);

  return (
    <main className="shell pb-[clamp(40px,7vh,80px)] pt-[clamp(48px,9vh,104px)]">
      <div className="mb-[clamp(24px,4vh,44px)] flex items-center gap-[14px]">
        <span className="block h-px w-[34px] bg-encre" />
        <span className="eyebrow">{t.eyebrow}</span>
      </div>

      <h1 className="m-0 max-w-[16ch] font-logo text-invitation font-semibold">{page.title}</h1>

      {page.intro && (
        <p className="mb-0 mt-[clamp(24px,4vh,40px)] max-w-[52ch] text-base leading-[1.8] text-texte [text-wrap:pretty]">
          {page.intro}
        </p>
      )}

      {page.blocks.map((block) => (
        <section key={block.id} id={block.id} className="mt-[clamp(48px,8vh,96px)]">
          <h2 className="section-label m-0">
            {block.index}. {block.title}
          </h2>

          <div className="mt-[clamp(20px,3vh,34px)] grid gap-[clamp(20px,3vh,34px)]">
            {block.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="grid grid-cols-1 gap-x-[clamp(24px,4vw,56px)] gap-y-3 border-t border-rule pt-[18px] md:grid-cols-[minmax(0,220px)_minmax(0,1fr)]"
              >
                <h3 className="m-0 text-[15px] font-normal tracking-[0.02em] text-encre">{section.heading ?? ''}</h3>
                <div className="flex flex-col gap-3">
                  {section.content.map((item, itemIndex) => (
                    <LegalItemView key={itemIndex} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className="mt-[clamp(40px,7vh,80px)] text-[15px]">
        <Link to={PATHS[locale].home} className="text-sauge transition-colors hover:text-encre">
          {t.back}
        </Link>
      </p>
    </main>
  );
}

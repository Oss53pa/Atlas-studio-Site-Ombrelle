import { DEPARTMENT_CARDS, HERO } from '../content/home';
import { paletteFor } from './departmentPalette';
import type { DepartmentFocus } from '../hooks/useDepartmentFocus';

/**
 * Ouverture de la page : le nom en grand, et à côté les deux raccourcis vers
 * les départements. Survoler un raccourci met en avant le bloc correspondant
 * plus bas dans la page.
 */
export default function Hero({ focus }: { focus: DepartmentFocus }) {
  return (
    <section className="relative overflow-hidden">
      {/* Ondes concentriques du fond, estompées vers le bas. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-radial-gradient(ellipse 130% 90% at 12% 4%, rgba(22,23,26,0) 0 46px, rgba(22,23,26,.055) 46px 47px)',
          WebkitMaskImage:
            'linear-gradient(180deg, rgba(0,0,0,.85) 0%, rgba(0,0,0,.35) 55%, transparent 92%)',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,.85) 0%, rgba(0,0,0,.35) 55%, transparent 92%)',
        }}
      />
      <div className="shell relative pb-[clamp(40px,7vh,80px)] pt-[clamp(56px,11vh,132px)]">
        <div className="mb-[clamp(24px,4vh,44px)] flex items-center gap-[14px]">
          <span className="block h-px w-[34px] bg-encre" />
          <span className="eyebrow">{HERO.eyebrow}</span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-end gap-[clamp(24px,4vw,64px)]">
          <h1 className="m-0 font-logo text-wordmark font-normal">{HERO.title}</h1>

          <div className="flex flex-col pb-[clamp(6px,1.4vh,18px)]">
            {DEPARTMENT_CARDS.map((card, i) => {
              const palette = paletteFor(card.key, focus.active === card.key);
              return (
                <a
                  key={card.key}
                  href="#departements"
                  onMouseEnter={() => focus.focus(card.key)}
                  onMouseLeave={focus.blur}
                  onFocus={() => focus.focus(card.key)}
                  onBlur={focus.blur}
                  className={`flex items-baseline justify-between gap-[18px] border-t border-rule py-3 text-sm tracking-[0.03em] transition-colors duration-300 ${
                    i === DEPARTMENT_CARDS.length - 1 ? 'border-b' : ''
                  }`}
                  style={{ color: palette.link }}
                >
                  <span
                    className={`text-texte-label uppercase tracking-[0.18em] ${
                      card.key === 'saas' ? 'font-dosis text-[11px] font-semibold' : 'font-prata text-[10px]'
                    }`}
                  >
                    {card.index}
                  </span>
                  <span>{card.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-[clamp(32px,5vh,64px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-end gap-[clamp(28px,5vw,72px)]">
          <p className="m-0 max-w-[20ch] text-chapeau font-light [text-wrap:pretty]">{HERO.lead}</p>
          <p className="m-0 max-w-[44ch] text-base leading-[1.8] text-texte [text-wrap:pretty]">{HERO.body}</p>
        </div>
      </div>
    </section>
  );
}

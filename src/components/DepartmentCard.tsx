import type { DepartmentCardContent } from '../content/home';
import type { DepartmentFocus } from '../hooks/useDepartmentFocus';
import { cardStyle, paletteFor } from './departmentPalette';

/**
 * Bloc d'un département : un lien plein cadre vers son site.
 *
 * Tout le bloc est cliquable ; la mise en avant se déclenche au survol comme
 * au focus clavier, pour que la navigation au clavier voie la même chose.
 */
export default function DepartmentCard({
  card,
  focus,
}: {
  card: DepartmentCardContent;
  focus: DepartmentFocus;
}) {
  const palette = paletteFor(card.key, focus.active === card.key);
  const muted = { color: palette.muted };
  const rule = { borderColor: palette.rule };

  return (
    <a
      ref={focus.register(card.key)}
      href={card.url}
      onMouseEnter={() => focus.focus(card.key)}
      onMouseLeave={focus.blur}
      onFocus={() => focus.focus(card.key)}
      onBlur={focus.blur}
      aria-label={`${card.name} — ouvrir le site du département`}
      className="flex min-h-[clamp(420px,58vh,560px)] flex-col justify-between gap-[clamp(40px,7vh,72px)] rounded-bloc border border-rule p-[clamp(28px,3vw,48px)] transition-[background-color,color,border-color,transform] duration-420 ease-out"
      style={cardStyle(palette)}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-4">
          <span
            className={`uppercase tracking-[0.22em] transition-colors duration-420 ${
              card.key === 'saas' ? 'font-dosis text-xs font-semibold' : 'font-prata text-[11px]'
            }`}
            style={muted}
          >
            {card.kicker}
          </span>
          <span className="text-xs tracking-[0.18em] transition-colors duration-420" style={muted}>
            {card.index}
          </span>
        </div>

        <h3 className="m-0 font-logo text-departement font-normal">{card.name}</h3>

        <p
          className="m-0 max-w-[42ch] text-base leading-[1.8] transition-colors duration-420 [text-wrap:pretty]"
          style={muted}
        >
          {card.description}
        </p>

        <ul className="mx-0 mb-0 mt-2 flex list-none flex-col p-0">
          {card.rows.map((row) => (
            <li
              key={row.term}
              className="flex justify-between gap-4 border-t py-[11px] text-[15px] transition-colors duration-420"
              style={rule}
            >
              <span>{row.term}</span>
              <span className="transition-colors duration-420" style={muted}>
                {row.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="flex items-center justify-between gap-4 border-t pt-5 transition-colors duration-420"
        style={rule}
      >
        <span className="text-sm tracking-[0.03em]">{card.host}</span>
        <span
          aria-hidden="true"
          className="text-[22px] leading-none transition-transform duration-420"
          style={{ transform: palette.arrow }}
        >
          →
        </span>
      </div>
    </a>
  );
}

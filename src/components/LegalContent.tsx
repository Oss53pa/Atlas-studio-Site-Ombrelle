import { Fragment, type ReactNode } from 'react';
import type { LegalItem } from '../config/legal';

// Adresses électroniques et numéros de téléphone deviennent des liens. Le texte
// reste du texte : React l'échappe, aucune balise venue de la base n'est interprétée.
const LINKABLE = /([^\s@<>()]+@[^\s@<>()]+\.[a-z]{2,})|(\+\d[\d ]{7,}\d)/gi;

export function Linkified({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINKABLE)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    const value = m[0].replace(/[.,;:]$/, '');
    const href = m[1] ? `mailto:${value}` : `tel:${value.replace(/\s/g, '')}`;
    out.push(
      <a key={at} href={href} className="text-sauge transition-colors hover:text-encre">
        {value}
      </a>,
    );
    last = at + value.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out.map((part, i) => <Fragment key={i}>{part}</Fragment>)}</>;
}

const P = 'm-0 max-w-[62ch] text-[15px] leading-[1.8] text-texte-fort [text-wrap:pretty]';

/** Rendu d'un élément de contenu légal (paragraphe, liste, définitions, tableau, encadré). */
export function LegalItemView({ item }: { item: LegalItem }) {
  switch (item.type) {
    case 'paragraph':
      return <p className={P}><Linkified text={item.text} /></p>;
    case 'list':
      return (
        <div className="flex flex-col gap-2">
          {item.title && <p className={`${P} text-encre`}><Linkified text={item.title} /></p>}
          <ul className="m-0 flex list-disc flex-col gap-1.5 pl-5">
            {item.items.map((entry, i) => (
              <li key={i} className={P}><Linkified text={entry} /></li>
            ))}
          </ul>
        </div>
      );
    case 'definitions':
      return (
        <dl className="m-0 flex flex-col gap-3">
          {item.items.map((d, i) => (
            <div key={i}>
              <dt className="text-[15px] text-encre">{d.term}</dt>
              <dd className={`${P} ml-0`}><Linkified text={d.definition} /></dd>
            </div>
          ))}
        </dl>
      );
    case 'table':
      return (
        <div className="max-w-full overflow-x-auto">
          <table className="w-full border-collapse text-left text-[14px] leading-[1.6]">
            <thead>
              <tr>
                {item.headers.map((h, i) => (
                  <th key={i} className="border-b border-rule py-2 pr-4 font-normal text-encre">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="border-b border-rule py-2 pr-4 align-top text-texte-fort">
                      <Linkified text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'callout':
      return (
        <p className={`${P} border-l-2 border-sauge pl-4`}>
          <Linkified text={item.text} />
        </p>
      );
    default:
      return null;
  }
}

import { METHOD } from '../content/home';

/** Ce qui relie les deux départements : la mission nourrit l'édition. */
export default function MethodSection() {
  return (
    <section id="methode" className="shell pt-[clamp(72px,12vh,144px)]">
      <h2 className="section-label mb-[clamp(28px,5vh,52px)] mt-0">{METHOD.label}</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(32px,5vw,72px)]">
        <p className="m-0 max-w-[18ch] text-manifeste font-light [text-wrap:pretty]">{METHOD.statement}</p>

        <ol className="m-0 grid list-none gap-[clamp(20px,3vh,34px)] p-0">
          {METHOD.steps.map((step) => (
            <li
              key={step.index}
              className="grid grid-cols-[44px_minmax(0,1fr)] gap-5 border-t border-rule pt-[18px]"
            >
              <span className="text-[13px] tracking-[0.16em] text-texte-label">{step.index}</span>
              <p className="m-0 text-base leading-[1.8] text-texte-fort [text-wrap:pretty]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <figure className="mx-0 mb-0 mt-[clamp(36px,6vh,72px)] flex flex-col gap-3.5">
        <picture>
          <source srcSet="/images/seance-de-travail.webp" type="image/webp" />
          <img
            src="/images/seance-de-travail.jpg"
            alt={METHOD.figure.alt}
            width={2400}
            height={1350}
            loading="lazy"
            decoding="async"
            className="block h-[clamp(280px,50vh,560px)] w-full rounded-bloc object-cover [object-position:50%_42%]"
          />
        </picture>
        <figcaption className="text-[13px] tracking-[0.04em] text-texte-label">{METHOD.figure.caption}</figcaption>
      </figure>
    </section>
  );
}

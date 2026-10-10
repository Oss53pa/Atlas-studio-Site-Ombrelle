/**
 * Logo Atlas Studio, redessiné en vectoriel d'après le fichier fourni.
 *
 * Le tracé reprend le pictogramme (lame diagonale, pilier, maison) ; le mot
 * « ATLAS STUDIO » est composé en Jost, chargée par index.html, et calé sur
 * l'original. Tout est en currentColor : la couleur se règle par text-*.
 */

const MARK_PATH =
  'M0 279 359 0v140l-60-39V71L0 331zM126 244l54-48v135h-54zM235 331V178l64-55 87 71q7 5 7 12v125h-60V217q0-8-6-13l-29-29-9 9q-5 5-5 12v135z';

type AtlasLogoProps = {
  /** « lockup » : pictogramme et nom ; « mark » : pictogramme seul. */
  variant?: 'lockup' | 'mark';
  className?: string;
  /** Logo purement décoratif, à côté d'un nom déjà écrit : masqué aux lecteurs d'écran. */
  decorative?: boolean;
};

export default function AtlasLogo({ variant = 'lockup', className, decorative = false }: AtlasLogoProps) {
  const isLockup = variant === 'lockup';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={isLockup ? '0 0 920 331' : '0 0 393 331'}
      {...(decorative ? { 'aria-hidden': true } : { role: 'img', 'aria-label': 'Atlas Studio' })}
      className={className}
      fill="currentColor"
    >
      <path d={MARK_PATH} />
      {isLockup && (
        <g fontFamily="'Jost', Helvetica, sans-serif">
          <text x="454" y="200" fontWeight="600" fontSize="114" letterSpacing="28.5">
            ATLAS
          </text>
          <text x="453" y="300" fontWeight="400" fontSize="91" letterSpacing="33">
            STUDIO
          </text>
        </g>
      )}
    </svg>
  );
}

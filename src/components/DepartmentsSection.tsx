import { DEPARTMENT_CARDS } from '../content/home';
import DepartmentCard from './DepartmentCard';
import type { DepartmentFocus } from '../hooks/useDepartmentFocus';

/** Les deux départements, côte à côte. */
export default function DepartmentsSection({ focus }: { focus: DepartmentFocus }) {
  return (
    <section id="departements" className="shell pt-[clamp(56px,10vh,120px)]">
      <div className="mb-[clamp(24px,4vh,44px)] flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="section-label m-0">01. Les deux départements</h2>
        <span className="text-[13px] text-texte-label">
          {focus.coarse ? 'Deux sites, deux univers' : 'Survolez un bloc'}
        </span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-[clamp(16px,2vw,28px)]">
        {DEPARTMENT_CARDS.map((card) => (
          <DepartmentCard key={card.key} card={card} focus={focus} />
        ))}
      </div>
    </section>
  );
}

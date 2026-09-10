import Hero from '../components/Hero';
import IdentityBar from '../components/IdentityBar';
import DepartmentsSection from '../components/DepartmentsSection';
import MethodSection from '../components/MethodSection';
import ContactSection from '../components/ContactSection';
import { useDepartmentFocus } from '../hooks/useDepartmentFocus';

/**
 * Page d'accueil du site ombrelle.
 *
 * La mise en avant d'un département est portée ici plutôt que dans chaque
 * bloc : le hero et la section « départements » la partagent, un raccourci
 * survolé en haut de page anime le bloc correspondant plus bas.
 */
export default function HomePage() {
  const focus = useDepartmentFocus();

  return (
    <main>
      <Hero focus={focus} />
      <IdentityBar />
      <DepartmentsSection focus={focus} />
      <MethodSection />
      <ContactSection />
    </main>
  );
}

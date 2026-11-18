import { Link } from 'react-router-dom';
import { PATHS } from '../i18n/locale';
import { useLocale } from '../i18n/useLocale';
import { UI } from '../i18n/ui';

/** Page 404 : le site ne compte que deux pages, on renvoie vite à l'accueil. */
export default function NotFoundPage() {
  const locale = useLocale();
  const t = UI[locale].notFound;

  return (
    <main className="shell flex min-h-[60vh] flex-col justify-center gap-6 py-[clamp(48px,9vh,104px)]">
      <span className="eyebrow">{t.eyebrow}</span>
      <h1 className="m-0 max-w-[14ch] font-logo text-invitation font-semibold">{t.title}</h1>
      <p className="m-0 max-w-[44ch] text-base leading-[1.8] text-texte [text-wrap:pretty]">{t.body}</p>
      <p className="m-0 text-[15px]">
        <Link to={PATHS[locale].home} className="text-sauge transition-colors hover:text-encre">
          {t.back}
        </Link>
      </p>
    </main>
  );
}

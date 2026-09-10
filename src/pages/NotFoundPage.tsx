import { Link } from 'react-router-dom';

/** Page 404 — le site ne compte que deux pages, on renvoie vite à l'accueil. */
export default function NotFoundPage() {
  return (
    <main className="shell flex min-h-[60vh] flex-col justify-center gap-6 py-[clamp(48px,9vh,104px)]">
      <span className="eyebrow">Erreur 404</span>
      <h1 className="m-0 max-w-[14ch] font-logo text-invitation font-normal">Page introuvable</h1>
      <p className="m-0 max-w-[44ch] text-base leading-[1.8] text-texte [text-wrap:pretty]">
        Cette adresse ne correspond à aucune page du site. Les deux départements sont présentés sur la page
        d’accueil.
      </p>
      <p className="m-0 text-[15px]">
        <Link to="/" className="text-sauge transition-colors hover:text-encre">
          ← Retour à l’accueil
        </Link>
      </p>
    </main>
  );
}

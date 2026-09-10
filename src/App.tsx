import { Route, Routes } from 'react-router-dom';
import RouteMeta from './components/RouteMeta';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Site ombrelle d'Atlas Studio.
 *
 * Deux pages : l'accueil, qui présente les deux départements et renvoie vers
 * leurs sites, et les mentions légales.
 */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-sable text-encre">
      <RouteMeta />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border focus:border-sauge focus:bg-sable focus:px-5 focus:py-2 focus:text-sm focus:text-sauge"
      >
        Aller au contenu
      </a>
      <SiteHeader />
      <div id="top" className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <SiteFooter />
    </div>
  );
}

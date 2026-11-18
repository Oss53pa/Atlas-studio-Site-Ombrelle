import { Route, Routes } from 'react-router-dom';
import RouteMeta from './components/RouteMeta';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import { PATHS } from './i18n/locale';
import { useLocale } from './i18n/useLocale';
import { UI } from './i18n/ui';

/**
 * Site ombrelle d'Atlas Studio.
 *
 * Deux pages : l'accueil, qui présente les deux départements et renvoie vers
 * leurs sites, et les mentions légales. Chacune existe en français, à la
 * racine, et en anglais, sous /en.
 */
export default function App() {
  const locale = useLocale();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-sable text-encre">
      <RouteMeta />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border focus:border-sauge focus:bg-sable focus:px-5 focus:py-2 focus:text-sm focus:text-sauge"
      >
        {UI[locale].skipLink}
      </a>
      <SiteHeader />
      <div id="top" className="flex-1">
        <Routes>
          <Route path={PATHS.fr.home} element={<HomePage />} />
          <Route path={PATHS.fr.legal} element={<LegalPage />} />
          <Route path={PATHS.en.home} element={<HomePage />} />
          <Route path={PATHS.en.legal} element={<LegalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <SiteFooter />
    </div>
  );
}

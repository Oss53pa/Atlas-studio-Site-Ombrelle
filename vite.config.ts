import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Site ombrelle Atlas Studio — vitrine statique, sans backend.
// Il ne fait que présenter les deux départements et renvoyer vers leurs sites.
export default defineConfig({
  plugins: [react()],
  // Honore la variable PORT (utilisée par l'outil de preview) ; défaut 5173 en dev normal.
  server: {
    port: Number(process.env.PORT) || 5173,
  },
});

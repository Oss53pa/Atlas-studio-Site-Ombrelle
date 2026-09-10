/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fond sable et encre — base du site ombrelle.
        sable: '#FAF8F3',
        encre: '#16171A',
        rule: '#E8E3D9',
        // Vert sauge : accent de navigation et de liens.
        sauge: {
          DEFAULT: '#40584E',
          clair: '#A9C6B8',
        },
        // Gris de texte, du plus lisible au plus discret.
        texte: {
          fort: '#3A3B3E',
          DEFAULT: '#5A5B5E',
          doux: '#5E5F63',
          faible: '#6B6C6F',
          label: '#6B675F',
        },
        // Département Atlas SaaS — volt.
        saas: {
          DEFAULT: '#CBE45F',
          encre: '#14150F',
          muted: '#414727',
          bord: '#A8C22F',
          lien: '#5A6B12',
        },
        // Département Atlas Consulting — indigo.
        consulting: {
          DEFAULT: '#1C2058',
          creme: '#F0E7D8',
          muted: '#BFB6A6',
          bord: '#2E7093',
        },
        // Bandeau de contact sombre.
        nuit: {
          DEFAULT: '#16171A',
          texte: '#C6C4BF',
          muted: '#8E8F92',
        },
      },
      fontFamily: {
        // Jost porte le corps de texte, en graisse 300.
        body: ["'Jost'", 'Helvetica', 'sans-serif'],
        // Grand Hotel signe le nom Atlas Studio et les titres de section.
        logo: ["'Grand Hotel'", 'cursive'],
        // Dosis identifie Atlas SaaS, Prata identifie Atlas Consulting.
        dosis: ["'Dosis'", "'Jost'", 'sans-serif'],
        prata: ["'Prata'", 'Georgia', 'serif'],
      },
      fontSize: {
        // Échelle fluide : la typographie suit la largeur de la fenêtre.
        wordmark: ['clamp(66px,13.5vw,196px)', { lineHeight: '0.86', letterSpacing: '-0.015em' }],
        departement: ['clamp(44px,5vw,68px)', { lineHeight: '1' }],
        invitation: ['clamp(38px,5vw,66px)', { lineHeight: '1' }],
        chapeau: ['clamp(22px,2.6vw,34px)', { lineHeight: '1.35' }],
        manifeste: ['clamp(24px,2.8vw,38px)', { lineHeight: '1.3' }],
      },
      maxWidth: {
        site: '1320px',
      },
      spacing: {
        // Gouttière latérale commune à toutes les sections.
        gutter: 'clamp(20px,5vw,72px)',
      },
      borderRadius: {
        bloc: '3px',
      },
      transitionDuration: {
        400: '400ms',
        420: '420ms',
      },
    },
  },
  plugins: [],
};

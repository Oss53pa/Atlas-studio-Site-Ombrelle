# Atlas Studio — site ombrelle

Site vitrine d'`atlas-studio.org`. Il présente l'entreprise et ses deux départements,
puis renvoie vers leurs sites respectifs :

- **Atlas SaaS** — édition d'applications métier → `saas-branch.atlas-studio.org`
- **Atlas Consulting** — conseil et formation → `consulting-branch.atlas-studio.org`

Le site est entièrement statique : ni compte, ni formulaire, ni backend. Le seul
point de contact est l'adresse `contact@atlas-studio.org`.

## Démarrer

```bash
npm install
npm run dev        # serveur de développement sur http://localhost:5173
```

## Scripts

| Commande            | Effet                                    |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Serveur de développement (Vite)          |
| `npm run build`     | Build de production dans `dist/`         |
| `npm run preview`   | Sert le build de production              |
| `npm run typecheck` | Vérification TypeScript (`tsc -b`)       |
| `npm run lint`      | ESLint                                   |

## Stack

Vite · React 18 · TypeScript · Tailwind CSS 3 · React Router — même socle que les
autres dépôts Atlas Studio. Déploiement sur Vercel (`vercel.json` réécrit toutes
les routes vers `index.html` pour le routage côté client).

## Structure

```
src/
├── config/
│   ├── site.ts       URLs des départements, contact, navigation
│   └── legal.ts      Mentions légales et confidentialité
├── content/
│   └── home.ts       Textes de la page d'accueil
├── components/       En-tête, hero, blocs de département, méthode, contact, pied de page
├── hooks/
│   └── useDepartmentFocus.ts
└── pages/            Accueil, mentions légales, 404
```

Les textes vivent dans `config/` et `content/`, séparés des composants : une
correction éditoriale ne touche pas à la mise en page.

## Deux détails d'implémentation

**La mise en avant d'un département** est portée par `useDepartmentFocus`, partagée
entre le hero et la section « départements » : survoler un raccourci en haut de page
anime le bloc correspondant plus bas. Sur un écran tactile, où il n'y a pas de survol,
un `IntersectionObserver` prend le relais — le bloc s'anime dès qu'il occupe
l'essentiel de la fenêtre.

**Les polices** (Jost, Grand Hotel, Dosis, Prata) sont chargées depuis Google Fonts
dans `index.html`, comme sur les autres sites Atlas Studio. Grand Hotel signe le nom,
Dosis identifie Atlas SaaS, Prata identifie Atlas Consulting.

## Images

La photo de la section « méthode » est servie en WebP avec un repli JPEG
(`public/images/`). Toute nouvelle image doit être redimensionnée à 2400 px de large
au maximum avant d'être versionnée.

## Déploiement (Vercel)

Le dépôt est prêt à être importé tel quel : `vercel.json` est versionné et Vercel
détecte Vite tout seul. Aucune variable d'environnement n'est nécessaire — le site
est statique et n'appelle aucun backend.

### Import initial

1. Vercel → **Add New… → Project** → importer `Oss53pa/Atlas-studio-Site-Ombrelle`
2. Vérifier les réglages détectés (ils devraient déjà être corrects) :

   | Réglage             | Valeur          |
   | ------------------- | --------------- |
   | Framework Preset    | Vite            |
   | Build Command       | `npm run build` |
   | Output Directory    | `dist`          |
   | Install Command     | `npm ci`        |
   | Node.js Version     | 20.x            |

3. **Deploy**

Une fois le projet lié, chaque `push` sur `main` déclenche un déploiement de
production ; les autres branches produisent des previews.

### Domaine

Vercel → Project → Settings → Domains → ajouter `atlas-studio.org` et
`www.atlas-studio.org`, puis chez le registrar :

| Type  | Host | Valeur                 | TTL  |
| ----- | ---- | ---------------------- | ---- |
| A     | @    | `76.76.21.21`          | Auto |
| CNAME | www  | `cname.vercel-dns.com` | Auto |

Les deux départements gardent leurs propres projets Vercel sur
`saas-branch.atlas-studio.org` et `consulting-branch.atlas-studio.org` : ce site ne
touche pas à leurs enregistrements DNS.

### Ce que fait `vercel.json`

- **Rewrites** — toutes les routes sont réécrites vers `index.html`, sans quoi un
  accès direct à `/mentions-legales` renverrait un 404 (le routage est côté client).
- **Cache** — `index.html` n'est jamais mis en cache, les fichiers de `assets/` et
  `images/` le sont un an (leurs noms portent une empreinte, ou ne changent pas).

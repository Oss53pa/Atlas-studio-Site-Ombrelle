# Atlas-studio-Site-Ombrelle

## Règles de travail et de déploiement

Ces règles s'appliquent à toute session de travail sur ce dépôt, humaine ou assistée par Claude.

1. Travailler en local et regrouper les modifications. Ne pas pousser à chaque petite modification, on pousse un lot cohérent, une seule fois.
2. Ne pousser sur la branche de production, `main`, qu'un lot terminé, testé et validé par Oss53pa.
3. Ne jamais créer de branche qui déclenche un déploiement Vercel sans l'accord explicite d'Oss53pa. Le vercel.json ne déploie que la branche de production et saute le build quand rien n'a changé dans l'application. Ne pas modifier ces réglages sans cet accord.
4. Les tests, le lint et le contrôle de types ne font pas partie du build Vercel. Ils se lancent en local, avant de pousser le lot.

# Dashboard financier - test technique
## Lancer le projet
   bash
   Copier
   Modifier
   git clone <repo-url>
   cd dashboard-test
1. Installer les dépendances

   ```
   npm install
   ```
2. Lancer le serveur mock (Node.js)

 ```
   cd server
   npm install
   node index.js
   ```
   Le serveur tournera sur http://localhost:4000/api/....

**Note : Le backend ne répond pas encore à tous les appels du front. Les données sont partiellement statiques.**

3. Lancer le front
  ```
   npm run dev
   ```
   Application disponible sur http://localhost:3000


## Techno utilisées
- Next.js 14 avec app directory

- React 18 (client components uniquement)

- MUI 5 (Material UI) pour le layout et les composants

- Recharts pour les visualisations dynamiques (graphes)

- Node.js + Express (mock API – non finalisé)

- TypeScript

## Ce qui est fait : 
- Intégration  mobile-first du dashboard selon la maquette fournie.

- Sidebar réactive et non superposée, avec comportement collapse en mobile.

- TopBar fidèle à la maquette, responsive et fonctionnelle.

- Header avec 4 cards (identité, segment, évaluation des risques, montant), parfaitement alignées.

- Graphique dynamique des taux et tableau EURIBOR responsifs.

- Section “Transactions” fonctionnelle avec :

    - Tabs filtrants

    - 4 cards (statut, montant, prêt en attente, prêt clôturé)

    - Deux tableaux en bas, prêts pour connexion API

## Pourquoi la partie dynamique backend n’est pas finalisée
J'ai eu moins de 6 heures effectives à consacrer à ce test, réparties sur deux jours, car je suis actuellement en période de soutenances de fin d’année (école, projets, examens...).

J’avais préparé un serveur Node avec Express et des fichiers JSON, mais je n’ai pas eu le temps de finaliser correctement la structure des données et les appels dans tous les composants. J’ai préféré concentrer mon temps sur l'intégration front au pixel, le responsive et la structure modulaire du code.

## Ce que j’aurais aimé faire avec plus de temps
- Finaliser la connexion dynamique à l’API dans tous les composants.

- Ajouter une vraie gestion des états de chargement et des erreurs.

- Finaliser la page d'accueil avec une "gestion de connexion factice"

- Rendre les filtres fonctionnels sur la base des données reçues.

- Peaufiner les animations, interactions (hover, transitions subtiles) et accessibilité.

## Conclusion
J’ai fait le maximum dans les temps que j'avais de disponible. Si j’avais pu poser deux jours pleins dessus, je l’aurais finalisé proprement de A à Z. J’espère que le résultat vous plaira.
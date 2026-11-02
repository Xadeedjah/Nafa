# FANAVERSE 💗

Site d'anniversaire interactif pour Fana. React + TypeScript + Tailwind CSS (Vite).
Aucun compte, aucune base de données, aucune musique automatique.

## 1. Lancer le site chez toi

Il faut [Node.js](https://nodejs.org) (version 18 ou plus).

```bash
cd fanaverse
npm install
npm run dev
```

Ouvre l'adresse affichée (souvent http://localhost:5173). Sur iPhone, ouvre la même adresse en wifi
(`npm run dev -- --host` pour exposer le serveur).

## 2. Écrire tes textes et changer les couleurs

**Tout est dans un seul fichier : `src/config/site.ts`.**

| Ce que tu veux modifier | Où dans le fichier |
| --- | --- |
| Couleurs | `colors` |
| Blagues de l'accueil, répliques de la diva, étude, compteur, dossier | `home` et `dossier` |
| Ta lettre + signature | `letter.paragraphs`, `letter.signature` (un élément = un paragraphe) |
| Légendes des Polaroids | `story.photos` |
| Tes raisons d'aimer Fana | `why.cards` (`front` = titre, `back` = ton texte ; mets `exemple: false` pour retirer le badge) |
| Messages « À ouvrir quand… » | `openWhen.envelopes[].message` |
| Légendes de l'album | `memories.photos` |
| Message final + signature | `final.paragraphs`, `final.signature` |

Les textes entre crochets `[comme ceci]` sont des espaces réservés : remplace-les par les tiens.

## 3. Ajouter tes photos

1. Copie tes images dans le dossier `public/photos/` (ex. `fana-et-moi.jpg`). Format JPG, idéalement < 500 Ko chacune.
2. Dans `src/config/site.ts`, renseigne `src` : `{ src: "photos/fana-et-moi.jpg", caption: "Ta légende" }`.

Tant que `src` est vide, un espace « Photo à ajouter » s'affiche.

## 4. Publier et obtenir un lien partageable

Commence par `npm run build` : le site complet est généré dans le dossier `dist/`.

**Option la plus simple : Netlify Drop**
1. Va sur https://app.netlify.com/drop
2. Glisse-dépose le dossier `dist/`.
3. Tu obtiens un lien `https://….netlify.app` (tu peux le renommer dans les réglages du site).

**Option Vercel** : `npm i -g vercel`, puis `vercel` dans le dossier du projet (répondre aux questions ; build : `npm run build`, sortie : `dist`).

**Option GitHub Pages** : envoie le projet sur GitHub, puis publie le contenu de `dist/` (par ex. avec l'action GitHub Pages).

À chaque modification des textes ou photos : relance `npm run build` et republie `dist/`.

## Accessibilité

Navigation au clavier, fenêtres fermables avec Échap, flèches ← → dans l'album,
et respect de la préférence système « réduire les animations ».

## Aperçu en un seul fichier

`npm run build:single` génère `dist-single/index.html`, ouvrable directement (sans photos externes).

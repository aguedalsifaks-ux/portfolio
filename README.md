# Portfolio 2026

Portfolio professionnel en développement, destiné à des recruteurs québécois.

## Stack technique

- HTML5
- CSS3 (vanilla, aucun framework)
- JavaScript vanilla (aucune librairie)

Aucun framework JS (React, Vue, Angular), aucun framework CSS (Tailwind, Bootstrap), aucune dépendance externe au chargement du site.

## Structure du projet

```
Portfolio 2026/
├── index.html                 → page d'accueil (Couverture)
├── style.css                  → point d'entrée CSS
├── script.js                  → point d'entrée JS
├── README.md
├── PROJECT.md                 → mémoire du projet
├── DESIGN_RULES.md            → règles graphiques
├── PORTFOLIO_STRUCTURE.md     → feuille de route des pages
├── CONTENT_GUIDE.md           → référence éditoriale par page
├── css/
│   ├── base/                  → variables, polices, reset, typographie
│   ├── layout/                → grille responsive
│   ├── components/            → boutons, cartes, badges, navigation, indicateur de page, placeholder média
│   ├── pages/                  → styles propres à chaque page (une par page)
│   └── utilities.css
├── js/
│   └── modules/                → scripts propres à une page (lightbox, interactions de survol/focus)
├── pages/                      → pages secondaires (tout sauf l'accueil)
└── assets/
    ├── images/                 → photos, illustrations, infographies, carrousels, créatives, icônes
    ├── documents/               → PDF (CV, etc.)
    └── fonts/                   → police Inter auto-hébergée
```

## Design system

Tous les tokens (couleurs, typographie, espacement, rayons, ombres, grille) sont définis dans [css/base/variables.css](css/base/variables.css). Les règles d'usage sont documentées dans [DESIGN_RULES.md](DESIGN_RULES.md).

- Police : Inter, auto-hébergée dans `assets/fonts/` (licence SIL OFL incluse)
- Couleur d'accent unique : violet (`--color-accent`)
- Style recherché : minimaliste, premium, beaucoup d'espace blanc — inspiré de Linear, Notion, Framer, Stripe

## Prévisualiser le site

Aucun serveur requis pour l'instant : ouvrir `index.html` directement dans un navigateur.

## Convention pour toute nouvelle page

`index.html` reste à la racine. Toute nouvelle page se crée dans `pages/` et référence les ressources partagées avec un préfixe `../` :

```html
<link rel="stylesheet" href="../style.css">
<script src="../script.js"></script>
```

Les chemins vers `assets/` depuis une page de `pages/` suivent la même logique : `../assets/...`.

## État d'avancement

Les 9 pages du portfolio sont terminées, validées, et sans aucun placeholder de contenu (Couverture — avec photo réelle, Qui je suis, Une campagne de contenu de A à Z, Carrousels, Réalisations visuelles, Transformer une expertise en contenu, La constance n'est pas un hasard, Ce que je peux apporter, Contact — avec coordonnées réelles). Le portfolio comptait 10 pages jusqu'au 2026-07-19 (fusion de l'ancienne Page 7 « IA » dans la Page 6 ; l'ancienne Page 8 « système » devenue la Page 7 actuelle). Dernière page retouchée en profondeur : la Page 3, dont la mise en scène a été entièrement repensée le 2026-07-21 (elle démontre désormais une transformation — d'un brief minimal à une campagne complète — plutôt qu'une galerie de publications). La Page 4 dispose d'un mini-carousel à flèches (scrollbar masquée, swipe conservé) depuis le 2026-07-20.

Prochaine étape : la revue finale globale du portfolio complet, puis la phase design (aucune tâche de contenu ou d'architecture éditoriale en attente à ce jour). Voir [PORTFOLIO_STRUCTURE.md](PORTFOLIO_STRUCTURE.md) pour le suivi page par page, [CONTENT_GUIDE.md](CONTENT_GUIDE.md) pour le détail éditorial de chaque page, [DESIGN_RULES.md](DESIGN_RULES.md) pour les patterns visuels, et [PROJECT.md](PROJECT.md) pour le contexte complet du projet — sa section « Reprise de session » en tête de fichier (mise à jour exhaustive le 2026-07-21) résume l'état actuel, les décisions validées, les bugs corrigés et la prochaine étape en détail.

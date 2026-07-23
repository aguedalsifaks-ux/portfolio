# Portfolio 2026

Portfolio professionnel en développement, destiné à des recruteurs québécois.

## Stack technique

- HTML5
- CSS3 (vanilla, aucun framework)
- JavaScript vanilla (aucune librairie)

Aucun framework JS (React, Vue, Angular), aucun framework CSS (Tailwind, Bootstrap), aucune dépendance externe au chargement du site.

## Architecture

**Portfolio one-page** (depuis le 2026-07-23) : les 9 sections vivent toutes dans `index.html`, parcourues au défilement. Il n'y a plus de pages secondaires — les boutons de transition sont des ancres internes (`#qui-je-suis`, `#campagne`, …) à défilement fluide, et les animations d'apparition se déclenchent quand chaque section entre dans le viewport (`IntersectionObserver` dans `script.js`).

```
Portfolio 2026/
├── index.html                 → LE site entier : 9 sections (Couverture → Contact)
├── style.css                  → point d'entrée CSS (assemble base/layout/components/utilities)
├── script.js                  → révélation des sections au défilement (IntersectionObserver)
├── README.md
├── PROJECT.md                 → mémoire du projet
├── DESIGN_RULES.md            → règles graphiques
├── PORTFOLIO_STRUCTURE.md     → feuille de route des sections
├── CONTENT_GUIDE.md           → référence éditoriale par section
├── css/
│   ├── base/                  → variables, polices, reset, typographie
│   ├── layout/                → grille responsive (+ .section : rythme vertical des sections)
│   ├── components/            → boutons, cartes, badges, indicateur de page
│   ├── pages/                  → styles propres à chaque section (une feuille par section)
│   └── utilities.css          → .reveal (apparition), .sr-only, helpers
├── js/
│   └── modules/                → scripts d'une section (lightbox, modal publication, carrousel, hub méthode)
└── assets/
    ├── images/                 → photos, illustrations, infographies, carrousels, créatives, icônes
    └── fonts/                   → police Inter auto-hébergée
```

> Les feuilles `css/pages/*.css` et `js/modules/*.js` gardent le nom de leur section d'origine (héritage de l'ancienne structure multi-pages). Elles restent scopées par la classe de tête de chaque section (`.cover`, `.about`, `.campaign`, …), donc aucune fuite de style d'une section à l'autre.

## Design system

Tous les tokens (couleurs, typographie, espacement, rayons, ombres, grille) sont définis dans [css/base/variables.css](css/base/variables.css). Les règles d'usage sont documentées dans [DESIGN_RULES.md](DESIGN_RULES.md).

- Police : Inter, auto-hébergée dans `assets/fonts/` (licence SIL OFL incluse)
- Couleur d'accent unique : violet (`--color-accent`)
- Style recherché : minimaliste, premium, beaucoup d'espace blanc — inspiré de Linear, Notion, Framer, Stripe

## Prévisualiser le site

Aucun serveur requis : ouvrir `index.html` directement dans un navigateur. Le déclenchement au défilement (`IntersectionObserver`) et les modales (texte embarqué, aucun `fetch`) fonctionnent aussi en ouverture directe `file://`.

## Convention (architecture one-page)

Tout se passe dans `index.html`, à la racine ; les ressources sont référencées en chemins relatifs à la racine (`style.css`, `css/…`, `js/…`, `assets/…`, sans préfixe `../`). Chaque section est un `<section id="…" class="section <classe-de-tête>">` (la couverture garde `.cover` en héros plein écran). Le styles d'une section vit dans sa feuille `css/pages/<section>.css`, ses interactions dans `js/modules/<section>.js` — tout est chargé une seule fois par `index.html`.

## État d'avancement

Les 9 sections du portfolio sont terminées, validées, et sans aucun placeholder (Couverture — avec photo réelle, Qui je suis, Une campagne de contenu de A à Z, Carrousels, Réalisations visuelles, Transformer une expertise en contenu, La constance n'est pas un hasard, Ce que je peux apporter, Contact — avec coordonnées réelles). **Le 2026-07-23, le portfolio est passé d'une architecture multi-pages (9 pages reliées par des liens) à une architecture one-page** : les 9 pages sont devenues 9 sections d'`index.html`, parcourues au défilement, sans changement de contenu, de visuels, d'ordre ni de design. Historique : 11 → 10 pages le 2026-07-16, 10 → 9 le 2026-07-19 ; mise en scène de la Page/section 3 repensée le 2026-07-21 (démontre une transformation, d'un brief minimal à une campagne complète) ; consultation des publications en modal ajoutée le 2026-07-22.

Prochaine étape : **la phase design avec Claude Design**. Voir [PORTFOLIO_STRUCTURE.md](PORTFOLIO_STRUCTURE.md) pour le suivi section par section, [CONTENT_GUIDE.md](CONTENT_GUIDE.md) pour le détail éditorial, [DESIGN_RULES.md](DESIGN_RULES.md) pour les patterns visuels, et [PROJECT.md](PROJECT.md) pour le contexte complet — sa section « Reprise de session » en tête résume l'état actuel, les décisions validées et la prochaine étape en détail.

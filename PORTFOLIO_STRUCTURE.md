# PORTFOLIO_STRUCTURE.md — Structure et feuille de route

Ce fichier suit la **progression du projet** : la liste des pages, leur objectif, et leur statut d'avancement. Il est mis à jour à chaque page développée.

**Principe directeur : chaque page doit apporter une valeur distincte, sans répétition avec les autres.**

> Note : « Message clé » et « Contenus prévus » sont ici des **descriptions d'intention** (ce que la page doit accomplir, quels types d'éléments y figureront) — pas du texte final. Le copywriting réel (titres, sous-titres, textes) se fait page par page dans [CONTENT_GUIDE.md](CONTENT_GUIDE.md), au moment de construire chaque page, jamais à l'avance.

Statuts possibles : **À faire** · **En cours** · **En attente de validation** · **Terminée / Validée**

> **Architecture one-page depuis le 2026-07-23.** Les 9 « pages » ci-dessous sont désormais **9 sections d'`index.html`**, parcourues au défilement (voir README.md et PROJECT.md). Chaque entrée « *Fichier : …* » ci-dessous décrit la section d'origine ; les fichiers `pages/*.html` n'existent plus (fusionnés dans `index.html`). Les ancres internes correspondantes sont : `#couverture`, `#qui-je-suis`, `#campagne`, `#carrousels`, `#realisations`, `#methode`, `#constance`, `#apport`, `#contact`. Le contenu, l'ordre, les visuels et le design sont **inchangés** — seule l'architecture a évolué.

---

## Page 1 — Couverture
*Fichier : `index.html`*

- **Objectif :** Créer une excellente première impression et présenter immédiatement mon positionnement professionnel.
- **Message clé :** Identité professionnelle claire et positionnement mémorable dès les premières secondes.
- **Contenus prévus :** nom/titre professionnel ✅, accroche de positionnement ✅, photo professionnelle ✅ (intégrée le 2026-07-20).
- **Statut :** Terminée / Validée ✅ — plus aucun placeholder sur le portfolio

## Page 2 — Qui je suis
*Fichier : `pages/qui-je-suis.html`*

- **Objectif :** Montrer le parcours, la manière de travailler et la vision qui expliquent la capacité à transformer une expertise en contenus clairs, crédibles et engageants — créer de la confiance et donner envie de découvrir les réalisations.
- **Message clé :** Une expérience réelle, une réflexion avant l'exécution, une maîtrise stratégie + exécution — qui explique naturellement les preuves à venir.
- **Contenus prévus :** texte de présentation (approche) ✅, 3 « Fondations » scannables ✅, grande citation (philosophie de travail) ✅. Aucune photo, aucune infographie sur cette page.
- **Statut :** Terminée / Validée ✅

## Page 3 — Une campagne de contenu de A à Z
*Fichier : `pages/campagne-de-contenu-a-z.html`* — **mise en scène entièrement repensée le 2026-07-21** (détail complet dans CONTENT_GUIDE.md).

- **Objectif :** Démontrer une manière de réfléchir — comment un brief minimal (un titre, deux photos, une date, une heure) devient une campagne complète — plutôt que montrer une galerie de publications déjà finies.
- **Message clé :** Le sujet n'est plus les 5 publications elles-mêmes, mais le raisonnement qui les a fait naître ; les publications ne sont que les preuves visuelles de 4 décisions.
- **Contenus prévus :** 3 chapitres ✅ — (1) le brief réel (titre du webinaire, les 2 vraies photos d'intervenants, date, heure), présenté comme une carte d'événement centrée et volontairement pauvre ; (2) 4 blocs éditoriaux alternés gauche/droite, chacun une décision + sa preuve (5 vraies publications réparties sur les 4 blocs, une paire dans le second) ; (3) le résultat obtenu (37 inscriptions, 5 clientes), sobre, jamais présenté comme une promesse. **Consultation enrichie le 2026-07-22 :** chaque publication montre son visuel + un court extrait + un bouton « Lire la publication » qui ouvre le texte intégral (image en grand + titre + texte complet) dans un modal réutilisant le composant lightbox de la Page 5.
- **Statut :** Terminée / Validée ✅ — nouvelle mise en scène validée par l'utilisateur après une itération (une première version jugée trop proche d'une succession de textes et de miniatures a été entièrement reprise), copywriting des 4 blocs retouché une seconde fois le même jour pour rester généralisable (démontrer un processus, pas seulement la stratégie propre à ce webinaire). **Enrichissement du 2026-07-22 :** visuels repointés vers les vraies images `.jpg` fournies (les anciens `.png` avaient été supprimés → visuels cassés, corrigés à cette occasion) et ajout de la consultation en modal (voir CONTENT_GUIDE.md). Incohérence de date tranchée le même jour (les `.txt` disaient « 26 février », coquille corrigée en « 26 mars » pour concorder avec les visuels et la carte de brief). Reste un point mineur en attente : les marqueurs `[Lien]` visibles dans le texte des publications (voir « Bugs connus » de PROJECT.md).

## Page 4 — Carrousels
*Fichier : `pages/carrousels.html`*

- **Objectif :** Montrer ma capacité à vulgariser des sujets complexes grâce à des carrousels pédagogiques réels — la même compétence de clarification déjà démontrée en Page 3, appliquée à un format différent.
- **Message clé :** Capacité à rendre un sujet complexe simple, clair et engageant visuellement, sur un format 100 % réel.
- **Contenus prévus :** 4 carrousels réels ✅ (`assets/images/carousels/`, 4 slides chacun + PDF original), légende de contexte par carrousel ✅. Navigation par slide via un mini-carousel à flèches ✅ (refonte du 2026-07-20 — scrollbar horizontale supprimée, swipe tactile conservé, `js/modules/carrousels.js`).
- **Statut :** Terminée / Validée ✅ — bug de scintillement du curseur corrigé le 2026-07-20 (détail dans PROJECT.md) ; zone de clic des cartes à reconfirmer manuellement dans un vrai navigateur lors de la revue finale (par prudence, déjà revérifiée automatiquement 9/9)

## Page 5 — Réalisations visuelles
*Fichier : `pages/realisations-visuelles.html`*

- **Objectif :** Montrer la maîtrise du design et de la communication visuelle à travers une sélection de créatives réelles — distincte de la stratégie (Page 3) et de la vulgarisation pédagogique (Page 4).
- **Message clé :** Sens du design et de la communication visuelle appliqué de façon professionnelle, sur des sujets variés.
- **Contenus prévus :** 12 créatives réelles ✅ (`assets/images/creatives/`), une légende par créative ✅.
- **Statut :** Terminée / Validée ✅

## Page 6 — Transformer une expertise en contenu
*Fichier : `pages/transformer-expertise-en-contenu.html`*

- **Objectif :** Expliquer visuellement la méthode qui transforme une expertise en contenu — le processus qui sous-tend les preuves déjà montrées (Pages 3 à 5) — **avec l'IA intégrée comme information secondaire à chaque étape concernée** (fusion de l'ancienne Page 7 le 2026-07-19).
- **Message clé :** Une méthode de travail claire, structurée et reproductible. L'IA y assiste à plusieurs étapes ; à aucune, elle ne décide à la place de l'auteur — le message « copilote, jamais pilote » est porté par la structure (l'étape « Expertise » ne mentionne délibérément aucun rôle de l'IA), pas par une page dédiée.
- **Contenus prévus :** schéma en 7 étapes cycliques ✅, reconstruit en HTML/CSS à partir d'une infographie réelle fournie par l'utilisateur (`assets/images/infographics/`). Chaque étape (sauf « Expertise ») porte désormais une phrase combinant le geste humain et le rôle de l'IA.
- **Statut :** Terminée / Validée ✅ — copywriting révisé le 2026-07-19 (fusion de l'IA), aucun changement de structure/diagramme.

## Page 7 — La constance n'est pas un hasard
*Fichier : `pages/constance.html`* — anciennement « Page 8 — Mon environnement de travail » (`environnement-de-travail.html`), renommée et repositionnée le 2026-07-19.

- **Objectif :** Répondre à la question de confiance implicite du lecteur — pourquoi la qualité de la production ne varie-t-elle jamais ? — en s'appuyant sur le système de travail comme preuve, pas comme sujet.
- **Message clé :** La constance n'est pas un hasard. Une méthode (Page 6) ne suffit pas à elle seule à garantir un résultat constant ; ce qui l'assure, ce sont 5 preuves systémiques.
- **Contenus prévus :** 5 preuves ✅ (Organisation, Documentation, Automatisation, Contrôle qualité, Standardisation — le pilier « IA copilote » a été retiré le 2026-07-19, son contenu vivant désormais entièrement en Page 6), reconstruites en HTML/CSS (ligne continue reliant 5 modules, pipeline linéaire connecté conservé). Hiérarchie inversée par rapport à l'ancienne version : l'affirmation d'ouverture répond directement à la question de confiance, les 5 preuves ne sont plus le sujet principal mais l'appui de cette affirmation. Voix en « je », jamais « vous » (réservé à la Page 8). Aucun logiciel nommé.
- **Statut :** Terminée / Validée ✅ — copywriting et hiérarchie entièrement révisés le 2026-07-19, structure visuelle (pipeline) conservée avec un badge en moins.

## Page 8 — Ce que je peux apporter
*Fichier : `pages/ce-que-je-peux-apporter.html`* — anciennement « Page 9 », renumérotée le 2026-07-19.

- **Objectif :** Traduire ce que le lecteur retire concrètement à travailler avec l'auteur — pas une liste de compétences, pas une page de services, pas un CV, et depuis le 2026-07-19, pas non plus une redite de la méthode (Page 6) ou de la constance (Page 7).
- **Message clé :** Chaque bénéfice est un gain concret pour le lecteur (temps, visibilité, compréhension, argent, simplicité), jamais une promesse marketing abstraite ni un résultat commercial garanti.
- **Contenus prévus :** 5 bénéfices concrets ✅ — entièrement réécrits le 2026-07-19 après une phase d'architecture éditoriale dédiée (les 3 premiers chevauchaient les nouvelles Pages 6-7, retirés et remplacés — détail complet dans CONTENT_GUIDE.md).
- **Éléments visuels prévus :** liste éditoriale à grands numéros typographiques discrets ✅ — distinct du cercle (Page 6), du pipeline (Page 7), de la galerie (Page 5) et de la séquence (Page 3).
- **Statut :** Terminée / Validée ✅ (copywriting entièrement révisé et validé le 2026-07-19, sans changement de structure/design)

## Page 9 — Contact
*Fichier : `pages/contact.html`* — anciennement « Page 10 », renumérotée le 2026-07-19.

- **Objectif :** Donner tous les moyens de me contacter rapidement, une fois le portfolio parcouru — dernière étape, pas une nouvelle preuve.
- **Message clé :** Prise de contact simple, rapide, sans friction.
- **Contenus prévus :** 3 méthodes de contact ✅ (courriel, WhatsApp, réservation d'appel) sous forme de cartes cliquables. Pas de LinkedIn (exclu volontairement) ; le CV n'est plus une carte principale, redeviendra au besoin un lien secondaire discret.
- **Statut :** Terminée / Validée ✅ — coordonnées réelles intégrées le 2026-07-20 (courriel, WhatsApp, Calendly), plus aucun placeholder

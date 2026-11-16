# Rapport d’audit

Projet : `creative-keys-maquette` · 16/11/2026 15:07:20 · 14 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /packaging,/print,/logos-sites,/contact,/404

## Résumé

- Statut : **96 échec(s)**
- Passe : `20261116-135317-rapide-cible` · version ?v=1
- Échecs : **96**
- À regarder : **51**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (30), films d’ouverture (8), films de transition (8), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (8), liens vers la page en cours (4), changements de hauteur (4), parcours du projet (1), tient dans l’écran (2), films des épinglages (1), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (6), souris immobile (4), vitesse (4), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur /, /logos-sites |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `logos-sites.html` — fichier introuvable : /assets/partage/logos-sites-fr.jpg
- **image de partage** — `packaging.html` — fichier introuvable : /assets/partage/packaging-fr.jpg
- **image de partage** — `print.html` — fichier introuvable : /assets/partage/print-fr.jpg

### texte coupé (11)

- **texte coupé** — `/404` — div.conteneur.ouv-404-texte > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Rupture » — coupé par section#debut > div.conteneur.ouv-404-texte > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) « Rupture » _(1366×768 normal, 844×390 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/404` — div.conteneur.ouv-404-texte > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) > em.mot.ouv-ligne « de stock » — coupé par section#debut > div.conteneur.ouv-404-texte > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) « de stock » _(1366×768 normal, 844×390 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/contact` — div.ouv-contact-texte > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Parlons de » — coupé par div.conteneur.ouv-contact-grille > div.ouv-contact-texte > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) « Parlons de » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/contact` — div.ouv-contact-texte > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) > em.mot.ouv-ligne « votre marque » — coupé par div.conteneur.ouv-contact-grille > div.ouv-contact-texte > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) « votre marque » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/logos-sites` — div.ouv-depart-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « À vos marques… » — coupé par div.conteneur.ouv-depart-grille > div.ouv-depart-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) « À vos marques… » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/logos-sites` — div.ouv-depart-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) > span.ouv-ligne « prêts ? » — coupé par div.conteneur.ouv-depart-grille > div.ouv-depart-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) « prêts ? » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/logos-sites` — div.ouv-depart-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(3) > em.mot.ouv-ligne « Partez ! » — coupé par div.conteneur.ouv-depart-grille > div.ouv-depart-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(3) « Partez ! » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/packaging` — div:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Vos emballages » — coupé par div.conteneur.ouv-pack-tete:nth-of-type(1) > div:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) « Vos emballages » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/packaging` — div:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) > em.mot.ouv-ligne « m'emballent » — coupé par div.conteneur.ouv-pack-tete:nth-of-type(1) > div:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) « m'emballent » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/print` — div.ouv-print-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Vos marques » — coupé par div.conteneur.ouv-print-grille > div.ouv-print-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) « Vos marques » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/print` — div.ouv-print-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) > em.mot.ouv-ligne « m'impressionnent » — coupé par div.conteneur.ouv-print-grille > div.ouv-print-texte:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(2) « m'impressionnent » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-404-texte > p.ouv-info:nth-of-type(4) « CREATIVE KEYS 24 packagings toujours en rayon » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > div.ouv-contact-texte > p.ouv-info:nth-of-type(4) « 06 75 01 45 60 · Paris et périphérie » _(844×390 normal)_

### contraste sur image (1)

- **contraste sur image** — `/404` — section#debut > div.conteneur.ouv-404-texte > p.ouv-actions:nth-of-type(3) > a.bouton.bouton--contour:nth-of-type(2) « Voir les packagings » — 2.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### texte sous 12 px (64)

- **texte sous 12 px** — `/contact` — div.conteneur.devis-grille > form.devis-form > ol.devis-progres > li.actif:nth-of-type(1) « 1 Votre projet » — 0.0 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/contact` — div.conteneur.devis-grille > form.devis-form > ol.devis-progres > li:nth-of-type(2) « 2 Les détails » — 0.0 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/contact` — div.conteneur.devis-grille > form.devis-form > ol.devis-progres > li:nth-of-type(3) « 3 Vos coordonnées » — 0.0 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-erte > p.etiquette > strong « MAISON ERTÉ » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-dayfruits > p.etiquette > strong « DAY FRUITS » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-najat > p.etiquette > strong « NAJAT BARY » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-pauline > p.etiquette > strong « LA VITRINE DE PAULINE » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-togolais > p.etiquette > strong « ENOUGAN BIO » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-agafay > p.etiquette > strong « LE ROYAUME AGAFAY CAMP » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-celina > p.etiquette > strong « CELINA PARIS » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-emma > p.etiquette > strong « BEAUTY EMMA » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-barbershop > p.etiquette > strong « BARBER SHOP » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-babyboss > p.etiquette > strong « BABY BOSS » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-serenity > p.etiquette > strong « SÉRÉNITY VILLAGE » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-vache > p.etiquette > strong « LA VACHE AUX PIEDS NUS » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-transeurope > p.etiquette > strong « TRANS EUROPE 45 » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/logos-sites` — article#r-action > p.etiquette > strong « ACTION DANS LE MONDE » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-chocolat60 > p.etiquette > strong « CHOCOLAT 60 % » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-larzac > p.etiquette > strong « BIÈRES DU LARZAC » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-erte-sachets > p.etiquette > strong « MAISON ERTÉ » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-diosa > p.etiquette > strong « DIOSA » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-dayfruits > p.etiquette > strong « DAY FRUITS » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-brownies > p.etiquette > strong « MAISON ERTÉ » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-macaron > p.etiquette > strong « TILIZ » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-tortillas > p.etiquette > strong « KASH » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-confitures > p.etiquette > strong « CONFITURES » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-togolais > p.etiquette > strong « TOGOLAIS » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-saumon > p.etiquette > strong « SAUMON FUMÉ » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-cookie > p.etiquette > strong « TILIZ » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-versailles > p.etiquette > strong « CHOCOLATS DE VERSAILLES » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-haricots > p.etiquette > strong « MON POTAGER FRAIS » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-cartilamine > p.etiquette > strong « CARTILAMINE PHYTO » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-miel > p.etiquette > strong « MIEL DE FRANCE » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-coffret-fruits > p.etiquette > strong « RAND FRUITS » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-tablettes > p.etiquette > strong « CHOCOLAT » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-huile > p.etiquette > strong « HUILE D’OLIVE » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-veinavital > p.etiquette > strong « VEINAVITAL » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-protein > p.etiquette > strong « PROTÉINE ET MACA » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-maisoncafe > p.etiquette > strong « MAISON DU CAFÉ » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/packaging` — article#r-ourson > p.etiquette > strong « OURSON ET MI-CHO-KO » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- … et 24 autres (rapport.json)

### image non chargée (4)

- **image non chargée** — `/logos-sites` — main#contenu > div.visionneuse > figure.visionneuse-figure > img _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/logos-sites` — main#contenu > div.visionneuse:nth-of-type(2) > figure.visionneuse-figure > img _(1366×768 normal, 844×390 normal)_
- **image non chargée** — `/packaging` — main#contenu > div.visionneuse > figure.visionneuse-figure > img _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/print` — main#contenu > div.visionneuse > figure.visionneuse-figure > img _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/print` — div.conteneur > div.tete-section.tete-section--ligne:nth-of-type(1) > h2.titre > span.titre-num « 03 » — 2.68:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/print` — div.conteneur > div.tete-section.tete-section--ligne:nth-of-type(1) > h2.titre > span.titre-num « 03 » — 2.68:1 (minimum 3:1) _(1366×768 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/print` — #plv > .conteneur > .tete-section.tete-section--ligne > h2 > .titre-num — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### transition : élément visible, caché puis réaffiché (flash) (5)

- **transition : élément visible, caché puis réaffiché (flash)** — `/contact → /packaging` — div.mur-rang > span.mur-facing > img _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/logos-sites → /packaging` — div.mur-rang > span.mur-facing > img _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/packaging → /print` — div.conteneur.ouv-print-grille > div.kakemono > figure.media.kakemono-arriere _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/packaging → /print` — figure.media.kakemono-arriere > picture > img « Affiches L’Or « Goûtez au sublime » et « » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/print → /packaging` — div.mur-rang > span.mur-facing > img _(1366×768 film, 390×844 film)_

### visionneuse (1)

- **visionneuse** — `/packaging` — le lien #r-larzac n’ouvre pas la réalisation _(390×844, 1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : galerie horizontale générique (point 6) (2)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"
- **grille : galerie horizontale générique (point 6)** — `/logos-sites` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/packaging` — 87 × 58 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (39)

- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.ouv-404-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — div.conteneur.ouv-404-texte > p.ouv-info:nth-of-type(4) > span.etiquette > strong « CREATIVE KEYS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > div.ouv-contact-texte > p.surtitre:nth-of-type(1) « CONTACT ET DEVIS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > figure.media.ouv-contact-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — aside.devis-recap > div.recap-ticket:nth-of-type(1) > p.etiquette:nth-of-type(2) > strong « CREATIVE KEYS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.devis-grille > aside.devis-recap > div.direct:nth-of-type(2) > p.surtitre:nth-of-type(1) « SANS FORMULAIRE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — section#debut > div.conteneur.ouv-depart-grille > div.ouv-depart-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LOGOS & SITES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-pauline > p.etiquette > strong « LA VITRINE DE PAULINE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-agafay > p.etiquette > strong « LE ROYAUME AGAFAY CAMP » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-celina > p.etiquette > strong « CELINA PARIS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-serenity > p.etiquette > strong « SÉRÉNITY VILLAGE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-vache > p.etiquette > strong « LA VACHE AUX PIEDS NUS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-transeurope > p.etiquette > strong « TRANS EUROPE 45 » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-action > p.etiquette > strong « ACTION DANS LE MONDE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-longuet > p.etiquette > strong « MAISON LONGUET » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-estheticenter > p.etiquette > strong « ESTHÉTICENTER » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-gottoshare > p.etiquette > strong « GOT TO SHARE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — section#debut > div.conteneur.ouv-pack-tete:nth-of-type(1) > div:nth-of-type(1) > p.surtitre « PACKAGING · 24 RÉALISATIONS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — article#r-chocolat60 > p.etiquette > strong « CHOCOLAT 60 % » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — article#r-larzac > p.etiquette > strong « BIÈRES DU LARZAC » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — article#r-versailles > p.etiquette > strong « CHOCOLATS DE VERSAILLES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — article#r-haricots > p.etiquette > strong « MON POTAGER FRAIS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — article#r-cartilamine > p.etiquette > strong « CARTILAMINE PHYTO » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — article#r-miel > p.etiquette > strong « MIEL DE FRANCE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — article#r-huile > p.etiquette > strong « HUILE D’OLIVE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- … et 14 autres (rapport.json)

### section sans visuel (2)

- **section sans visuel** — `/contact` — section#devis « 1 Votre projet 2 Les détails 3 Vos coordonnées Éta » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/packaging` — section#debut « PACKAGING · 24 RÉALISATIONS Vos emballages m'embal » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### typographie française (1)

- **typographie française** — `/contact` — div.conteneur.devis-grille > aside.devis-recap > div.direct:nth-of-type(2) > p.direct-reseaux:nth-of-type(5) « Ses réalisations au fil de l'eau : Instagram (nouv » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### identifiant en double (1)

- **identifiant en double** — `/logos-sites` — article#r-erte « MAISON ERTÉ Biscuitiers depuis 1888 + » — id="r-erte" _(390×844 normal, 1366×768 normal, 390×844 sansJs)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 54 min de travail pour 75 min de budget, 8 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /contact, /logos-sites, /packaging, /print.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /contact (1366×768) : 2566 ms depuis le premier octet
- Ouverture /logos-sites (1366×768) : 2790 ms depuis le premier octet
- Ouverture /packaging (1366×768) : 2535 ms depuis le premier octet
- Ouverture /print (1366×768) : 2621 ms depuis le premier octet
- Ouverture /contact (390×844) : 2596 ms depuis le premier octet
- Ouverture /logos-sites (390×844) : 2697 ms depuis le premier octet
- Ouverture /packaging (390×844) : 2638 ms depuis le premier octet
- Ouverture /print (390×844) : 2608 ms depuis le premier octet
- bords de l’écran /packaging 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 342 images d’intro, 5 de voile et 87 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /packaging : aucune section épinglée ou plein écran.
- Tient dans l'écran /print : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 112, tâche la plus longue 0 ms
- Fluidité /logos-sites 1366×768 (molette) : 0 % d'images lentes sur 340, tâche la plus longue 0 ms
- Fluidité /packaging 1366×768 (molette) : 0 % d'images lentes sur 283, tâche la plus longue 0 ms
- Fluidité /print 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /logos-sites 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /packaging 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /print 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Vitesse /contact : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /logos-sites : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /packaging : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /print : 0.52 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films,parcours
```

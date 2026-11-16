# Rapport d’audit

Projet : `creative-keys-maquette` · 16/11/2026 15:30:14 · 20 min · 6 page(s) · audit standard

## Résumé

- Statut : **53 échec(s)**
- Passe : `20261116-141018-standard` · version ?v=1
- Échecs : **53**
- À regarder : **64**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (10), films des épinglages (2), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (6), souris immobile (5), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-135317-rapide-cible | rapide | /packaging,/print,/logos-sites,/contact,/404 | toutes | 96 | 51 | 1 | échecs |
| **20261116-141018-standard** (celle-ci) | standard | toutes | toutes | 53 | 64 | 1 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-grille.conteneur:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « 30 ans de packaging · Paris et périphérie » _(320×568 normal, 320×568 sansJs)_

### texte sous 12 px (5)

- **texte sous 12 px** — `/` — section#debut > button.rayons-pause > span « ❚❚ » — 11.2 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **texte sous 12 px** — `/print` — div.conteneur > div.tete-section.tete-section--ligne:nth-of-type(1) > h2.titre > span.titre-num « 01 » — 11.8 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/print` — div.conteneur > div.tete-section.tete-section--ligne:nth-of-type(1) > h2.titre > span.titre-num « 02 » — 11.8 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/print` — div.conteneur > div.tete-section.tete-section--ligne:nth-of-type(1) > h2.titre > span.titre-num « 03 » — 11.8 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/print` — div.conteneur > div.tete-section.tete-section--ligne:nth-of-type(1) > h2.titre > span.titre-num « 04 » — 11.8 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Habillez » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « votre marque. » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « votre marque. » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(3) > em.hero-ligne.mot « Démarquez-vous. » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > div.ouv-contact-texte > p.surtitre:nth-of-type(1) « CONTACT ET DEVIS » — avec div.ouv-contact-texte > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Parlons de » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/packaging` — section#debut > div.conteneur.ouv-pack-tete:nth-of-type(1) > div:nth-of-type(1) > p.surtitre « PACKAGING · 24 RÉALISATIONS » — avec div:nth-of-type(1) > h1.titre.titre--page > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Vos emballages » _(1920×1080 normal)_

### image non chargée (6)

- **image non chargée** — `/` — div.etapes-cadre > figure.media.etapes-media:nth-of-type(2) > picture > img « Gamme de sachets Maison Erté » — http://127.0.0.1:32831/assets/images/pk-erte-sachets-480.webp _(320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **image non chargée** — `/` — div.etapes-cadre > figure.media.etapes-media:nth-of-type(3) > picture > img « Mise en ambiance du Cookie Dough Tiliz » — http://127.0.0.1:32831/assets/images/pk-cookie-480.webp _(320×568 normal, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.etapes-cadre > figure.media.etapes-media:nth-of-type(4) > picture > img « Gamme Togolais déclinée en quatre parfums » — http://127.0.0.1:32831/assets/images/pk-togolais-480.webp _(320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **image non chargée** — `/` — div.etapes-cadre > figure.media.etapes-media:nth-of-type(1) > picture > img « Logo Maison Erté » — http://127.0.0.1:32831/assets/images/lg-erte-480.webp _(390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.etapes-cadre > figure.media.etapes-media:nth-of-type(5) > picture > img « Présentoir de comptoir Veinavital » — http://127.0.0.1:32831/assets/images/pk-veinavital-480.webp _(390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.etapes-cadre > figure.media.etapes-media:nth-of-type(6) > picture > img « Site de la biscuiterie Erté » — http://127.0.0.1:32831/assets/images/wb-erte-480.webp _(390×844 sansJs, 320×568 sansJs)_

### visionneuse (1)

- **visionneuse** — `/packaging` — le lien #r-larzac n’ouvre pas la réalisation _(390×844, 1366×768)_

### épinglage : image isolée différente (flash) (32)

- **épinglage : image isolée différente (flash)** — `/` — à 250 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 227 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 267 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 283 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 302 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 314 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 398 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 881 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 903 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1222 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1322 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1341 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1972 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2014 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2039 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2066 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2115 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2139 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2903 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2932 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2963 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3315 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3343 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3378 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3401 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3426 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3501 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3520 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3542 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3645 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 3697 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/logos-sites` — à 522 ms (films/epinglage-logos-sites-1.png) _(1366×768)_

### épinglage : changement brusque (4)

- **épinglage : changement brusque** — `/` — à 471 ms (différence 21 %) (films/epinglage-1.png) _(1366×768)_
- **épinglage : changement brusque** — `/` — à 3624 ms (différence 31 %) (films/epinglage-1.png) _(1366×768)_
- **épinglage : changement brusque** — `/` — à 3665 ms (différence 21 %) (films/epinglage-1.png) _(1366×768)_
- **épinglage : changement brusque** — `/` — à 3871 ms (différence 21 %) (films/epinglage-1.png) _(1366×768)_

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

### section sans visuel (5)

- **section sans visuel** — `/` — section#etapes « CE QUE THIERRY PREND EN CHARGE Du logo au linéaire » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Ce qu'en disent ses clients « C’est » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#devis « 1 2 3 Étape 1 sur 3 Qu'avez-vous à habiller ? 01 U » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#devis « 1 Votre projet 2 Les détails 3 Vos coordonnées Éta » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **section sans visuel** — `/packaging` — section#debut « PACKAGING · 24 RÉALISATIONS Vos emballages m'embal » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (45)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#studio > div.conteneur.studio-grille > figure.media.studio-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#r-larzac > p.etiquette > strong « BIÈRES DU LARZAC » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#metiers > div.conteneur > div.tete-section > p.surtitre « QUATRE MÉTIERS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#etapes > div.conteneur.etapes-grille > div.etapes-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « CE QUE THIERRY PREND EN CHARGE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#avis > div.conteneur > div.tete-section > p.surtitre « ILS EN PARLENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-grille.conteneur:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.surtitre.hero-surtitre:nth-of-type(1) « CREATIVE KEYS · GRAPHISTE PACKAGING » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.ouv-404-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — div.conteneur.ouv-404-texte > p.ouv-info:nth-of-type(4) > span.etiquette > strong « CREATIVE KEYS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > div.ouv-contact-texte > p.surtitre:nth-of-type(1) « CONTACT ET DEVIS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > figure.media.ouv-contact-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — aside.devis-recap > div.recap-ticket:nth-of-type(1) > p.etiquette:nth-of-type(2) > strong « CREATIVE KEYS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.devis-grille > aside.devis-recap > div.direct:nth-of-type(2) > p.surtitre:nth-of-type(1) « SANS FORMULAIRE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — section#debut > div.conteneur.ouv-depart-grille > div.ouv-depart-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LOGOS & SITES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-pauline > p.etiquette > strong « LA VITRINE DE PAULINE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-agafay > p.etiquette > strong « LE ROYAUME AGAFAY CAMP » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-celina > p.etiquette > strong « CELINA PARIS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-serenity > p.etiquette > strong « SÉRÉNITY VILLAGE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-vache > p.etiquette > strong « LA VACHE AUX PIEDS NUS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-transeurope > p.etiquette > strong « TRANS EUROPE 45 » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-action > p.etiquette > strong « ACTION DANS LE MONDE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-longuet > p.etiquette > strong « MAISON LONGUET » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-estheticenter > p.etiquette > strong « ESTHÉTICENTER » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/logos-sites` — article#r-gottoshare > p.etiquette > strong « GOT TO SHARE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — section#debut > div.conteneur.ouv-pack-tete:nth-of-type(1) > div:nth-of-type(1) > p.surtitre « PACKAGING · 24 RÉALISATIONS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/packaging` — article#r-chocolat60 > p.etiquette > strong « CHOCOLAT 60 % » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 20 autres (rapport.json)

### typographie française (5)

- **typographie française** — `/` — ul.avis-grille.fx-fini > li.avis-carte:nth-of-type(1) > blockquote > p « « C’est un réel plaisir de travailler avec lui. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — ul.avis-grille.fx-fini > li.avis-carte:nth-of-type(2) > blockquote > p « « Un excellent travail de qualité, livré dans les  » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — ul.avis-grille.fx-fini > li.avis-carte:nth-of-type(3) > blockquote > p « « Particulièrement pour les commerçants qui cherch » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — ul.avis-grille.fx-fini > li.avis-carte:nth-of-type(4) > blockquote > p « « Au top, belle imagination et patience… rapidité  » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/contact` — div.conteneur.devis-grille > aside.devis-recap > div.direct:nth-of-type(2) > p.direct-reseaux:nth-of-type(5) « Ses réalisations au fil de l'eau : Instagram (nouv » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### identifiant en double (1)

- **identifiant en double** — `/logos-sites` — article#r-erte « MAISON ERTÉ Biscuitiers depuis 1888 + » — id="r-erte" _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_

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
- Journal v1 : 5 étape(s) notée(s), 77 min de travail pour 115 min de budget, 8 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /logos-sites, /packaging, /print.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2776 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2633 ms depuis le premier octet
- Ouverture /logos-sites (1366×768) : 2807 ms depuis le premier octet
- film de l'ouverture /logos-sites 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /packaging (1366×768) : 2671 ms depuis le premier octet
- Ouverture /print (1366×768) : 2655 ms depuis le premier octet
- Ouverture / (390×844) : 2716 ms depuis le premier octet
- Ouverture /contact (390×844) : 2558 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /logos-sites (390×844) : 2698 ms depuis le premier octet
- Ouverture /packaging (390×844) : 2601 ms depuis le premier octet
- Ouverture /print (390×844) : 2607 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 462 images d’intro, 16 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /packaging : aucune section épinglée ou plein écran.
- Tient dans l'écran /print : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 480, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 127, tâche la plus longue 0 ms
- Fluidité /logos-sites 1366×768 (molette) : 1 % d'images lentes sur 347, tâche la plus longue 0 ms
- Fluidité /packaging 1366×768 (molette) : 0 % d'images lentes sur 275, tâche la plus longue 0 ms
- Fluidité /print 1366×768 (molette) : 0 % d'images lentes sur 273, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1415, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /logos-sites 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /packaging 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /print 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Vitesse / : 0.65 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /logos-sites : 0.52 s de calcul au chargement (téléphone ralenti).
- Vitesse /packaging : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /print : 0.56 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/contact,/packaging,/print,/logos-sites --seulement=fichiers,mesures,parcours,ecran
```

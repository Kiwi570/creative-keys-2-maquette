# Rapport d’audit

Projet : `creative-keys-2-maquette` · 16/11/2026 17:38:24 · 24 min · 6 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-161437-complet` · version ?v=1
- Échecs : **0**
- À regarder : **13**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (16), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (7), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-135317-rapide-cible | rapide | /packaging,/print,/logos-sites,/contact,/404 | toutes | 96 | 51 | 1 | échecs |
| 20261116-141018-standard | standard | toutes | toutes | 53 | 64 | 1 | échecs |
| 20261116-143344-standard | standard | toutes | toutes | 24 | 12 | 1 | échecs |
| 20261116-145727-standard | standard | toutes | toutes | 4 | 12 | 1 | échecs |
| 20261116-151927-standard-cible-partiel | standard | /,/logos-sites | fichiers, mesures, ecran | 4 | 2 | 0 | échecs |
| 20261116-152200-standard-cible-partiel | standard | / | fichiers, mesures, ecran | 5 | 2 | 0 | échecs |
| 20261116-152405-standard | standard | toutes | toutes | 4 | 12 | 1 | échecs |
| 20261116-154503-standard-cible | standard | / | toutes | 0 | 7 | 1 | complet |
| 20261116-155058-complet-partiel | complet | toutes | mesures, ecran | 1 | 5 | 0 | échecs |
| 20261116-155829-complet-cible-partiel | complet | / | fichiers, mesures | 1 | 2 | 0 | échecs |
| 20261116-155953-complet-cible-partiel | complet | / | fichiers, mesures | 0 | 2 | 0 | complet |
| 20261116-161417-standard-partiel | standard | toutes | fichiers | 0 | 1 | 0 | complet |
| **20261116-161437-complet** (celle-ci) | complet | toutes | toutes | 0 | 13 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### numéro de version (1)

- **numéro de version** — ?v=1 est celui de la dernière livraison : à changer avant de livrer

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (4)

- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Ce qu'en disent ses clients « C’est » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#devis « 1 2 3 Étape 1 sur 3 Qu'avez-vous à habiller ? 01 U » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/contact` — section#devis « 1 Votre projet 2 Les détails 3 Vos coordonnées Éta » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 768×1024 normal, 1024×768 normal, 1280×720 normal, 1000×560 normal, 1366×768 normal, +24)_
- **section sans visuel** — `/packaging` — section#debut « PACKAGING · 24 RÉALISATIONS Vos emballages m'embal » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 320×568 sansJs, 320×568 sansWebgl)_

### typographie française (1)

- **typographie française** — `/contact` — div.conteneur.devis-grille > aside.devis-recap > div.direct:nth-of-type(2) > p.direct-reseaux:nth-of-type(5) « Ses réalisations au fil de l'eau : Instagram (nouv » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/` — div.piste.gondole-piste — gondole : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/logos-sites` — div.piste.gondole-piste — gondole : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

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
- Journal v1 : 7 étape(s) notée(s), 179 min de travail pour 145 min de budget, 8 min d’attente de l’utilisateur.
- Journal : « audit, regard neuf et corrections » 96 min pour 25 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2799 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2568 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /logos-sites (1366×768) : 2743 ms depuis le premier octet
- Ouverture /packaging (1366×768) : 2622 ms depuis le premier octet
- Ouverture /print (1366×768) : 2647 ms depuis le premier octet
- Ouverture / (390×844) : 2736 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2574 ms depuis le premier octet
- Ouverture /logos-sites (390×844) : 2739 ms depuis le premier octet
- Ouverture /packaging (390×844) : 2605 ms depuis le premier octet
- Ouverture /print (390×844) : 2631 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 453 images d’intro, 18 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /packaging : aucune section épinglée ou plein écran.
- Tient dans l'écran /print : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 395, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 123, tâche la plus longue 0 ms
- Fluidité /logos-sites 1366×768 (molette) : 0 % d'images lentes sur 331, tâche la plus longue 0 ms
- Fluidité /packaging 1366×768 (molette) : 0 % d'images lentes sur 275, tâche la plus longue 0 ms
- Fluidité /print 1366×768 (molette) : 0 % d'images lentes sur 280, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1418, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /logos-sites 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Fluidité /packaging 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /print 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Vitesse / : 0.81 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /logos-sites : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /packaging : 0.52 s de calcul au chargement (téléphone ralenti).
- Vitesse /print : 0.48 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`

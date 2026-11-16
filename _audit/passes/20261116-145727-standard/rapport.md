# Rapport d’audit

Projet : `creative-keys-maquette` · 16/11/2026 16:17:11 · 20 min · 6 page(s) · audit standard

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261116-145727-standard` · version ?v=1
- Échecs : **4**
- À regarder : **12**
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
| 20261116-141018-standard | standard | toutes | toutes | 53 | 64 | 1 | échecs |
| 20261116-143344-standard | standard | toutes | toutes | 24 | 12 | 1 | échecs |
| **20261116-145727-standard** (celle-ci) | standard | toutes | toutes | 4 | 12 | 1 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Habillez » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « votre marque. » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « votre marque. » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(3) > em.hero-ligne.mot « Démarquez-vous. » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### épinglage : image isolée différente (flash) (1)

- **épinglage : image isolée différente (flash)** — `/` — à 2866 ms (films/epinglage-1.png) _(1366×768)_

### épinglage : changement brusque (1)

- **épinglage : changement brusque** — `/logos-sites` — à 494 ms (différence 20 %) (films/epinglage-logos-sites-1.png) _(1366×768)_

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

### section sans visuel (4)

- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Ce qu'en disent ses clients « C’est » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#devis « 1 2 3 Étape 1 sur 3 Qu'avez-vous à habiller ? 01 U » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#devis « 1 Votre projet 2 Les détails 3 Vos coordonnées Éta » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **section sans visuel** — `/packaging` — section#debut « PACKAGING · 24 RÉALISATIONS Vos emballages m'embal » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 320×568 sansJs)_

### typographie française (1)

- **typographie française** — `/contact` — div.conteneur.devis-grille > aside.devis-recap > div.direct:nth-of-type(2) > p.direct-reseaux:nth-of-type(5) « Ses réalisations au fil de l'eau : Instagram (nouv » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

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
- Ouverture / (1366×768) : 2800 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2591 ms depuis le premier octet
- Ouverture /logos-sites (1366×768) : 2749 ms depuis le premier octet
- Ouverture /packaging (1366×768) : 2606 ms depuis le premier octet
- Ouverture /print (1366×768) : 2626 ms depuis le premier octet
- Ouverture / (390×844) : 2720 ms depuis le premier octet
- Ouverture /contact (390×844) : 2564 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /logos-sites (390×844) : 2707 ms depuis le premier octet
- Ouverture /packaging (390×844) : 2613 ms depuis le premier octet
- Ouverture /print (390×844) : 2619 ms depuis le premier octet
- Bords de l’écran : 466 images d’intro, 14 de voile et 129 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /packaging : aucune section épinglée ou plein écran.
- Tient dans l'écran /print : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 479, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 124, tâche la plus longue 0 ms
- Fluidité /logos-sites 1366×768 (molette) : 0 % d'images lentes sur 326, tâche la plus longue 0 ms
- Fluidité /packaging 1366×768 (molette) : 0 % d'images lentes sur 285, tâche la plus longue 0 ms
- Fluidité /print 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1421, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Fluidité /logos-sites 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /packaging 390×844 (doigt) : 0 % d'images lentes sur 1333, tâche la plus longue 0 ms
- Fluidité /print 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Vitesse / : 0.58 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /logos-sites : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /packaging : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /print : 0.44 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/logos-sites --seulement=fichiers,mesures,ecran
```

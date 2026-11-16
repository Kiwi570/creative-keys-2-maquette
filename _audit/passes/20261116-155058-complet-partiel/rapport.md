# Rapport d’audit

Projet : `creative-keys-maquette` · 16/11/2026 16:58:01 · 7 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-155058-complet-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (16), films des épinglages (1)

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
| **20261116-155058-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 1 | 5 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-grille.conteneur:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « 30 ans de packaging · Paris et périphérie » _(375×667 normal, 375×667 sansJs, 375×667 sansWebgl, 1000×560 sansJs)_

## À regarder

### section sans visuel (4)

- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Ce qu'en disent ses clients « C’est » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#devis « 1 2 3 Étape 1 sur 3 Qu'avez-vous à habiller ? 01 U » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/contact` — section#devis « 1 Votre projet 2 Les détails 3 Vos coordonnées Éta » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 1024×768 normal, 768×1024 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, +24)_
- **section sans visuel** — `/packaging` — section#debut « PACKAGING · 24 RÉALISATIONS Vos emballages m'embal » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 320×568 sansJs, 320×568 sansWebgl)_

### typographie française (1)

- **typographie française** — `/contact` — div.conteneur.devis-grille > aside.devis-recap > div.direct:nth-of-type(2) > p.direct-reseaux:nth-of-type(5) « Ses réalisations au fil de l'eau : Instagram (nouv » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /packaging : aucune section épinglée ou plein écran.
- Tient dans l'écran /print : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mesures
```

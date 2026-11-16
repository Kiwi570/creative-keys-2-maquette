# Rapport d’audit

Projet : `creative-keys-maquette` · 16/11/2026 16:23:01 · 1 min · 1 page(s) · audit standard ciblé sur / (étapes : fichiers, mesures, ecran)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261116-152200-standard-cible-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (11), balayage (1), tient dans l’écran (5), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-135317-rapide-cible | rapide | /packaging,/print,/logos-sites,/contact,/404 | toutes | 96 | 51 | 1 | échecs |
| 20261116-141018-standard | standard | toutes | toutes | 53 | 64 | 1 | échecs |
| 20261116-143344-standard | standard | toutes | toutes | 24 | 12 | 1 | échecs |
| 20261116-145727-standard | standard | toutes | toutes | 4 | 12 | 1 | échecs |
| 20261116-151927-standard-cible-partiel | standard | /,/logos-sites | fichiers, mesures, ecran | 4 | 2 | 0 | échecs |
| **20261116-152200-standard-cible-partiel** (celle-ci) | standard | / | fichiers, mesures, ecran | 5 | 2 | 0 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Habillez » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « votre marque. » _(390×844 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 390×844 sansWebgl, +3)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « votre marque. » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(3) > em.hero-ligne.mot « Démarquez-vous. » _(390×844 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 390×844 sansWebgl, +3)_

### épinglage : image isolée différente (flash) (3)

- **épinglage : image isolée différente (flash)** — `/` — à 2864 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2917 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 2932 ms (films/epinglage-1.png) _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (1)

- **section sans visuel** — `/` — section#avis « ILS EN PARLENT Ce qu'en disent ses clients « C’est » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 77 min de travail pour 115 min de budget, 8 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures,ecran
```

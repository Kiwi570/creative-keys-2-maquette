# Creative Keys · maquette

Maquette du futur site de Creative Keys (Thierry Poincet, graphiste : packaging, print et PLV, logos, sites web).
Adresse de démonstration : https://creative-keys-2-maquette.vercel.app

Direction « En rayon » : fond gris studio, cartes blanches, bandes encre, accent bleu électrique, étiquette de rayon jaune.
Titres en Bricolage Grotesque, mot en Instrument Serif italique, texte en Instrument Sans (polices libres, hébergées avec le site).

## Pages

- Accueil : intro « en rayon », la tablette qui sort du rang, le studio, le kakémono en magasin, la tête de gondole, quatre métiers, du logo au linéaire, print, logos, avis, appel final.
- Packaging : mur de packagings, galerie filtrable par univers (adresse partageable, ex. `/packaging?univers=boissons`), visionneuse (chaque réalisation a son lien, ex. `/packaging#r-larzac`).
- Print & PLV : affiche qui se déroule, quatre familles d'imprimés, jusqu'à l'imprimeur.
- Logos & sites : compte à rebours et éventail de logos, mur de logos, galerie des sites.
- Contact : devis en trois étapes (simulé), téléphone, e-mail. Préremplissage : `/contact?projet=packaging`, `print`, `logo`, `site`.
- 404 « Rupture de stock ».

## À fournir par le client (à compléter)

- Mentions légales : à compléter (éditeur, SIRET, adresse, directeur de la publication).
- Politique de confidentialité : à compléter (formulaire de devis).
- Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (à vérifier au moment de la mise en ligne).
- Assurance professionnelle : à compléter si le client souhaite l'afficher.
- Logo Creative Keys : le site actuel n'en a pas (son en-tête est une photo de plage de banque d'images). La maquette utilise un mot-symbole provisoire « CK · Creative Keys » ; à remplacer par le logo du client s'il en a un.
- Adresse e-mail : le site actuel affiche t.creativekeys@orange.fr mais son lien ouvre thierry.pfscreation@orange.fr. La maquette utilise t.creativekeys@orange.fr : à confirmer.
- Nom : deux noms coexistent (Creative Keys et PFS Création sur Instagram et Twitter) : à confirmer.
- Photo de Thierry : aucune dans la maquette (aucune sur le site actuel) ; à fournir s'il souhaite apparaître.
- Tarifs : aucun tarif affiché (aucun sur le site actuel ni sur son profil) ; le devis passe par le formulaire ou le téléphone.
- Avis : les quatre avis viennent de son profil public Graphiste.com (Tristan, Nadia, Mahamadou, Diane), en courtes citations avec la source : à confirmer avec le client.
- « 30 ans d'expérience » et « 147 réalisations » : repris de son profil Graphiste.com.
- Réalisations retirées : calendrier de l'Avent sous licence d'un personnage connu (droits à vérifier avant de le montrer).

## Crédits des illustrations générées

Quatre images créées avec Grok portent la mention « Illustration générée » (table de graphiste, presse d'imprimerie, carnet de croquis, rayon vide de la 404). Garder cette mention sur le site final.
Toutes les autres images sont des réalisations de Thierry, reprises de son site actuel.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), formulaire simulé (brancher un vrai envoi), mentions « à compléter » du pied de page (remplacer par les vraies pages).
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Modifier la maquette

Les textes sont dans `donnees/textes/fr.json`, les réalisations dans `donnees/realisations.json`. Puis `node outils/generer.mjs` régénère les pages (ne jamais modifier les pages HTML à la main).

## Images sources

Les originaux du site actuel ne sont pas dans ce dossier (ils sont dans `~/Downloads/creative-keys-recu`, récupérés par le pipeline de la bibliothèque). Pour refaire les images : les copier dans `recu/site/`, puis `node <bibliotheque-maquettes>/images/produire.mjs plan-images.json`. Les images Grok d'origine sont dans `recu/grok/`.

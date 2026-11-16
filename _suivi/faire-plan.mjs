import fs from 'node:fs';
const R = 'recu/site/';
const E = [];
const add = (o) => E.push(o);
// Packagings : [nom, source, beaute, univers, alt, ratio?]
const pk = [
 ['pk-miel','emballages-m-emballent.jpg',4,'sucre','Pots de miel de France posés sur une table de petit-déjeuner, champ de lavande en fond'],
 ['pk-brownies','emballages-m-emballent-2.png',4,'sucre','Étui et barres Brownies Pocket de Maison Erté, rayures chocolat sur fond jaune'],
 ['pk-macaron','emballages-m-emballent-3.jpg',4,'sucre','Étui Macaron crème glacée vanille de Tiliz, macarons au chocolat posés devant'],
 ['pk-cookie','emballages-m-emballent-4.jpg',4,'sucre','Pot de glace Cookie Dough de Tiliz sur fond rose, fraises et pépites de chocolat'],
 ['pk-tortillas','emballages-m-emballent-5.jpg',4,'sale','Gamme de sachets de tortillas chips Kash sur fond jaune et orange'],
 ['pk-cartilamine','emballages-m-emballent-6.png',4,'sante','Pot et étui Cartilamine Phyto, mobilité et articulations, sur fond bleu nuit'],
 ['pk-saumon','emballages-m-emballent-7.jpg',4,'sale','Sachet de saumon fumé à côté de tartines de saumon'],
 ['pk-diosa','emballages-m-emballent-8.png',5,'boissons','Briques de nectar Diosa à la mangue, à l’ananas et à l’orange, fruits frais autour'],
 ['pk-plaisir','emballages-m-emballent-9.png',3,'animaux','Quatre sachets de pâtée Plaisir pour chiens et chats'],
 ['pk-haricots','emballages-m-emballent-10.jpg',4,'sale','Sachet de haricots verts extra-fins Mon Potager Frais, haricots frais autour'],
 ['pk-huile','emballages-m-emballent-11.jpg',3,'sale','Bouteilles d’huile d’olive vierge extra, l’une suspendue comme une enseigne en forêt'],
 ['pk-chocolat60','emballages-m-emballent-12.jpg',4,'sucre','Trois tablettes de chocolat 60 % cacao aux fruits, orange, rose et vert'],
 ['pk-larzac','emballages-m-emballent-13.jpg',4,'boissons','Gamme de bières du Larzac : six bouteilles aux étiquettes de couleurs différentes'],
 ['pk-erte-sachets','emballages-m-emballent-14.jpg',4,'sucre','Gamme de sachets Maison Erté : madeleines, mini cakes, rochers coco, petits bouchons'],
 ['pk-veinavital','emballages-m-emballent-15.jpg',3,'sante','Présentoir de comptoir Veinavital tenu par une pharmacienne, logo du laboratoire Vital Santé'],
 ['pk-togolais','emballages-m-emballent-16.jpg',4,'sucre','Quatre sachets de mini biscuits Togolais de la biscuiterie Enougan', '2:1'],
 ['pk-protein','emballages-m-emballent-17.jpg',3,'sante','Sachets de protéine végane et de maca bio en poudre'],
 ['pk-maisoncafe','emballages-m-emballent-18.png',3,'boissons','Paquet de café Ma Tradition de Maison du Café, offre trois plus un'],
 ['pk-ourson','emballages-m-emballent-19.png',3,'sucre','Pots de pâte à tartiner Ourson et Mi-Cho-Ko'],
 ['pk-calendrier','emballages-m-emballent-20.png',3,'sucre','Deux calendriers de l’Avent illustrés'],
 ['pk-dayfruits','emballages-m-emballent-21.jpg',4,'sucre','Gamme de six sachets de fruits croquants Day Fruits : pomme, framboise, ananas, fraise, banane, mangue'],
 ['pk-confitures','emballages-m-emballent-22.jpg',4,'sucre','Gamme de pots de confiture aux étiquettes noires et rouges, sur deux rangs'],
 ['pk-versailles','emballages-m-emballent-23.png',4,'sucre','Tablettes Chocolats de Versailles, étuis orange et noir', '2000:1211'],
 ['pk-tablettes','emballages-m-emballent-24.jpg',4,'sucre','Tablettes de chocolat 35 %, 60 % et 80 % cacao, étuis blanc, argent et brun'],
 ['pk-coffret-fruits','marques-m-impressionnent-2.jpg',4,'sucre','Coffrets de sachets de fruits séchés Rand Fruits sur fond bleu', '4:3'],
];
for (const [nom, src, beaute, univers, alt, ratio] of pk) add({ source: R + src, nom, role: 'galerie', ratio: ratio || '3:2', largeurs: [480, 800, 1200], alt, beaute, univers, page: 'packaging' });
// Détourés (fond transparent) : pas de recadrage
add({ source: R + 'habillez-marque-demarquez-vous.png', nom: 'pk-chocolat60-detoure', role: 'produit', ratio: '2000:1387', largeurs: [480, 800, 1200], alt: 'Trois tablettes de chocolat 60 % cacao, étuis orange, rose et vert', beaute: 5, page: 'accueil' });
add({ source: R + 'logos-2.png', nom: 'wb-mymyb-detoure', role: 'produit', ratio: '2000:1419', largeurs: [480, 800, 1200], alt: 'Site MyMy B affiché sur un ordinateur portable et un téléphone', beaute: 4, page: 'logos-sites' });
add({ source: R + 'logos.png', nom: 'pr-depliant-detoure', role: 'produit', ratio: '2000:1762', largeurs: [480, 800, 1200], alt: 'Dépliant de restaurant ouvert, photo de plat et carte', beaute: 4, page: 'print' });
// Print & PLV
const pr = [
 ['pr-rollup-plaisir','marques-m-impressionnent.jpg',3,'plv','Kakémono Plaisir, chien et chat, devant un mur au motif de la marque','4:3'],
 ['pr-calendrier-plaisir','marques-m-impressionnent-3.jpg',4,'editions','Calendrier de l’Avent Les Repas Plaisir, cases illustrées, chiens et chats sous la neige'],
 ['pr-lor-coupons','marques-m-impressionnent-4.jpg',3,'affiches','Annonces et bons de réduction L’Or, noir et or'],
 ['pr-chalosse','marques-m-impressionnent-5.jpg',3,'editions','Menu de La Ferme de Chalosse, couverture brune et pages intérieures'],
 ['pr-smile','marques-m-impressionnent-6.jpg',4,'plaquettes','Plaquette Smile, recto et verso, bleu et blanc'],
 ['pr-mystic','marques-m-impressionnent-7.jpg',4,'affiches','Affiche Mystic Spear : flèches et arc sur fond noir, lettrage or et rouge'],
 ['pr-rollup-erte','marques-m-impressionnent-8.jpg',4,'plv','Kakémono Maison Erté dans l’allée d’un supermarché, clients flous autour', null, true],
 ['pr-executive','marques-m-impressionnent-9.jpg',3,'plaquettes','Plaquette Executive ouverte, pages noires et portraits'],
 ['pr-aysh','marques-m-impressionnent-10.jpg',4,'affiches','Visuels Aysh Glamm, maquilleuse : portraits maquillés et palette noire'],
 ['pr-sushi','marques-m-impressionnent-11.jpg',3,'editions','Quatre menus de restaurant de sushis','2000:1065'],
 ['pr-madeleines','marques-m-impressionnent-12.jpg',4,'affiches','Affiche Maison Erté : « La plus délicieuse des madeleines… c’est elle ! »','4:5'],
 ['pr-estheticenter','marques-m-impressionnent-13.jpg',3,'plaquettes','Flyer Esthéticenter, soins du visage et épilation laser'],
 ['pr-lor-bio','marques-m-impressionnent-14.png',3,'affiches','Annonces et bons L’Or Bio et dosettes, vert et noir'],
 ['pr-xlwines','marques-m-impressionnent-15.png',3,'affiches','Visuel XL Wines : bouteilles en cascade'],
 ['pr-lor-sublime','marques-m-impressionnent-16.png',4,'affiches','Affiches L’Or « Goûtez au sublime » et « Puissant et rond », noir et or'],
 ['pr-brazil','marques-m-impressionnent-17.png',3,'plv','Coffrets de café Brazil de Maison du Café, rouge et noir'],
 ['pr-novalyo','marques-m-impressionnent-18.jpg',3,'plaquettes','Brochure Novalyo ouverte, carte et schémas'],
 ['pr-monblanc','marques-m-impressionnent-19.jpg',3,'affiches','Page de recettes gourmandes Mont Blanc, mosaïque de desserts'],
 ['pr-enougan','marques-m-impressionnent-20.jpg',3,'plaquettes','Dépliant de la biscuiterie Enougan Bio, gamme Togolais'],
];
for (const [nom, src, beaute, univers, alt, ratio, mobile] of pr) add({ source: R + src, nom, role: 'galerie', ratio: ratio || '3:2', largeurs: [480, 800, 1200], alt, beaute, univers, page: 'print', ...(mobile ? { mobile: '9:16', largeurs: [480, 800, 1200, 1600] } : {}) });
// Logos
const lg = [
 ['lg-agafay','marques-prets-partez.jpg',4,'Logo Le Royaume Agafay Camp sur un paysage de désert'],
 ['lg-emma','marques-prets-partez-2.jpg',3,'Logo Beauty Emma, prothésiste ongulaire, flacon de vernis et main'],
 ['lg-erte','marques-prets-partez-3.jpg',4,'Logo Maison Erté, biscuitiers de père en fils depuis 1888'],
 ['lg-togolais','marques-prets-partez-4.jpg',4,'Logos Biscuiterie Enougan Bio et Mini Biscuits Togolais'],
 ['lg-najat','marques-prets-partez-5.jpg',4,'Logo NB Najat Bary by Marrakech, monogramme doré, portrait de femme'],
 ['lg-dayfruits','marques-prets-partez-6.jpg',4,'Logo Day Fruits « C’est mon fruit croustillant »'],
 ['lg-barbershop','marques-prets-partez-7.jpg',3,'Deux logos Barber Shop, coupes de cheveux et rasages'],
 ['lg-babyboss','marques-prets-partez-8.png',3,'Déclinaisons du logo Baby Boss, « le boss c’est bébé »'],
 ['lg-serenity','marques-prets-partez-9.jpg',3,'Deux versions du logo Sérénity Village, construction intergénération'],
 ['lg-vache','marques-prets-partez-10.jpg',3,'Logo La Vache aux pieds nus sur des pots de crème fraîche et de fromage frais'],
 ['lg-transeurope','marques-prets-partez-11.png',3,'Logo Trans Europe 45, lettrage rouge et gris'],
 ['lg-pauline','marques-prets-partez-12.jpg',4,'Logo La Vitrine de Pauline, colibri et écriture violette'],
 ['lg-action','marques-prets-partez-13.jpg',3,'Logo Action dans le monde, globe noir et jaune'],
 ['lg-celina','marques-prets-partez-14.jpg',4,'Identité Celina Paris : vase et coussin aux motifs berbères'],
 ['lg-emma-ongulaire','packagings.jpg',3,'Logo Emma Beauty, prothésiste ongulaire, version horizontale'],
];
for (const [nom, src, beaute, alt] of lg) add({ source: R + src, nom, role: 'galerie', ratio: '3:2', largeurs: [480, 800], alt, beaute, univers: 'logos', page: 'logos-sites' });
const wb = [
 ['wb-ladioss','profitez-faire-leche-vitrine.jpg',3,'Site Ladioss sur ordinateur et téléphone'],
 ['wb-mymyb','profitez-faire-leche-vitrine-2.jpg',4,'Site MyMy B, bijoux, sur ordinateur et téléphone'],
 ['wb-estheticenter','profitez-faire-leche-vitrine-3.jpg',4,'Site Esthéticenter sur ordinateur et téléphone'],
 ['wb-tahiti','profitez-faire-leche-vitrine-4.jpg',4,'Site Tahiti Wrap, covering automobile, sur ordinateur et téléphone'],
 ['wb-longuet','profitez-faire-leche-vitrine-5.jpg',4,'Site Maison Longuet, crêpes et pâtisserie, sur ordinateur et téléphone'],
 ['wb-gottoshare','profitez-faire-leche-vitrine-6.jpg',3,'Site Got to Share sur ordinateur et téléphone'],
 ['wb-erte','profitez-faire-leche-vitrine-7.jpg',4,'Site de la biscuiterie Erté sur ordinateur et téléphone'],
 ['wb-enougan','profitez-faire-leche-vitrine-8.jpg',3,'Site de la biscuiterie Enougan sur ordinateur et téléphone'],
];
for (const [nom, src, beaute, alt] of wb) add({ source: R + src, nom, role: 'galerie', ratio: '3:2', largeurs: [480, 800, 1200], alt, beaute, univers: 'web', page: 'logos-sites' });
// Grok
const G = 'recu/grok/';
add({ source: G + 'hd/atelier.png', nom: 'grok/atelier', role: 'section-fond', ratio: '3:2', largeurs: [640, 1280, 1600], mobile: '4:5', zone_texte: 'gauche', alt: 'Table de graphiste vue de dessus : épreuves de couleur, patron de boîte en carton blanc, nuancier, règle et cutter', beaute: 4, page: 'accueil', emplacement: 'Accueil : « 30 ans à habiller des marques », grande image à droite du texte', priorite: 'Indispensable', gabarit: 'scene-metier', consigne_scene: 'Overhead flat lay of a graphic designer’s large pale grey work table seen from directly above: a flat white cardboard box dieline with fold lines, a fan of colour swatches, two printed colour proofs made only of abstract colour blocks with no letters, a steel ruler, a yellow cutter and a sharp pencil, everything neatly arranged on the right two thirds, the left third left empty and calm.' });
add({ source: G + 'hd/imprimerie.png', nom: 'grok/imprimerie', role: 'section-fond', ratio: '3:2', largeurs: [640, 1280, 1600], zone_texte: 'droite', alt: 'Sortie d’une presse offset : piles de feuilles imprimées de couleurs vives, lumière d’atelier', beaute: 4, page: 'print', emplacement: 'Print & PLV : section « Jusqu’au BAT », grande image à gauche', priorite: 'Conseillée', gabarit: 'scene-metier', consigne_scene: 'The delivery end of a large offset printing press in a clean print shop, neat stacks of freshly printed sheets covered with bright abstract colour blocks and die-cut box shapes, no letters or logos, warm practical lighting, a sharp stack in the foreground and the machine softly blurred behind, nobody.' });
add({ source: G + 'hd/croquis.png', nom: 'grok/croquis', role: 'ouverture', ratio: '3:2', largeurs: [640, 1280, 1600], mobile: '4:5', zone_texte: 'gauche', alt: 'Carnet de croquis ouvert : esquisses au crayon de formes de logo, feutres et tasse de café', beaute: 4, page: 'contact', emplacement: 'Contact : ouverture, image à droite du formulaire', priorite: 'Indispensable', gabarit: 'scene-metier', consigne_scene: 'Overhead view of an open sketchbook on a light grey desk with pencil sketches of simple abstract logo shapes made only of circles, keys and arrows, absolutely no letters, three felt-tip markers in black, ultramarine blue and yellow, a white coffee cup partly out of frame, everything on the right half, the left half empty.' });
add({ source: G + 'hd/rayon-vide.png', nom: 'grok/rayon-vide', role: '404', ratio: '16:9', largeurs: [640, 1280, 1600], mobile: '9:16', zone_texte: 'haut', alt: 'Rayon de magasin entièrement vide, étagères blanches sous une lumière douce', beaute: 4, page: '404', emplacement: 'Page 404 « Rupture de stock » : image d’ouverture', priorite: 'Indispensable', gabarit: '404', consigne_scene: 'A clean, completely empty supermarket shelf unit seen from the front: five long white metal shelves with nothing on them, only empty price label rails with no labels, soft even light, light grey floor, a gentle touch of humour from the total emptiness, no products, no packaging, no people.' });
fs.writeFileSync('plan-images.json', JSON.stringify(E, null, 1));
console.log(E.length, 'entrées');

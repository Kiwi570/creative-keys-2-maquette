/* Accueil « En rayon » : un linéaire de packagings en gris, une tablette qui sort du rang. */
import { html } from '../../outils/gabarit.mjs';
import { titre, carte, visionneuse, fin } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'pk-chocolat60-detoure-1200.webp' };

const RANG_HAUT = ['pk-larzac', 'pk-erte-sachets', 'pk-togolais', 'pk-confitures', 'pk-dayfruits', 'pk-ourson', 'pk-maisoncafe'];
const RANG_BAS = ['pk-macaron', 'pk-diosa', 'pk-tablettes', 'pk-brownies', 'pk-saumon', 'pk-cookie', 'pk-tortillas'];
const GONDOLE = ['larzac', 'diosa', 'erte-sachets', 'dayfruits', 'saumon', 'confitures'];
const ETAPES = [
  ['lg-erte', 'Logo Maison Erté'], ['pk-erte-sachets', 'Gamme de sachets Maison Erté'], ['pk-cookie', 'Mise en ambiance du Cookie Dough Tiliz'],
  ['pk-togolais', 'Gamme Togolais déclinée en quatre parfums'], ['pk-veinavital', 'Présentoir de comptoir Veinavital'], ['wb-erte', 'Site de la biscuiterie Erté'],
];

const facing = (c, n) => html`<span class="facing"><img src="/assets/images/${n}-480.webp" alt="" width="480" height="${n === 'pk-togolais' ? 240 : 320}" loading="eager" decoding="async"></span>`;
const rang = (c, liste, sens) => html`<div class="rayon" data-rayon data-sens="${sens}"><div class="rayon-piste" data-effet="lineaire">${liste.map((n) => facing(c, n))}${liste.map((n) => facing(c, n))}</div><span class="rayon-etagere"></span></div>`;

export default (c) => {
  const R = c.donnees.realisations;
  const parId = Object.fromEntries([...R.packaging, ...R.print, ...R.logos, ...R.web].map((r) => [r.id, r]));
  return html`
<section class="hero" id="debut">
  <div class="hero-rayons hero-rayons--haut" aria-hidden="true">${rang(c, RANG_HAUT, 1)}</div>
  <button type="button" class="rayons-pause" data-rayons-pause aria-pressed="false" aria-label="${c.s('accueil.hero.pause')}"><span aria-hidden="true">❚❚</span></button>
  <div class="hero-grille conteneur">
    <div class="hero-texte">
      <p class="surtitre hero-surtitre masque-ecran-bas" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
      <h1 class="hero-titre" data-anime="gsap">
        <span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span>
        <span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre2')}</span></span>
        <span class="ligne-masque"><em class="hero-ligne mot">${c.t('accueil.hero.titre3')}</em></span>
      </h1>
      <p class="hero-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
      <p class="hero-actions" data-anime="gsap">
        ${c.lien('contact', { ancre: 'devis', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        ${c.lien('packaging', { classe: 'bouton bouton--contour masque-ecran-tres-bas', texte: c.t('accueil.hero.action2') })}
      </p>
      <p class="hero-info" data-info-cle data-anime="gsap">${c.t('accueil.hero.info')}</p>
    </div>
    <div class="hero-vedette">
      <div class="vedette-objet" data-effet="vedette">
        <span class="vedette-ombre" aria-hidden="true"></span>
        ${c.media({ nom: 'pk-chocolat60-detoure', alt: c.donnees.images['pk-chocolat60-detoure'].alt, priorite: true, classe: 'vedette-media', sizes: '(max-width: 760px) 70vw, 40vw', attrs: 'data-iris-centre' })}
      </div>
      <p class="etiquette etiquette--grande hero-etiquette" data-anime="gsap"><strong>${c.t('accueil.hero.etiquette')}</strong></p>
    </div>
  </div>
  <div class="hero-rayons hero-rayons--bas" aria-hidden="true">${rang(c, RANG_BAS, -1)}</div>
</section>

<section class="studio" id="studio">
  <div class="conteneur studio-grille">
    <div class="studio-texte">
      <p class="surtitre" data-anime>${c.t('accueil.studio.surtitre')}</p>
      <h2 class="titre titre--xl" data-anime="lignes">${c.t('accueil.studio.titre1')} <em class="mot">${c.t('accueil.studio.titre2')}</em> ${c.t('accueil.studio.titre3')}</h2>
      <p class="texte-large" data-anime>${c.t('accueil.studio.texte')}</p>
      <ul class="chiffres" data-anime="cascade">
        <li><strong data-compteur="30">30</strong><span>${c.t('accueil.studio.c1')}</span></li>
        <li><strong data-compteur="147">147</strong><span>${c.t('accueil.studio.c2')}</span></li>
        <li><strong data-compteur="4">4</strong><span>${c.t('accueil.studio.c3')}</span></li>
      </ul>
    </div>
    ${c.media({ nom: 'grok/atelier', alt: c.donnees.images['grok/atelier']?.alt || 'Table de graphiste vue de dessus', classe: 'studio-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="magasin" id="en-magasin" style="--fx-longueur:200svh" data-fx="plein-ecran" data-fx-depart="inset(20% 37% 20% 37% round 18px)">
  <div data-collant>
    ${c.media({ nom: 'pr-rollup-erte', alt: c.donnees.images['pr-rollup-erte'].alt, cadrage: '53% 45%', cadrageMobile: '50% 43%', sizes: '100vw', attrs: 'data-fx-cible' })}
    <p class="magasin-mots" aria-hidden="true"><span data-fx-ecarte="g">${c.t('accueil.magasin.mot1')}</span> <span data-fx-ecarte="d" class="mot">${c.t('accueil.magasin.mot2')}</span></p>
    <p class="magasin-legende" data-fx-apres><span class="etiquette"><strong>Maison Erté</strong> <span>${c.t('accueil.magasin.legende')}</span></span></p>
  </div>
</section>

<section class="gondole gondole--glisse" id="gondole" data-glisse>
  <div class="conteneur gondole-tete">
    <div>${titre(c, { surtitre: c.t('accueil.gondole.surtitre'), titre: c.t('accueil.gondole.titre'), mot: c.t('accueil.gondole.mot') })}</div>
    <div class="gondole-intro">
      <p class="masque-ecran-bas">${c.t('accueil.gondole.texte')}</p>
      ${c.lien('packaging', { classe: 'bouton', texte: c.t('accueil.gondole.lien') })}
    </div>
  </div>
  <div class="piste gondole-piste" data-galerie data-effet="gondole" tabindex="0" role="region" aria-label="${c.s('accueil.gondole.region')}">
    ${GONDOLE.map((id) => carte(c, parId[id], { classe: 'carte-gondole', sizes: '(max-width: 760px) 80vw, 34vw' }))}
  </div>
</section>

<section class="metiers" id="metiers">
  <div class="conteneur">
    <div class="tete-section">${titre(c, { surtitre: c.t('accueil.metiers.surtitre'), titre: c.t('accueil.metiers.titre'), mot: c.t('accueil.metiers.mot') })}</div>
    <ul class="metiers-grille" data-anime="cascade">
      ${[['packaging', 'packaging', 'pk-chocolat60'], ['print', 'print', 'pr-calendrier-plaisir'], ['logos', 'logos-sites', 'lg-erte'], ['web', 'logos-sites', 'wb-longuet']].map(([k, p, img]) => html`<li class="metier">
        <a class="metier-lien" href="${c.url(p, k === 'web' ? 'vitrine' : k === 'logos' ? 'logos' : '')}" data-libelle="${c.libelle(p)}">
          ${c.media({ nom: img, alt: c.donnees.images[img].alt, cadrage: c.donnees.images[img].cadrage, classe: 'metier-media', sizes: '(max-width: 760px) 90vw, 25vw', attrs: 'data-fx="zoom"' })}
          <span class="metier-nom">${c.t('accueil.metiers.n-' + k)}</span>
          <strong class="metier-titre">${c.t('accueil.metiers.t-' + k)}</strong>
          <span class="metier-texte">${c.t('accueil.metiers.' + k)}</span>
          <span class="metier-fleche" aria-hidden="true">→</span>
        </a>
      </li>`)}
    </ul>
  </div>
</section>

<section class="etapes bande-blanche" id="etapes">
  <div class="conteneur etapes-grille">
    <div class="etapes-texte">
      ${titre(c, { surtitre: c.t('accueil.etapes.surtitre'), titre: c.t('accueil.etapes.titre'), mot: c.t('accueil.etapes.mot') })}
      <p class="masque-ecran-bas" data-anime>${c.t('accueil.etapes.texte')}</p>
      <div class="etapes-liste-cadre"><span class="etapes-fil" aria-hidden="true"><span data-effet="etapes"></span></span>
      <ol class="etapes-liste">
        ${[1, 2, 3, 4, 5, 6].map((n) => html`<li class="etape" data-etape="${n - 1}" data-anime><span class="etape-num">0${n}</span><div><h3>${c.t('accueil.etapes.e' + n)}</h3><p>${c.t('accueil.etapes.d' + n)}</p></div></li>`)}
      </ol></div>
    </div>
    <div class="etapes-visuel" aria-hidden="true">
      <div class="etapes-cadre">${ETAPES.map(([n, alt], i) => c.media({ nom: n, alt, cadrage: c.donnees.images[n].cadrage, classe: 'etapes-media' + (i === 0 ? ' actif' : ''), sizes: '(max-width: 760px) 90vw, 40vw' }))}</div>
    </div>
  </div>
</section>

<section class="logos bande-encre" id="logos">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <div>${titre(c, { surtitre: c.t('accueil.logos.surtitre'), titre: c.t('accueil.logos.titre'), mot: c.t('accueil.logos.mot') })}</div>
      <div><p data-anime>${c.t('accueil.logos.texte')}</p>${c.lien('logos-sites', { classe: 'bouton bouton--clair', texte: c.t('accueil.logos.lien') })}</div>
    </div>
    <ul class="mur-logos" data-anime="cascade">
      ${['erte', 'dayfruits', 'najat', 'pauline', 'togolais', 'celina', 'emma', 'action'].map((id) => html`<li class="logo-tuile">${c.media({ nom: 'lg-' + id, alt: parId[id].alt, cadrage: c.donnees.images['lg-' + id].cadrage, classe: 'logo-media', sizes: '(max-width: 760px) 45vw, 22vw', ratio: '3 / 2' })}</li>`)}
    </ul>
  </div>
</section>

<section class="avis" id="avis">
  <div class="conteneur">
    <div class="tete-section">${titre(c, { surtitre: c.t('accueil.avis.surtitre'), titre: c.t('accueil.avis.titre'), mot: c.t('accueil.avis.mot') })}</div>
    <ul class="avis-grille" data-anime="cascade">
      ${R.avis.map((a) => html`<li class="avis-carte"><blockquote><p>« ${a.citation} »</p></blockquote><p class="avis-qui"><strong>${a.nom}</strong>, ${a.qui}<br><span>${a.sujet} · ${a.date}</span></p></li>`)}
    </ul>
    <p class="avis-source" data-anime><a href="https://graphiste.com/thierrycreativekeys" target="_blank" rel="noopener">${c.t('commun.graphiste')}<span class="visuellement-cache"> ${c.s('commun.nouvelOnglet')}</span></a></p>
  </div>
</section>

${fin(c, 'accueil.fin')}
${visionneuse(c)}
`;
};

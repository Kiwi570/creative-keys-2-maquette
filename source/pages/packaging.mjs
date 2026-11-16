/* Packaging « Vos emballages m'emballent » : ouverture en mur de facings qui se met en rayon, galerie filtrable. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, carte, visionneuse, fin } from '../gabarits/blocs.mjs';

export const page = { cle: 'packaging', fichier: 'packaging', imagePartage: 'pk-larzac-1200.webp' };

const MUR = [
  ['pk-larzac', 'pk-dayfruits', 'pk-erte-sachets', 'pk-diosa'],
  ['pk-confitures', 'pk-tablettes', 'pk-macaron', 'pk-togolais'],
  ['pk-brownies', 'pk-saumon', 'pk-tortillas', 'pk-cartilamine'],
];

export default (c) => {
  const R = c.donnees.realisations;
  const compte = (u) => R.packaging.filter((r) => r.univers === u).length;
  return html`
<section class="ouv-pack" id="debut">
  <div class="conteneur ouv-pack-tete">
    <div>
      <p class="surtitre" data-anime="gsap">${c.t('packaging.surtitre')}</p>
      <h1 class="titre titre--page" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('packaging.titre1')}</span></span> <span class="ligne-masque"><em class="mot ouv-ligne">${c.t('packaging.titre2')}</em></span></h1>
    </div>
    <div class="ouv-pack-texte" data-anime="gsap">
      <p class="masque-ecran-bas">${c.t('packaging.texte')}</p>
      <p class="ouv-actions">${c.lien('contact', { ancre: 'devis', params: 'projet=packaging', classe: 'bouton', texte: c.t('packaging.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="ouv-info" data-info-cle>${c.t('packaging.info')}</p>
    </div>
  </div>
  <div class="mur" role="img" aria-label="${c.s('packaging.mur')}">
    ${MUR.map((rang, i) => html`<div class="mur-rang" data-mur-rang="${i}" data-effet="mise-en-rayon" style="--i:${i}">
      ${rang.map((n, j) => html`<span class="mur-facing"${brut(i === 0 && j === 1 ? ' data-iris-centre' : '')} style="--j:${j}"><img src="/assets/images/${n}-480.webp" alt="" width="480" height="${n === 'pk-togolais' ? 240 : 320}" ${brut(i === 0 ? 'fetchpriority="high"' : '')} loading="eager" decoding="async"></span>`)}
      <span class="mur-etagere"></span>
    </div>`)}
  </div>
</section>

<section class="rayonnage" id="rayon">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <h2 class="titre" data-anime="lignes">${c.t('packaging.galerie.titre')}</h2>
      <p data-anime>${c.t('packaging.galerie.texte')}</p>
    </div>
    <div class="filtres" role="group" aria-label="${c.s('packaging.galerie.filtres')}" data-filtres data-anime>
      <button type="button" class="filtre" data-filtre="tout" aria-pressed="true">${c.t('packaging.galerie.tout')} <span>${R.packaging.length}</span></button>
      ${R.univers.map((u) => html`<button type="button" class="filtre" data-filtre="${u.cle}" aria-pressed="false"${brut(compte(u.cle) ? '' : ' disabled')}>${u.nom} <span>${compte(u.cle)}</span></button>`)}
    </div>
    <p class="filtres-etat visuellement-cache" aria-live="polite" data-filtres-etat></p>
    <div class="grille-real" data-grille-filtree data-anime="cascade">
      ${R.packaging.map((r) => carte(c, r, { sizes: '(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 30vw' }))}
    </div>
  </div>
</section>

<section class="inclus bande-encre" id="inclus">
  <div class="conteneur inclus-grille">
    ${c.media({ nom: 'pk-miel', alt: c.donnees.images['pk-miel'].alt, cadrage: c.donnees.images['pk-miel'].cadrage, classe: 'inclus-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      ${titre(c, { surtitre: c.t('packaging.inclus.surtitre'), titre: c.t('packaging.inclus.titre'), mot: c.t('packaging.inclus.mot') })}
      <ol class="inclus-liste" data-anime="cascade">
        ${[1, 2, 3, 4, 5].map((n) => html`<li><span class="inclus-num">0${n}</span>${c.t('packaging.inclus.i' + n)}</li>`)}
      </ol>
    </div>
  </div>
</section>

${fin(c, 'packaging.fin', { params: 'projet=packaging' })}
${visionneuse(c)}
`;
};

/* Print & PLV « Vos marques m'impressionnent » : écran partagé, l'affiche se déroule comme un kakémono. */
import { html } from '../../outils/gabarit.mjs';
import { titre, carte, visionneuse, fin } from '../gabarits/blocs.mjs';

export const page = { cle: 'print', fichier: 'print', imagePartage: 'pr-madeleines-1200.webp' };

const FONDS = { affiches: '', plaquettes: 'bande-blanche', plv: 'bande-encre', editions: '' };

export default (c) => {
  const R = c.donnees.realisations;
  const I = c.donnees.images;
  return html`
<section class="ouv-print" id="debut">
  <div class="conteneur ouv-print-grille">
    <div class="ouv-print-texte">
      <p class="surtitre" data-anime="gsap">${c.t('print.surtitre')}</p>
      <h1 class="titre titre--page" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('print.titre1')}</span></span> <span class="ligne-masque"><em class="mot ouv-ligne">${c.t('print.titre2')}</em></span></h1>
      <p class="masque-ecran-bas" data-anime="gsap">${c.t('print.texte')}</p>
      <p class="ouv-actions" data-anime="gsap">${c.lien('contact', { ancre: 'devis', params: 'projet=print', classe: 'bouton', texte: c.t('print.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="ouv-info" data-info-cle data-anime="gsap">${c.t('print.info')}</p>
    </div>
    <div class="kakemono">
      ${c.media({ nom: 'pr-lor-sublime', alt: I['pr-lor-sublime'].alt, cadrage: I['pr-lor-sublime'].cadrage, classe: 'kakemono-arriere', sizes: '(max-width: 760px) 60vw, 26vw', ratio: '3 / 2' })}
      <div class="kakemono-tige" aria-hidden="true"></div>
      ${c.media({ nom: 'pr-madeleines', alt: I['pr-madeleines'].alt, cadrage: I['pr-madeleines'].cadrage, classe: 'kakemono-affiche', priorite: true, sizes: '(max-width: 760px) 70vw, 30vw', ratio: '4 / 5', attrs: 'data-iris-centre data-effet="kakemono"' })}
    </div>
  </div>
</section>

${R.categoriesPrint.map((cat, k) => html`<section class="cat-print ${FONDS[cat.cle]}" id="${cat.cle}">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <h2 class="titre" data-anime="lignes"><span class="titre-num">0${k + 1}</span> ${cat.nom}</h2>
      <p data-anime>${c.t('print.sections.' + cat.cle)}</p>
    </div>
    <div class="grille-real grille-real--${cat.cle}" data-anime="cascade">
      ${R.print.filter((r) => r.univers === cat.cle).map((r) => carte(c, r, { sizes: '(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 30vw', mediaAttrs: 'data-fx="zoom" data-fx-force="8"' }))}
    </div>
  </div>
</section>`)}

<section class="bat" id="bat">
  <div class="conteneur bat-grille">
    ${c.media({ nom: 'grok/imprimerie', alt: I['grok/imprimerie']?.alt || 'Sortie d’une presse offset', classe: 'bat-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-anime="rideau"' })}
    <div class="bat-texte">
      ${titre(c, { surtitre: c.t('print.bat.surtitre'), titre: c.t('print.bat.titre'), mot: c.t('print.bat.mot') })}
      <p data-anime>${c.t('print.bat.texte')}</p>
      ${c.media({ nom: 'pr-depliant-detoure', alt: I['pr-depliant-detoure'].alt, classe: 'bat-depliant', sizes: '(max-width: 760px) 70vw, 24vw', attrs: 'data-fx="vitesse" data-fx-force="5"' })}
    </div>
  </div>
</section>

${fin(c, 'print.fin', { params: 'projet=print' })}
${visionneuse(c)}
`;
};

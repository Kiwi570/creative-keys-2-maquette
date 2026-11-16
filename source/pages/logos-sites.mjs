/* Logos & sites « À vos marques… prêts ? Partez ! » : compte à rebours, éventail de logos, puis lèche-vitrine. */
import { html } from '../../outils/gabarit.mjs';
import { titre, carte, visionneuse, fin } from '../gabarits/blocs.mjs';

export const page = { cle: 'logos-sites', fichier: 'logos-sites', imagePartage: 'lg-erte-800.webp' };

const EVENTAIL = ['erte', 'dayfruits', 'najat', 'pauline', 'celina'];

export default (c) => {
  const R = c.donnees.realisations;
  const I = c.donnees.images;
  const parId = Object.fromEntries(R.logos.map((r) => [r.id, r]));
  return html`
<section class="ouv-depart bande-encre" id="debut">
  <div class="conteneur ouv-depart-grille">
    <div class="ouv-depart-texte">
      <p class="surtitre" data-anime="gsap">${c.t('logos.surtitre')}</p>
      <h1 class="titre titre--page" data-anime="gsap">
        <span class="ligne-masque"><span class="ouv-ligne">${c.t('logos.titre1')}</span></span>
        <span class="ligne-masque"><span class="ouv-ligne">${c.t('logos.titre2')}</span></span>
        <span class="ligne-masque"><em class="mot ouv-ligne depart-partez">${c.t('logos.titre3')}</em></span>
      </h1>
      <p class="masque-ecran-bas" data-anime="gsap">${c.t('logos.texte')}</p>
      <p class="ouv-actions" data-anime="gsap">${c.lien('contact', { ancre: 'devis', params: 'projet=logo', classe: 'bouton bouton--clair', texte: c.t('logos.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="ouv-info" data-info-cle data-anime="gsap">${c.t('logos.info')}</p>
    </div>
    <div class="depart">
      <div class="depart-feu" data-iris-centre="disque" data-effet="compte-a-rebours" aria-hidden="true">
        <span class="depart-chiffre" data-chiffre="3">${c.t('logos.trois')}</span>
        <span class="depart-chiffre" data-chiffre="2">${c.t('logos.deux')}</span>
        <span class="depart-chiffre" data-chiffre="1">${c.t('logos.un')}</span>
        <span class="depart-chiffre depart-go" data-chiffre="0">→</span>
      </div>
      <ul class="eventail" data-superpose aria-label="${c.s('logos.mur.titre')} ${c.s('logos.mur.mot')}">
        ${EVENTAIL.map((id, i) => html`<li class="eventail-carte" style="--k:${i - 2};--a:${Math.abs(i - 2)}">${c.media({ nom: 'lg-' + id, alt: parId[id].alt, cadrage: I['lg-' + id].cadrage, classe: 'logo-media', sizes: '(max-width: 760px) 40vw, 16vw', ratio: '3 / 2', priorite: i === 2 })}</li>`)}
      </ul>
    </div>
  </div>
</section>

<section class="logos-mur bande-blanche" id="logos">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <h2 class="titre" data-anime="lignes">${c.t('logos.mur.titre')} <em class="mot">${c.t('logos.mur.mot')}</em></h2>
      <p data-anime>${c.t('logos.mur.texte')}</p>
    </div>
    <div class="grille-real grille-real--logos" data-anime="cascade">
      ${R.logos.map((r) => carte(c, r, { sizes: '(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 30vw', attrs: 'data-survol="incline"' }))}
    </div>
  </div>
</section>

<section class="vitrine ecran epingle" id="vitrine" data-galerie-propre>
  <div class="conteneur gondole-tete">
    <div>${titre(c, { surtitre: c.t('logos.vitrine.surtitre'), titre: c.t('logos.vitrine.titre'), mot: c.t('logos.vitrine.mot') })}</div>
    <div class="gondole-intro"><p class="masque-ecran-bas">${c.t('logos.vitrine.texte')}</p></div>
  </div>
  <div class="piste gondole-piste" data-galerie data-effet="gondole" tabindex="0" role="region" aria-label="${c.s('logos.vitrine.region')}">
    ${R.web.map((r) => carte(c, r, { classe: 'carte-gondole carte-web', sizes: '(max-width: 760px) 80vw, 40vw' }))}
  </div>
  <div class="galerie-progres" aria-hidden="true"><span></span></div>
</section>

${fin(c, 'logos.fin', { params: 'projet=logo' })}
${visionneuse(c)}
`;
};

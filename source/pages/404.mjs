/* Page 404 « Rupture de stock » : un rayon vide, et le chemin vers les packagings. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv-404" id="debut">
  ${c.media({ nom: 'grok/rayon-vide', alt: c.donnees.images['grok/rayon-vide']?.alt || 'Rayon de magasin vide', priorite: true, classe: 'ouv-404-media', sizes: '100vw', attrs: 'data-iris-centre data-fx="zoom" data-fx-force="10"' })}
  <div class="conteneur ouv-404-texte">
    <p class="surtitre" data-anime="gsap">${c.t('p404.surtitre')}</p>
    <h1 class="titre titre--page" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.t('p404.titre1')}</span></span> <span class="ligne-masque"><em class="mot ouv-ligne">${c.t('p404.titre2')}</em></span></h1>
    <p data-anime="gsap">${c.t('p404.texte')}</p>
    <p class="ouv-actions" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('p404.accueil'), attrs: 'data-action-principale' })} ${c.lien('packaging', { classe: 'bouton bouton--contour', texte: c.t('p404.packaging') })}</p>
    <p class="ouv-info" data-info-cle data-anime="gsap"><span class="etiquette"><strong>Creative Keys</strong> <span>${c.t("p404.info")}</span></span></p>
  </div>
</section>
`;

/* Composants communs à toutes les pages de Creative Keys : titres, cartes de réalisation, visionneuse, appel final.
   Un seul système pour tout le site (même typographie, mêmes cartes, mêmes boutons). */
import { html, brut } from '../../outils/gabarit.mjs';

/* Titre de section : surtitre, titre en Bricolage très gras, un mot en italique bleu. */
export function titre(c, { surtitre, titre, mot, niveau = 2, classe = '', anime = 'lignes', apres = false }) {
  const h = `h${niveau}`;
  return html`${surtitre ? html`<p class="surtitre" data-anime>${surtitre}</p>` : ''}
  <${brut(h)} class="titre ${classe}" data-anime="${anime}">${apres ? html`<em class="mot">${mot}</em> ${titre}` : html`${titre} <em class="mot">${mot}</em>`}</${brut(h)}>`;
}

/* Carte de réalisation : image sur carte blanche, étiquette de rayon (marque · produit), bouton qui ouvre la visionneuse. */
export function carte(c, r, { sizes = '(max-width: 760px) 80vw, 30vw', classe = '', attrs = '', priorite = false, ratio = '3 / 2', bouton = true, mediaAttrs = '' } = {}) {
  const img = c.donnees.images?.[r.image];
  const grand = img ? `/assets/images/${r.image}-${Math.max(...img.largeurs)}.webp` : '';
  return html`<article class="carte-real ${classe}" id="r-${r.id}"${r.univers ? brut(` data-univers="${r.univers}"`) : ''}${brut(attrs ? ' ' + attrs : '')}>
  ${c.media({ nom: r.image, alt: r.alt, cadrage: img?.cadrage || '50% 50%', sizes, classe: 'carte-real-media', ratio, priorite, attrs: mediaAttrs })}
  <p class="etiquette"><strong>${r.marque}</strong> <span>${r.produit}</span></p>
  ${bouton ? html`<button type="button" class="carte-real-ouvrir" data-ouvrir="${r.id}" data-grand="${grand}" data-alt="${r.alt}" data-titre="${r.marque} · ${r.produit}" aria-label="${c.s('commun.voir')} : ${r.marque}, ${r.produit}"><span aria-hidden="true">+</span></button>` : ''}
</article>`;
}

/* Visionneuse (une par page qui a des galeries) : focus gardé, Échap, flèches, glissement, lien propre à chaque réalisation (#r-…). */
export function visionneuse(c) {
  return html`<div class="visionneuse" data-visionneuse data-recouvrement role="dialog" aria-modal="true" aria-label="${c.s('commun.visionneuse')}" hidden>
  <figure class="visionneuse-figure"><figcaption data-visionneuse-titre aria-live="polite"></figcaption></figure>
  <button type="button" class="visionneuse-bouton visionneuse-prec" data-visionneuse-prec aria-label="${c.s('commun.precedent')}">←</button>
  <button type="button" class="visionneuse-bouton visionneuse-suiv" data-visionneuse-suiv aria-label="${c.s('commun.suivant')}">→</button>
  <button type="button" class="visionneuse-bouton visionneuse-fermer" data-visionneuse-fermer>${c.t('commun.fermer')}</button>
</div>`;
}

/* Appel final : bande bleue, titre avec mot en italique jaune, devis et téléphone, mots géants. */
export function fin(c, prefixe, { params = '', geants = true } = {}) {
  return html`<section class="fin bande-bleue" id="fin">
  ${geants ? html`<div class="fin-geants" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel>
    <p data-fx-rangee>${c.t('accueil.fin.geants1')}</p>
    <p data-fx-rangee data-sens="-1">${c.t('accueil.fin.geants2')}</p>
  </div>` : ''}
  <div class="conteneur fin-grille">
    <h2 class="titre" data-anime="lignes">${c.t(prefixe + '.titre')} <em class="mot">${c.t(prefixe + '.mot')}</em></h2>
    <div>
      <p data-anime>${c.t(prefixe + '.texte')}</p>
      <p class="fin-actions" data-anime>
        ${c.lien('contact', { ancre: 'devis', params, classe: 'bouton bouton--clair', texte: c.t(prefixe + '.action'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
      </p>
    </div>
  </div>
</section>`;
}

/* Contact « Parlons de votre marque » : devis en trois étapes avec récapitulatif, téléphone et e-mail. */
import { html, brut } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/croquis-1280.webp' };

const PROJETS = ['packaging', 'print', 'logo', 'site', 'autre'];
const DELAIS = ['urgent', 'mois', 'trimestre', 'libre'];

export default (c) => {
  const k = (cle) => c.t('contact.' + cle);
  return html`
<section class="ouv-contact" id="debut">
  <div class="conteneur ouv-contact-grille">
    <div class="ouv-contact-texte">
      <p class="surtitre" data-anime="gsap">${k('surtitre')}</p>
      <h1 class="titre titre--page" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${k('titre1')}</span></span> <span class="ligne-masque"><em class="mot ouv-ligne">${k('titre2')}</em></span></h1>
      <p class="masque-ecran-tres-bas" data-anime="gsap">${k('texte')}</p>
      <p class="ouv-actions" data-anime="gsap"><a class="bouton" href="#devis" data-action-principale data-sans-transition>${c.t('commun.actionEntete')}</a> <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${k('appeler')}</a></p>
      <p class="ouv-info" data-info-cle data-anime="gsap">${c.site.contact.telephone} · ${k('zone')}</p>
    </div>
    ${c.media({ nom: 'grok/croquis', alt: c.donnees.images['grok/croquis']?.alt || 'Carnet de croquis de logos', classe: 'ouv-contact-media', priorite: true, sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
  </div>
</section>

<section class="devis bande-blanche" id="devis">
  <div class="conteneur devis-grille">
    <form class="devis-form" data-formulaire data-etapes novalidate>
      <ol class="devis-progres" aria-hidden="true">${[1, 2, 3].map((n) => html`<li data-progres="${n}"${brut(n === 1 ? ' class="actif"' : '')}><span>${n}</span><span class="lib">${k('e' + n)}</span></li>`)}</ol>
      <p class="devis-etape-num" aria-live="polite" data-etape-annonce>${c.t('contact.etapes', { n: 1 })}</p>

      <fieldset class="devis-etape" data-etape="1">
        <legend class="titre titre--etape">${k('projet')}</legend>
        <div class="choix-projet" data-anime="cascade">
          ${PROJETS.map((p, i) => html`<label class="choix"><input type="radio" name="projet" value="${p}"${brut(i === 0 ? ' required' : '')}><span class="choix-carte"><span class="choix-num">0${i + 1}</span>${k('p-' + p)}</span></label>`)}
        </div>
        <p class="devis-nav"><button type="button" class="bouton" data-etape-suivante>${k('suivant')} →</button></p>
      </fieldset>

      <fieldset class="devis-etape" data-etape="2" hidden>
        <legend class="titre titre--etape">${k('e2')}</legend>
        <div class="champ"><label for="description">${k('description')}</label><textarea id="description" name="description" rows="5" required aria-describedby="description-aide"></textarea><p class="champ-aide" id="description-aide">${k('descriptionAide')}</p></div>
        <div class="champ"><label for="delai">${k('delai')}</label><select id="delai" name="delai" required><option value=""></option>${DELAIS.map((d) => html`<option value="${d}">${k('d-' + d)}</option>`)}</select></div>
        <p class="devis-nav"><button type="button" class="bouton bouton--contour" data-etape-precedente>← ${k('precedent')}</button> <button type="button" class="bouton" data-etape-suivante>${k('suivant')} →</button></p>
      </fieldset>

      <fieldset class="devis-etape" data-etape="3" hidden>
        <legend class="titre titre--etape">${k('e3')}</legend>
        <div class="champs-deux">
          <div class="champ"><label for="nom">${k('nom')}</label><input id="nom" name="nom" autocomplete="name" required></div>
          <div class="champ"><label for="entreprise">${k('entreprise')}</label><input id="entreprise" name="entreprise" autocomplete="organization"></div>
          <div class="champ"><label for="email">${k('email')}</label><input id="email" name="email" type="email" autocomplete="email" inputmode="email" required></div>
          <div class="champ"><label for="telephone">${k('telephone')}</label><input id="telephone" name="telephone" type="tel" autocomplete="tel" inputmode="tel"></div>
        </div>
        <p class="mention-donnees">${k('donnees')} ${k('confidentialite')}</p>
        <p class="devis-nav"><button type="button" class="bouton bouton--contour" data-etape-precedente>← ${k('precedent')}</button> <button type="submit" class="bouton">${k('envoyer')}</button></p>
        <p data-message-envoi tabindex="-1" hidden data-texte="${c.s('contact.envoye')}"></p>
      </fieldset>
    </form>

    <aside class="devis-recap" aria-label="${c.s('contact.recap')}">
      <div class="recap-ticket">
        <p class="recap-titre">${k('recap')}</p>
        <dl data-recap>
          <div><dt>${k('e1')}</dt><dd data-recap-projet>${k('recapVide')}</dd></div>
          <div><dt>${k('delai')}</dt><dd data-recap-delai>·</dd></div>
          <div><dt>${k('e3')}</dt><dd data-recap-qui>·</dd></div>
        </dl>
        <p class="etiquette"><strong>Creative Keys</strong> <span>${k('info')}</span></p>
      </div>
      <div class="direct">
        <p class="surtitre">${k('direct')}</p>
        <p><a class="direct-lien" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
        <p><a class="direct-lien direct-lien--mail" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
        <p>${k('zone')}</p>
        <p class="direct-reseaux">${k('reseaux')} : <a href="${c.site.contact.instagram}" target="_blank" rel="noopener">Instagram<span class="visuellement-cache"> ${c.s('commun.nouvelOnglet')}</span></a></p>
      </div>
    </aside>
  </div>
</section>
`;
};

/* Effets propres à Creative Keys (direction « En rayon »). Le socle gère l'ouverture, les transitions, l'en-tête,
   le menu, les mesures et la bibliothèque d'effets (lignes, cascade, rideau, parallaxe, zoom, galerie, plein écran,
   mots géants, vitesse, magnétique, incline). Ici : l'intro en rayon, les rayons qui défilent (lineaire), la tablette
   qui sort du rang (vedette), la mise en rayon (Packaging), le kakémono (Print), le compte à rebours (Logos & sites),
   le fil des étapes, la visionneuse, les filtres et le devis en trois étapes. */
import { demarrer, boucle, versObjet, quand, suivre, lacher, rafraichir } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const telephone = () => window.matchMedia('(max-width: 760px)').matches;
/* Sur téléphone, l'image du magasin part d'un cadre plus grand (sinon l'écran est presque vide au début). */
if (telephone()) { const m = document.querySelector('.magasin'); if (m) m.dataset.fxDepart = 'inset(13% 8% 13% 8% round 14px)'; }
let rayonsArretes = false;

/* ---------- Vitesse de défilement (px/s), lissée dans les boucles, jamais de lecture de mise en page ---------- */
const vitesse = { brute: 0, y: window.scrollY, t: performance.now(), lisse: 0 };
window.addEventListener('scroll', () => {
  const t = performance.now(), dt = Math.max(8, t - vitesse.t);
  const v = ((window.scrollY - vitesse.y) / dt) * 1000;
  vitesse.brute = Math.abs(v) > 6000 ? 0 : v;
  vitesse.y = window.scrollY; vitesse.t = t;
}, { passive: true });

/* ---------- Rayons qui défilent (accueil) : lineaire ---------- */
function rayons() {
  $$('[data-rayon]').forEach((rayon) => {
    const piste = $('.rayon-piste', rayon);
    if (!piste) return;
    const sens = Number(rayon.dataset.sens) || 1;
    piste.dataset.effet = 'lineaire';
    let moitie = 0, x = sens > 0 ? 0 : -1;
    const mesurer = () => { moitie = piste.scrollWidth / 2; if (x === -1) x = -moitie / 2; };
    mesurer();
    new ResizeObserver(mesurer).observe(piste);
    const poser = gsap ? gsap.quickSetter(piste, 'x', 'px') : (v) => { piste.style.transform = `translateX(${v}px)`; };
    boucle(rayon, (dt) => {
      if (rayonsArretes) return;
      vitesse.lisse += (vitesse.brute - vitesse.lisse) * (1 - Math.exp(-dt * 6));
      vitesse.brute *= Math.exp(-dt * 4);
      const v = 26 + Math.min(900, Math.abs(vitesse.lisse)) * 0.35;
      if (!moitie) return;
      x -= sens * v * dt;
      if (x <= -moitie) x += moitie;
      if (x > 0) x -= moitie;
      poser(x);
    });
  });
}

function pauseRayons() {
  const b = document.querySelector('[data-rayons-pause]');
  if (!b) return;
  b.addEventListener('click', () => {
    rayonsArretes = !rayonsArretes;
    b.setAttribute('aria-pressed', String(rayonsArretes));
    document.documentElement.classList.toggle('rayons-arretes', rayonsArretes);
  });
}

/* ---------- Tablette qui sort du rang : vedette (défilement) ---------- */
function vedette() {
  const objet = $('.vedette-objet');
  if (!objet || !gsap || !window.ScrollTrigger) return;
  objet.dataset.effet = 'vedette';
  gsap.fromTo(objet, { yPercent: 0, rotation: 0, scale: 1 }, {
    yPercent: 16, rotation: 7, scale: 0.92, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 },
  });
}

/* ---------- Mise en rayon (Packaging) : les rangs glissent en sens opposés au défilement ---------- */
function murRayon() {
  if (!gsap || !window.ScrollTrigger) return;
  $$('[data-mur-rang]').forEach((rang, i) => {
    rang.dataset.effet = 'mise-en-rayon';
    gsap.fromTo(rang, { xPercent: 0 }, { xPercent: i % 2 ? 5 : -5, ease: 'none', scrollTrigger: { trigger: '.mur', start: 'top 80%', end: 'bottom top', scrub: 0.5 } });
  });
}
function poserFacings(tl, a) {
  const facings = $$('.mur-facing:not([data-iris-centre])');
  if (!facings.length) return;
  const lancer = () => { document.documentElement.classList.add('mur-pose'); return gsap.fromTo(facings, { y: -70, rotation: () => gsap.utils.random(-12, 12), opacity: 0 }, {
    y: 0, rotation: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', stagger: { each: 0.045, from: 'random' }, overwrite: true,
  }); };
  if (tl) tl.call(lancer, null, a); else lancer();
}

/* ---------- Kakémono (Print) : l'affiche se déroule, puis remonte doucement au défilement ---------- */
function kakemono() {
  const affiche = $('.kakemono-affiche');
  if (!affiche || !gsap || !window.ScrollTrigger) return;
  affiche.dataset.effet = 'kakemono';
  gsap.fromTo(affiche, { yPercent: 0 }, { yPercent: -7, ease: 'none', scrollTrigger: { trigger: '.ouv-print', start: 'top top', end: 'bottom top', scrub: 0.5 } });
  gsap.fromTo('.kakemono-arriere', { rotation: 5 }, { rotation: 12, ease: 'none', scrollTrigger: { trigger: '.ouv-print', start: 'top top', end: 'bottom top', scrub: 0.5 } });
}
function derouler(tl, a) {
  const affiche = $('.kakemono-affiche');
  if (!affiche) return;
  const lancer = () => {
    document.documentElement.classList.add('kakemono-pose');
    gsap.fromTo(affiche, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.inOut' });
    gsap.fromTo('.kakemono-arriere', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.3 });
  };
  if (tl) tl.call(lancer, null, a); else lancer();
}

/* ---------- Compte à rebours (Logos & sites) : 3, 2, 1, puis les logos jaillissent en éventail ---------- */
function compteRebours(tl, a) {
  const feu = $('.depart-feu');
  if (!feu) return;
  const chiffres = $$('.depart-chiffre', feu);
  const cartes = $$('.eventail-carte .media');
  const lancer = () => {
    gsap.set(cartes, { opacity: 0 });
    document.documentElement.classList.add('depart-pose');
    const t = gsap.timeline();
    chiffres.forEach((c, i) => {
      t.fromTo(c, { opacity: 0, scale: 1.6 }, { opacity: 1, scale: 1, duration: 0.22, ease: 'power3.out' }, i * 0.42);
      if (i < chiffres.length - 1) t.to(c, { opacity: 0, scale: 0.7, duration: 0.16, ease: 'power2.in' }, i * 0.42 + 0.3);
    });
    t.call(() => feu.classList.add('go'), null, (chiffres.length - 1) * 0.42);
    t.fromTo(cartes, { opacity: 0, scale: 0.4, y: 60 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.6)', stagger: 0.06 }, (chiffres.length - 1) * 0.42 + 0.05);
  };
  if (tl) tl.call(lancer, null, a); else lancer();
}
function departDefilement() {
  const feu = $('.depart-feu');
  if (!feu || !gsap || !window.ScrollTrigger) return;
  feu.dataset.effet = 'compte-a-rebours';
  gsap.fromTo(feu, { rotation: 0, scale: 1 }, { rotation: -25, scale: 0.86, ease: 'none', scrollTrigger: { trigger: '.ouv-depart', start: 'top top', end: 'bottom top', scrub: 0.5 } });
  gsap.fromTo('.eventail', { scale: 1 }, { scale: 1.12, ease: 'none', scrollTrigger: { trigger: '.ouv-depart', start: 'top top', end: 'bottom top', scrub: 0.5 } });
}

/* ---------- Galerie épinglée (tête de gondole, lèche-vitrine) : comme data-fx="galerie" du socle, mais sans
   anticipatePin, qui fait sauter la page à l'entrée et à la sortie de l'épinglage avec le défilement adouci. ---------- */
function galeriesPropres() {
  if (!gsap || !window.ScrollTrigger) return;
  $$('[data-galerie-propre]').forEach((el) => {
    const piste = $('[data-galerie]', el);
    if (!piste) return;
    const barre = $('.galerie-progres span', el);
    gsap.matchMedia().add('(min-width: 761px)', () => {
      const garde = ['tabindex', 'role', 'aria-label'].map((a) => [a, piste.getAttribute(a)]);
      garde.forEach(([a]) => piste.removeAttribute(a));
      const distance = () => Math.max(0, piste.scrollWidth - document.documentElement.clientWidth);
      const tw = gsap.fromTo(piste, { x: 0 }, {
        x: () => -distance(), ease: 'none',
        scrollTrigger: { trigger: el, start: 'top top', end: () => '+=' + distance(), pin: true, scrub: 0.6, invalidateOnRefresh: true,
          onUpdate: (st) => { if (barre) barre.style.transform = `scaleX(${st.progress})`; } },
      });
      const focus = (e) => {
        const st = tw.scrollTrigger, carte = [...piste.children].find((c) => c.contains(e.target));
        if (!st || !carte || !distance()) return;
        const p = Math.min(1, Math.max(0, (carte.offsetLeft - 40) / distance()));
        window.scrollTo({ top: st.start + p * (st.end - st.start), behavior: 'instant' });
      };
      piste.addEventListener('focusin', focus);
      return () => { piste.removeEventListener('focusin', focus); garde.forEach(([a, v]) => { if (v !== null) piste.setAttribute(a, v); }); };
    });
  });
}

function glisseGondole() {
  if (!gsap || !window.ScrollTrigger) return;
  $$('[data-glisse]').forEach((el) => {
    const piste = $('[data-galerie]', el);
    if (!piste) return;
    gsap.matchMedia().add('(min-width: 761px)', () => {
      const distance = () => Math.max(0, piste.scrollWidth - document.documentElement.clientWidth);
      gsap.fromTo(piste, { x: 0 }, { x: () => -distance(), ease: 'none', scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 15%', scrub: 0.6, invalidateOnRefresh: true } });
    });
  });
}

/* ---------- Du logo au linéaire : le fil se remplit, l'image suit l'étape ---------- */
function etapes() {
  const cadre = $('.etapes-liste-cadre');
  if (!cadre || !gsap || !window.ScrollTrigger) return;
  const fil = $('.etapes-fil span', cadre);
  fil.dataset.effet = 'etapes';
  gsap.fromTo(fil, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: cadre, start: 'top 70%', end: 'bottom 55%', scrub: 0.4 } });
  const items = $$('.etape', cadre), medias = $$('.etapes-media');
  const activer = (n) => {
    items.forEach((it, i) => it.classList.toggle('actif', i === n));
    medias.forEach((m, i) => m.classList.toggle('actif', i === n));
  };
  activer(0);
  items.forEach((it, i) => window.ScrollTrigger.create({ trigger: it, start: 'top 62%', end: 'bottom 62%', onToggle: (s) => { if (s.isActive) activer(i); } }));
}

/* ---------- Visionneuse : focus gardé, Échap, flèches, glissement, lien propre (#r-…) ---------- */
function visionneuse() {
  const v = $('[data-visionneuse]');
  if (!v) return;
  const titre = $('[data-visionneuse-titre]', v);
  let img = null;
  let liste = [], n = 0, retour = null;
  const visibles = () => $$('[data-ouvrir]').filter((b) => !b.closest('[hidden]'));
  const montrer = (i) => {
    n = (i + liste.length) % liste.length;
    const b = liste[n];
    if (!img) { img = document.createElement('img'); img.decoding = 'async'; $('.visionneuse-figure', v).prepend(img); }
    img.src = b.dataset.grand; img.alt = b.dataset.alt; titre.textContent = b.dataset.titre;
    try { history.replaceState(history.state, '', `#r-${b.dataset.ouvrir}`); } catch {}
  };
  const ouvrir = (b) => {
    liste = visibles(); retour = b;
    montrer(Math.max(0, liste.indexOf(b)));
    v.hidden = false;
    document.documentElement.classList.add('defilement-bloque');
    suivre(v);
    $('[data-visionneuse-fermer]', v).focus();
    if (gsap) gsap.fromTo(v, { opacity: 0 }, { opacity: 1, duration: 0.25 });
  };
  const fermer = () => {
    v.hidden = true;
    document.documentElement.classList.remove('defilement-bloque');
    lacher(v);
    try { history.replaceState(history.state, '', location.pathname + location.search); } catch {}
    if (retour) retour.focus();
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ouvrir]');
    if (b) { e.preventDefault(); ouvrir(b); return; }
    const media = e.target.closest('.carte-real .carte-real-media');
    if (media) { const bt = $('[data-ouvrir]', media.closest('.carte-real')); if (bt) ouvrir(bt); }
  });
  $('[data-visionneuse-fermer]', v).addEventListener('click', fermer);
  $('[data-visionneuse-prec]', v).addEventListener('click', () => montrer(n - 1));
  $('[data-visionneuse-suiv]', v).addEventListener('click', () => montrer(n + 1));
  v.addEventListener('click', (e) => { if (e.target === v) fermer(); });
  v.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); fermer(); }
    else if (e.key === 'ArrowLeft') montrer(n - 1);
    else if (e.key === 'ArrowRight') montrer(n + 1);
    else if (e.key === 'Tab') {
      const f = $$('button', v);
      const i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  let x0 = null;
  v.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  v.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) montrer(n + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });
  /* Lien profond : #r-<id> ouvre directement la réalisation, une fois la page prête. */
  const depuisAdresse = () => {
    const m = location.hash.match(/^#r-([\w-]+)$/);
    const b = m && $(`[data-ouvrir="${CSS.escape(m[1])}"]`);
    if (b && v.hidden) ouvrir(b);
  };
  quand('pret', depuisAdresse);
  window.addEventListener('hashchange', depuisAdresse);
}

/* ---------- Filtres (Packaging) : fondu, jamais de page vide, filtre gardé dans l'adresse ---------- */
function filtres() {
  const groupe = $('[data-filtres]');
  const grille = $('[data-grille-filtree]');
  if (!groupe || !grille) return;
  const etat = $('[data-filtres-etat]');
  const cartes = $$('.carte-real', grille);
  const appliquer = (u, anime = true) => {
    $$('[data-filtre]', groupe).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === u)));
    const garde = (c) => u === 'tout' || c.dataset.univers === u;
    const fin = () => {
      cartes.forEach((c) => { c.hidden = !garde(c); c.classList.remove('sort'); });
      const n = cartes.filter(garde).length;
      if (etat) etat.textContent = `${n} réalisations`;
      rafraichir && rafraichir();
      if (anime && gsap) gsap.fromTo(cartes.filter(garde), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.03, ease: 'power2.out', clearProps: 'opacity,transform' });
    };
    if (anime) { cartes.filter((c) => !c.hidden && !garde(c)).forEach((c) => c.classList.add('sort')); setTimeout(fin, 220); } else fin();
    const url = new URL(location.href);
    if (u === 'tout') url.searchParams.delete('univers'); else url.searchParams.set('univers', u);
    try { history.replaceState(history.state, '', url.pathname + url.search + url.hash); } catch {}
  };
  groupe.addEventListener('click', (e) => {
    const b = e.target.closest('[data-filtre]');
    if (!b || b.disabled) return;
    appliquer(b.dataset.filtre);
  });
  const u = new URLSearchParams(location.search).get('univers');
  if (u && $(`[data-filtre="${CSS.escape(u)}"]:not([disabled])`, groupe)) appliquer(u, false);
}

/* ---------- Devis en trois étapes, avec récapitulatif en direct ---------- */
function devis() {
  const f = $('[data-etapes]');
  if (!f) return;
  const etapesF = $$('[data-etape]', f), annonce = $('[data-etape-annonce]', f);
  const libelle = (champ) => {
    if (!champ) return '';
    if (champ.type === 'radio') { const c = $(`[name="${champ.name}"]:checked`, f); return c ? $('.choix-carte', c.closest('.choix')).textContent.replace(/^\s*0\d/, '').trim() : ''; }
    if (champ.tagName === 'SELECT') return champ.selectedOptions[0]?.textContent.trim() || '';
    return champ.value.trim();
  };
  const recap = () => {
    const p = libelle($('[name="projet"]', f));
    $('[data-recap-projet]').textContent = p || $('[data-recap-projet]').dataset.vide || $('[data-recap-projet]').textContent;
    $('[data-recap-delai]').textContent = libelle($('[name="delai"]', f)) || '·';
    $('[data-recap-qui]').textContent = [libelle($('[name="nom"]', f)), libelle($('[name="entreprise"]', f))].filter(Boolean).join(', ') || '·';
  };
  const vide = $('[data-recap-projet]'); vide.dataset.vide = vide.textContent;
  const verifierEtape = (e) => {
    let premier = null;
    $$('input, select, textarea', e).filter((c) => c.required).forEach((c) => {
      const ok = c.type === 'radio' ? !!$(`[name="${c.name}"]:checked`, f) : !!c.value.trim();
      const id = 'erreur-' + (c.id || c.name);
      let p = document.getElementById(id);
      if (!ok) {
        if (!p) { p = document.createElement('p'); p.id = id; p.className = 'champ-erreur'; p.setAttribute('aria-live', 'polite'); (c.closest('.champ') || c.closest('fieldset')).appendChild(p); }
        p.textContent = c.type === 'radio' ? 'Choisissez un type de projet.' : 'Ce champ est à remplir.';
        c.setAttribute('aria-invalid', 'true');
        if (!premier) premier = c;
      } else if (p) { p.textContent = ''; c.removeAttribute('aria-invalid'); }
    });
    if (premier) premier.focus();
    return !premier;
  };
  let courante = 0;
  const aller = (i) => {
    const avant = etapesF[courante], apres = etapesF[i];
    const h0 = f.offsetHeight;
    avant.hidden = true; apres.hidden = false;
    courante = i;
    $$('[data-progres]', f).forEach((li, k) => { li.classList.toggle('actif', k === i); li.classList.toggle('fait', k < i); });
    if (annonce) annonce.textContent = `Étape ${i + 1} sur 3`;
    if (gsap) {
      const h1 = f.offsetHeight;
      gsap.fromTo(f, { height: h0 }, { height: h1, duration: 0.35, ease: 'power2.out', clearProps: 'height' });
      gsap.fromTo(apres, { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out', clearProps: 'opacity,transform' });
    }
    const cible = $('input, select, textarea', apres);
    if (cible) cible.focus({ preventScroll: true });
  };
  f.addEventListener('click', (e) => {
    if (e.target.closest('[data-etape-suivante]')) { if (verifierEtape(etapesF[courante])) aller(Math.min(etapesF.length - 1, courante + 1)); }
    else if (e.target.closest('[data-etape-precedente]')) aller(Math.max(0, courante - 1));
  });
  f.addEventListener('input', recap);
  f.addEventListener('change', recap);
  recap();
}

/* ---------- Animations d'ouverture propres à chaque page ---------- */
function ouverturePage(tl, a) {
  const cible = (s) => $$(s);
  if ($('.hero')) {
    const lignes = cible('.hero-ligne');
    if (tl) {
      tl.set('.hero-titre', { opacity: 1 }, a).fromTo(lignes, { yPercent: 140, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out' }, a)
        .fromTo('.hero-surtitre, .hero-intro, .hero-actions, .hero-info', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 }, a + 0.15)
        .fromTo('.hero-etiquette', { scale: 1.5, rotation: -18, opacity: 0 }, { scale: 1, rotation: -4, opacity: 1, duration: 0.45, ease: 'back.out(2)' }, a + 0.3);
    } else {
      gsap.set('.hero-titre', { opacity: 1 });
      gsap.fromTo(lignes, { yPercent: 140, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.hero-surtitre, .hero-intro, .hero-actions, .hero-info', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, delay: 0.25 });
      gsap.fromTo('.hero-etiquette', { scale: 1.5, rotation: -18, opacity: 0 }, { scale: 1, rotation: -4, opacity: 1, duration: 0.5, ease: 'back.out(2)', delay: 0.5 });
      gsap.fromTo('.vedette-objet', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.15 });
    }
    return;
  }
  /* Pages intérieures : titre ligne à ligne, puis le reste ; et le geste propre à la page. */
  const titre = $('main h1[data-anime="gsap"]');
  const suite = cible('main #debut [data-anime="gsap"]:not(h1)');
  if (titre) {
    const lignes = $$('.ouv-ligne', titre);
    if (tl) {
      tl.set(titre, { opacity: 1 }, a).fromTo(lignes, { yPercent: 140 }, { yPercent: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out' }, a)
        .fromTo(suite, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 }, a + 0.15);
    } else {
      gsap.set(titre, { opacity: 1 });
      gsap.fromTo(lignes, { yPercent: 140 }, { yPercent: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo(suite, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, delay: 0.25 });
    }
  }
  if ($('.mur')) poserFacings(tl, a);
  if ($('.kakemono')) derouler(tl, tl ? a - 0.3 : 0);
  if ($('.depart-feu')) compteRebours(tl, tl ? a - 0.2 : 0);
}

demarrer({
  preparer() {
    galeriesPropres();
    glisseGondole();
    rayons();
    pauseRayons();
    vedette();
    murRayon();
    kakemono();
    departDefilement();
    etapes();
    visionneuse();
    filtres();
    devis();
  },
  /* Intro « En rayon » (moins de 3 s) : étagères qui se tracent, packagings en gris, la tablette reprend ses couleurs,
     sort du rang et glisse jusqu'à l'objet d'ouverture de la page ; le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.intro-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.55, stagger: 0.08, ease: 'power3.inOut' }, 0)
      .fromTo('.ouverture-nom, .ouverture-ligne', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08 }, 0.05)
      .fromTo('.intro-etagere:nth-child(odd) .intro-facing', { x: '30vw', opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, stagger: 0.04 }, 0.25)
      .fromTo('.intro-etagere:nth-child(even) .intro-facing', { x: '-30vw', opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, stagger: 0.04 }, 0.3)
      .fromTo('.ouverture-objet', { opacity: 0, filter: 'grayscale(1)', scale: 0.85 }, { opacity: 1, filter: 'grayscale(0)', scale: 1, duration: 0.45, ease: 'back.out(1.6)' }, 0.55)
      .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: -12, duration: 0.25 }, 0.8);
    versObjet(tl, { a: 1.0, duree: 0.5, ouverture: 0.8 });
    ouverturePage(tl, 1.55);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-titre, .hero-ligne, .ouv-ligne, .hero-surtitre, .hero-intro, .hero-actions, .hero-info, .hero-etiquette, .vedette-objet, main #debut [data-anime="gsap"], .mur-facing, .kakemono-arriere, .eventail-carte .media, .depart-chiffre', { clearProps: 'transform,opacity' });
    gsap.set('.kakemono-affiche', { clipPath: 'inset(0% 0% 0% 0%)' });
    document.documentElement.classList.add('mur-pose', 'kakemono-pose', 'depart-pose');
    const feu = $('.depart-feu');
    if (feu) { feu.classList.add('go'); $$('.depart-chiffre', feu).forEach((c) => { c.style.opacity = c.dataset.chiffre === '0' ? '1' : '0'; }); }
  },
  arrivee() {
    if (!gsap) return;
    ouverturePage(null, 0);
  },
});

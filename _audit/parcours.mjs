/* Parcours propres à Creative Keys : filtres de la page Packaging, visionneuse (ouverture, flèches, Échap, lien #r-…),
   devis en trois étapes (étape bloquée sans choix, préremplissage ?projet=, récapitulatif, double envoi). */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  for (const taille of ['390×844', '1366×768']) {
    const { ctx, page } = await contexte({ taille: T(taille) });
    try {
      /* Filtres : chaque univers garde ses cartes, aucune page vide, l'adresse garde le filtre. */
      await page.goto(BASE + '/packaging', { waitUntil: 'load' });
      await attendrePret(page);
      const univers = await page.$$eval('[data-filtre]:not([disabled])', (b) => b.map((x) => x.dataset.filtre));
      for (const u of univers) {
        await page.click(`[data-filtre="${u}"]`);
        await attendre(500);
        const r = await page.evaluate((uu) => {
          const cartes = [...document.querySelectorAll('[data-grille-filtree] .carte-real')];
          const vis = cartes.filter((c) => !c.hidden);
          const bons = vis.every((c) => uu === 'tout' || c.dataset.univers === uu);
          const attendu = uu === 'tout' ? cartes.length : cartes.filter((c) => c.dataset.univers === uu).length;
          return { n: vis.length, bons, attendu, url: location.search };
        }, u);
        if (!r.n) R.echec('filtres', `filtre ${u} : grille vide`, { page: '/packaging', taille });
        if (!r.bons || r.n !== r.attendu) R.echec('filtres', `filtre ${u} : ${r.n} cartes visibles au lieu de ${r.attendu}`, { page: '/packaging', taille });
        if (u !== 'tout' && !r.url.includes('univers=' + u)) R.regarder('filtres', `filtre ${u} absent de l'adresse`, { page: '/packaging', taille });
      }
      /* Filtre dans l'adresse : la sélection est rétablie. */
      await page.goto(BASE + '/packaging?univers=boissons', { waitUntil: 'load' });
      await attendrePret(page);
      const n = await page.$$eval('[data-grille-filtree] .carte-real:not([hidden])', (c) => c.length);
      if (n !== 3) R.echec('filtres', `?univers=boissons : ${n} cartes au lieu de 3`, { page: '/packaging', taille });

      /* Visionneuse : ouverture, image chargée, flèche, Échap, focus rendu. */
      await page.goto(BASE + '/packaging', { waitUntil: 'load' });
      await attendrePret(page);
      const bouton = page.locator('[data-ouvrir]').first();
      await bouton.scrollIntoViewIfNeeded();
      await bouton.click();
      await attendre(500);
      const ouverte = await page.evaluate(() => { const v = document.querySelector('[data-visionneuse]'); const i = v.querySelector('img'); return !v.hidden && i.complete && i.naturalWidth > 0 && location.hash.startsWith('#r-'); });
      if (!ouverte) R.echec('visionneuse', 'la visionneuse ne s’ouvre pas avec son image et son lien #r-…', { page: '/packaging', taille });
      const t1 = await page.textContent('[data-visionneuse-titre]');
      await page.keyboard.press('ArrowRight');
      await attendre(200);
      const t2 = await page.textContent('[data-visionneuse-titre]');
      if (t1 === t2) R.echec('visionneuse', 'la flèche droite ne change pas de réalisation', { page: '/packaging', taille });
      await page.keyboard.press('Escape');
      await attendre(300);
      const fermee = await page.evaluate(() => document.querySelector('[data-visionneuse]').hidden && document.activeElement?.matches('[data-ouvrir]'));
      if (!fermee) R.echec('visionneuse', 'Échap ne ferme pas, ou le focus ne revient pas sur la carte', { page: '/packaging', taille });

      /* Lien profond vers une réalisation. */
      await page.goto(BASE + '/packaging#r-larzac', { waitUntil: 'load' });
      await attendrePret(page);
      await attendre(600);
      const titre = await page.evaluate(() => { const v = document.querySelector('[data-visionneuse]'); return v.hidden ? '' : v.querySelector('[data-visionneuse-titre]').textContent; });
      if (!/Larzac/.test(titre)) R.echec('visionneuse', 'le lien #r-larzac n’ouvre pas la réalisation', { page: '/packaging', taille });

      /* Devis : étape 1 bloquée sans choix, puis préremplie par ?projet=print, récapitulatif, envoi unique. */
      await page.goto(BASE + '/contact#devis', { waitUntil: 'load' });
      await attendrePret(page);
      await page.click('[data-etape="1"] [data-etape-suivante]');
      await attendre(300);
      if (await page.isHidden('[data-etape="1"]')) R.echec('devis', 'l’étape 1 passe sans choix de projet', { page: '/contact', taille });
      await page.goto(BASE + '/contact?projet=print#devis', { waitUntil: 'load' });
      await attendrePret(page);
      const coche = await page.$eval('[name="projet"][value="print"]', (c) => c.checked);
      if (!coche) R.echec('devis', '?projet=print ne présélectionne pas le projet', { page: '/contact', taille });
      await page.click('[data-etape="1"] [data-etape-suivante]');
      await page.fill('#description', 'Une affiche et un kakémono pour un salon.');
      await page.selectOption('#delai', 'mois');
      await page.click('[data-etape="2"] [data-etape-suivante]');
      await page.fill('#nom', 'Test Visiteur');
      await page.fill('#email', 'test@exemple.fr');
      const recap = await page.textContent('[data-recap]');
      if (!/imprimé/i.test(recap) || !/Test Visiteur/.test(recap)) R.echec('devis', 'le récapitulatif ne suit pas la saisie', { page: '/contact', taille });
      const envoi = page.locator('[data-etape="3"] [type="submit"]');
      await envoi.click();
      await attendre(200);
      const ok = await page.evaluate(() => { const m = document.querySelector('[data-message-envoi]'); const b = document.querySelector('[data-etape="3"] [type="submit"]'); return m && !m.hidden && b.disabled; });
      if (!ok) R.echec('devis', 'pas de message « simulé » ou bouton encore actif après l’envoi', { page: '/contact', taille });
    } finally { await ctx.close(); }
  }
}

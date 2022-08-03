import GooglePageHome from '../pages/google-home-page';
import GooglePageResults from '../pages/google-results-page';
import key from '../utils/keyboard-key';

fixture `Example to typing text with Testcafe`
    .page `https://www.google.com`;

// Tests
test('Text typing and push Enter Key', async t => {
    await t
        .click(GooglePageHome.button.cookie.accepted)
        .click(GooglePageHome.inputSearchBar)
        .typeText(GooglePageHome.inputSearchBar, 'la taverne du test')
        .pressKey(key.enter)
        .expect(GooglePageResults.stats.innerText).contains('résultats')
        .expect(GooglePageResults.stats.innerText).contains('secondes')
        .expect(GooglePageResults.stats.innerText).contains('Environ')
        .expect(GooglePageResults.firstLink.innerText).eql('https://latavernedutesteur.fr');
});

test('Text typing and Select first link', async t => {
    await GooglePageHome.SearchSentence('la taverne du test')
    await t
        .click(GooglePageHome.firstChild)
        .expect(GooglePageResults.stats.innerText).contains('résultats')
        .expect(GooglePageResults.stats.innerText).contains('secondes')
        .expect(GooglePageResults.stats.innerText).contains('Environ')
        .expect(GooglePageResults.firstLink.innerText).eql('https://latavernedutesteur.fr');
});

test('Text typing and click on the Search button', async t => {
    await GooglePageHome.SearchSentence('la taverne du test')
    await t
        .click(GooglePageHome.button.search);
    await GooglePageResults.expectedResults();
});


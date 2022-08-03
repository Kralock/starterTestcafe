import { Selector, t } from 'testcafe';


class GooglePageResults {
    constructor () {
        this.stats                 = Selector('#result-stats');
        this.firstLink             = Selector('.TbwUpd');
        this.expectedString = {
            result: 'résultats',
            about: 'Environ',
            seconds: 'secondes',
            link: 'https://latavernedutesteur.fr',
        }
    }

    async expectedResults() {
        await t
            .expect(this.stats.innerText).contains(this.expectedString.result)
            .expect(this.stats.innerText).contains(this.expectedString.seconds)
            .expect(this.stats.innerText).contains(this.expectedString.about)
            .expect(this.firstLink.innerText).eql(this.expectedString.link);
    }

}

export default new GooglePageResults();

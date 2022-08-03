import { Selector, t } from 'testcafe';

class GooglePageHome {
    constructor () {
        this.button = {
            cookie: {
                accepted: Selector('#L2AGLb')
            },
            search: Selector('.gNO89b')
        };
        this.inputSearchBar        = Selector('.gLFyf');
        this.firstChild        = Selector('.G43f7e').child(0);
    }

    async SearchSentence(SearchString) {
        await t
            .click(this.button.cookie.accepted)
            .click(this.inputSearchBar)
            .typeText(this.inputSearchBar, SearchString)
    }
}

export default new GooglePageHome();

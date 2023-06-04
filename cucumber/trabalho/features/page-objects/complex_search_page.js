
const Page = require('./page');

class ComplexSearchPage extends Page {

    get selectorToggle() {
        return $("#advanced-search > div.select.type > select");
    }

    async selectContainsOption() {
        await this.selectorToggle.selectByAttribute('value', 'contem')
    }

    async selectStartsWithOption() {
        await this.selectorToggle.selectByAttribute('value', 'comecam')
    }

    async selectEndsWithOption() {
        await this.selectorToggle.selectByAttribute('value', 'terminadas')
    }

    get inputField () {
        return $("#qword")
    }

    get btnSubmit () {
        return $("#btn-submit")
    }
    
    get listTitle () {
        return $("#content > div.col-xs-12.col-md-8.card > h1")
    }

    open () {
        return super.open("exemplos-de-palavras");
    }
}

module.exports = new ComplexSearchPage();

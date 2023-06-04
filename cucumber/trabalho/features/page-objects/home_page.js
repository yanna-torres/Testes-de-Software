
const Page = require('./page');

class HomePage extends Page {
    get raffledWord () {
        return $('#js-pl-aleatoria')
    }

    get wordOfTheDay() {
        return $("#dia > div.word-container > a")
    }

    get inputSearchBar () {
        return $("#q")
    }

    get btnSimpleSearch () {
        return $("#searchForm > button")
    }

    get btnRaffle () {
        return $("#js-btn-sortear")
    }

    async simpleSearch (word) {
        await this.inputSearchBar.setValue(word);
        await this.btnSimpleSearch.click();
    }

    open () {
        return super.open("");
    }
}

module.exports = new HomePage();
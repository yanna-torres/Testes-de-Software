
const Page = require('./page');

class ComplexResultsPage extends Page {
    
    get listTitle () {
        return $("#content > div.col-xs-12.col-md-8.card > h1")
    }
}

module.exports = new ComplexResultsPage();
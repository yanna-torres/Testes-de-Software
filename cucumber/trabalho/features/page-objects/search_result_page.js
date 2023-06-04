
const Page = require('./page');

class ResultPage extends Page {
    get meaningTitle () {
        return $("#content > div.col-xs-12.col-sm-7.col-md-8.p0.mb20 > div.card.card-main.mb10 > h2")
    }
    
    get unsuccessfulResult () {
        return $("#content > div.col-xs-12.col-sm-7.col-md-8.card > h1")
    }
}

module.exports = new ResultPage();


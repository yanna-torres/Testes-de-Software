const { When, Then } = require('@wdio/cucumber-framework');

const HomePage = require("../../page-objects/home_page")

When(/^I raffle a word$/, async () => {
    this.word = await HomePage.raffledWord.getText();
    await HomePage.btnRaffle.click();
})

Then(/^I should see a new word$/, async () => {
    this.newWord = await HomePage.raffledWord.getText();
    assert.notEqual(this.word, this.newWord);
})
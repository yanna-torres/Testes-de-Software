const { Given, When, Then } = require('@wdio/cucumber-framework');

const ComplexSearchPage = require("../../page-objects/complex_search_page")
const ComplexResultsPage = require("../../page-objects/complex_results_page")


Given(/^I am on the complex search page$/, async () => {
    await ComplexSearchPage.open();
});

When(/^I select (\w+) and type (.+)$/, async (condition, input) => {
    if (condition == 'contem') {
        await ComplexSearchPage.selectContainsOption();
        await ComplexSearchPage.inputField.setValue(input);
        await ComplexSearchPage.btnSubmit.click();
    } else if (condition == 'comecam') {
        await ComplexSearchPage.selectStartsWithOption();
        await ComplexSearchPage.inputField.setValue(input);
        await ComplexSearchPage.btnSubmit.click();
    } else if (condition == 'terminadas') {
        await ComplexSearchPage.selectEndsWithOption();
        await ComplexSearchPage.inputField.setValue(input);
        await ComplexSearchPage.btnSubmit.click();
    }
});

Then(/^I should see the title (\w+)$/, async (message) => {
    const title = ComplexResultsPage.listTitle;
    await expect(title).toBeExisting();
    await expect(title).toHaveTextContaining(message);
})
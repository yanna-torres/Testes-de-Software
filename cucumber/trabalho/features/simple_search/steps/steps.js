const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require("../../page-objects/home_page")
const ResultPage = require("../../page-objects/search_result_page")

Given(/^I am on the home page$/, async () => {
    await HomePage.open();
});

When(/^I type (\w+) into the search bar$/, async (word) => {
    await HomePage.simpleSearch(word);
});

Then(/^I should see (.*)$/, async (message) => {
    await expect(ResultPage.meaningTitle).toBeExisting();
    await expect(ResultPage.meaningTitle).toHaveTextContaining(message);
});

Then(/^I should not see any successful results and (.*)$/, async (message) => {
    await expect(ResultPage.unsuccessfulResult).toBeExisting();
    await expect(ResultPage.unsuccessfulResult).toHaveTextContaining(message);
});
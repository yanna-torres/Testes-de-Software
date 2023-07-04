/// <reference types="cypress" />

import "cypress-real-events/support";

export class Globo {
    navigate() {
        cy.visit('https://www.globo.com/');
    }

    search(entry) {
        cy.get('.auxiliary-menu__search').click()
        cy.get("#header-search-input").type(entry + "{enter}");
        this.validateSearch();
    }

    validateSearch() {
        cy.get('.results').find('li').should('have.length.greaterThan', 1)
    }

    applyFilter() {
        cy.get("#search-filter-component > div > div.search-filter-component > div > div > div.filters__advanced-date-filter > div > a").realHover('mouse')
        cy.get("#search-filter-component > div > div.search-filter-component > div > div > div.filters__advanced-date-filter > div > ul > li:nth-child(3)").click();
    }

    navigateWeather() {
        cy.get('#menu-toggle').click()
        cy.get('#menu-1-previsão-do-tempo > .menu-item-link').click()
    }

    searchCity(entry) {
        cy.get('.city-search__input').type(entry + '{downArrow}{enter}')
    }

    validate(entry) {
        cy.contains(entry).should('exist')
    }

    navigateRecipes() {
        cy.get('#menu-toggle').click()
        cy.get(':nth-child(9) > .menu-products__list__item__link > .menu-products__list__item__link__text').click()
    }

    searchRecipe() {
        cy.get('#busca-campo').click({ force: true }).type('bolo de milho{enter}')
    }

    validateRecipe() {
        cy.get('[data-position="1"]').click()
        cy.contains('Bolo de milho')
    }
}
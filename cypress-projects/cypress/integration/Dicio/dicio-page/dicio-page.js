/// <reference types="cypress" />

export class DicioPage {
    navigate() {
        cy.visit("https://www.dicio.com.br/");
    }

    searchWord(word, exists) {
        cy.get('#q').type(`${word}{enter}`);
        if (exists) {
            cy.contains(`Significado de ${word}`).should('exist');
        } else {
            cy.contains(`Significado de ${word}`).should('not.exist');
        }
    }

    searcWordsWith(item, exists) {
        cy.get(':nth-child(3) > .btn-titplus').click()
        cy.contains("Contêm").should('exist')
        
        cy.get('#qword').type(item)
        cy.get('#btn-submit').click()
        if (exists) {
            cy.contains(`Palavras que contêm ${item}`).should("exist")
        } else {
            cy.contains(`Palavras que contêm ${item}`).should("not.exist")
        }
    }
}
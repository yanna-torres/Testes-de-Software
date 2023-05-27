/// <reference types="cypress" />

import { DicioPage } from "./dicio-page/dicio-page";

describe("Dicio", () => {

    const mypage = new DicioPage();
    
    beforeEach(() => {
        mypage.navigate();
    });

    it("Successful Search", () => {
        mypage.search("Celular", true);
    });

    it("Unsuccessful Search", () => {
        mypage.search("hbfasdadcaw", false);
    });

    it("Draw Word", () => {
        let word
        cy.get('#js-pl-aleatoria').then(($elem) => {
            word = $elem.text()

            cy.get("#js-btn-sortear").click()

            cy.get('#js-pl-aleatoria').should(($elem2) => {
                expect($elem2.text()).not.to.eq(word)
              })
        });
    });

    it.only("Search word with letter", () => {
        mypage.searcWordsWith("Y");
    });
});
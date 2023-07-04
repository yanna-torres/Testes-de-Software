/// <reference types="cypress" />

import { Globo } from "./globo-page/PageObject-Globo"
import "cypress-real-events/support";


describe("Globo - testes avaliação 02", () => {

    const myPage = new Globo();

    beforeEach(() => {

        myPage.navigate();

    })

    context("Realizar busca", () => {

        it("Buscar palavra Desmatamento", () => {
            myPage.search("Desmatamento")
        })

    })

    context("Aplicar filtro em resultados de busca", () => {

        it("Filtrar por última hora", () => {
            myPage.search("Desmatamento")
            myPage.applyFilter()
            myPage.validateSearch()
        })

    })

    context("Previsão do tempo", () => {

        it("Buscar previsão de Fortaleza", () => {
            myPage.navigateWeather()
            myPage.searchCity('Fortaleza')
            myPage.validate('Fortaleza, CE')
        })

    })


    context("Receitas", () => {

        it("Buscar por 'bolo de milho'", () => {
            myPage.navigateRecipes()
            myPage.searchRecipe('bolo de milho')
            myPage.validateRecipe()
        })
        
    })
})
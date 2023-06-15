/// <reference types="cypress"/>

describe("E2E - Lesson",() => {
    it("Lokalizatory", () =>{
        cy.visit("/");

        // Po znaczniku
        cy.get("a");

        // Identyfikator
        cy.get("#search_query_top")

        // Po klasie
        cy.get(".form-control")

        // Po atrybutach
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //Dokładniejszy atrybut wraz podaniem znacznika
        cy.get('input[placeholder="Search"]')

        // //Pobieranie elementów po kilku atrybutach
        // cy.get('[src="http://automationpractice.pl/modules/themeconfigurator/img/banner-img7.jpg"][width="381"]')

        //Zalecana Praktyka pobierania elementów
        //cy.get('[data.cy="wyszukiwarla"]')
    })

    it("Lokalizatory część2", () =>{
        cy.visit("/");

        cy.contains("Shop now !"); //< Szukanie po tekście
        cy.contains('[title="Contact us"]' ,'Contact us')
        cy.get("li").parent("#home-page-tabs").find("li").eq(1)
        cy.get("li").parent("#home-page-tabs").find("li").contains("Best Sellers")


    })

})
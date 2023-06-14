/// <reference types="cypress"/>

describe("E2E - Asercje", ()=>{
    it("Asercje expect oraz should", () =>{
        cy.visit("/");

        //Weryfikacja tekstu
        cy.get('a[title="Contact us"]').should("contain", "Contact us");
        cy.get('a[title="Contact us"]').then(zakladka =>{
            expect(zakladka).to.contain("Contact us")
        })

        // Sprawdzenie czy nie zawiera tekstu
        cy.get('a[title="Contact us"]').should("not.contain", "test");
        cy.get('a[title="Contact us"]').then(zakladka =>{
            expect(zakladka).not.to.contain("test")
        })

        //Weryfikacja czy znacznik posiada klase
        cy.get('#search_query_top').should("have.class", "search_query form-control ac_input");
        cy.get('#search_query_top').then(searchbox =>{
            expect(searchbox).have.class("search_query form-control ac_input");
        })

        //Czy element jest widoczny
        cy.get('#search_query_top').should("be.visible");
        cy.get('#search_query_top').then(searchbox =>{
            expect(searchbox).to.be.visible
        })

        //Weryfikacja ilości pobranych elementów
        cy.get("ul.sf-menu").find("li").should("have.length", 16)
        cy.get("ul.sf-menu").find("li").then(zakladki =>{
            expect(zakladki).have.length(16)
        })

        //Weryfikacja wartości css danego elementu
        cy.get('#search_query_top').should("have.css", "line-height", "18.5714px");
        cy.get('#search_query_top').then(wyszukiwarka =>{
            expect(wyszukiwarka).have.css("line-height", "18.5714px");
        })
    })
    
})
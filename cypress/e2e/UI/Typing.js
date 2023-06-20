/// <reference types="cypress"/>

describe("E2E - Typing", ()=>{
    it("Typing values", () =>{
        cy.visit("/");
        //cy.get("#search_query_top").type("Przykładowy Produkt{backspace}", {delay: 500})
        cy.searchPhrase("Nowy Tekst{backspace}" , 500);
        
    })
    
    it("Using Clear", () =>{
        cy.visit("/");
        cy.get("#search_query_top").clear();


    })

})
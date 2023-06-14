/// <reference types="cypress"/>

describe("E2E - Akcja Wpisywania", ()=>{
    it("Wpisywanie wartości", () =>{
        cy.visit("/");
        //cy.get("#search_query_top").type("Przykładowy Produkt{backspace}", {delay: 500})
        cy.searchPhrase("Nowy Tekst{backspace}" , 500);
        
    })
    
    it("Czyszczenie wartości z pola", () =>{
        cy.visit("/");
        cy.get("#search_query_top").clear();


    })

})
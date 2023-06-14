/// <reference types="cypress"/>

describe("E2E - Scrollowanie/Najechanie", ()=>{
    it("Najechanie na element", () =>{
        cy.visit("/");
        cy.get('a[title="Dresses"]').eq(1).trigger("focus");
        cy.get('li.sfHover a[title="Summer Dresses"]').click();
        
    })

    it("Scrollowanie do boxa specials", ()=>{
        cy.visit("/");
        cy.get('a[title="Dresses"]').eq(1).trigger("focus");
        cy.get('li.sfHover a[title="Summer Dresses"]').click();
        cy.get('a[title="Specials"]').scrollIntoView();
    })
    
})
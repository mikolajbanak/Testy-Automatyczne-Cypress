/// <reference types="cypress"/>

describe("E2E - Scrolling/Hovering", ()=>{
    it("Najechanie na element", () =>{
        cy.visit("/");
        cy.get('a[title="Dresses"]').eq(1).trigger("focus");
        cy.get('li.sfHover a[title="Summer Dresses"]').click();
        
    })

    it("Scroll IntoView", ()=>{
        cy.visit("/");
        cy.get('a[title="Dresses"]').eq(1).trigger("focus");
        cy.get('li.sfHover a[title="Summer Dresses"]').click();
        cy.get('a[title="Specials"]').scrollIntoView();
    })
    
})
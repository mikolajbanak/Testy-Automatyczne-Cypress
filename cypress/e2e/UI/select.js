/// <reference types="cypress"/>

import selectPage from "../../support/Page-Object/selectPage";

describe("E2E - Selects", ()=>{
    it("Wybieranie opcji", () =>{
        cy.visit("/index.php?id_category=3&controller=category");
        // Po nazwie
        cy.get('#selectProductSort').select("In stock")

        // Po value
        cy.get('#selectProductSort').select("price:asc")

        // Po indexach
        cy.get('#selectProductSort').select(7)
    })

    it("Wybieranie wszystkich opcji", ()=>{
        cy.visit("/index.php?id_category=3&controller=category");
        selectPage.selectallOption();

        // cy.get('#selectProductSort').then(dropdown =>{
        //     cy.wrap(dropdown).find("option").each(opcje =>{
        //         cy.get('#selectProductSort').select(opcje.text(), {delay:1000})
        //     })
        // })

    })
    
    })
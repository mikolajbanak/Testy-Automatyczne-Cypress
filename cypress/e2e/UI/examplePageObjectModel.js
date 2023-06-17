/// <reference types="cypress"/>

import selectPage from "../../support/Page-Object/selectPage";

describe("E2E - Select", ()=>{
    it("Wybieranie opcji", () =>{
        cy.visit("/index.php?id_category=3&controller=category");
        // Po nazwie
        selectPage.select.select("In stock")

        // Po value
        selectPage.select.select("price:asc")

        // Po indexach
        selectPage.select.select(7)
    })
})
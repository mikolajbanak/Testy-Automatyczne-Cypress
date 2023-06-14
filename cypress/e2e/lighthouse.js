
describe("Lighthouse Test", () => {
    it("Pierwszy test Lighthouse",() => {
        cy.visit('/')
        cy.lighthouse({
            performance: 85,
            accessibility: 100,
            "best-practices": 85,
            seo:85,
            pwa:100,
        })
    })
})
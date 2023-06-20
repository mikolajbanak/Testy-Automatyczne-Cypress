
describe("Lighthouse Test", () => {
    it("Lighthouse first test",() => {
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
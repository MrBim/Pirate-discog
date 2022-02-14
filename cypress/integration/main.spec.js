/// <reference types="cypress" />

describe("tests", () => {
  it("loads the page with the correct ui", () => {
    cy.intercept("/database/*").as("artist");
    cy.intercept("/artists/4156958/*").as("release");

    cy.visit("localhost:3000/");
    cy.get('[data-test="search-results"]').should("not.exist");

    cy.get('[data-test="search-input"]')
      .should("have.length", 1)
      .type("koloto");

    cy.get('[data-test="search-button"]').click();
    cy.wait("@artist").then(({ request }) => {
      expect(request.url).to.match(/koloto&type=artist&/);
    });

    cy.get('[data-test="artist-button"]').should("exist");

    cy.get('[data-test="artist-button"]').first().click();
    cy.wait("@release")
      .its("request.url")
      .should("include", "/4156958/releases?sort=year&sort_order=asc");

    cy.get('[data-test="release-results-container"]').should("exist");
    cy.get('[data-test="release-result"]').should("have.length", 6); // this is really brittle
  });
});

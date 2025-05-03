describe("Home Page", () => {
  it("should display the SerenityMind navbar", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("SerenityMind").should("be.visible");
  });

  it("should allow navigation to Features section", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Features").click();
    cy.url().should("include", "#features");
  });
});

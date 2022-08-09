describe("Radio Button", () => {
  before(() => {
    cy.visit("/radio-button");
  });

  it("check the Radio Button and assert that ", () => {
    cy.get("#yesRadio").click({ force: true });
    cy.get(".text-success").should("have.text", "Yes");
  });
});

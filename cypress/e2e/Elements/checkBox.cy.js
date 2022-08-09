describe("Check  Box", () => {
  before(() => {
    cy.visit("/checkbox");
  });

  it("check the checkbox and assert that ", () => {
    cy.get('button[title="Toggle"]').eq(0).click();
    cy.get(".rct-checkbox > .rct-icon").click({multiple: true});
    cy.get(
      ".rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon > path"
    ).should('be.checked');
 cy.get(
   ".rct-node-expanded > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon > path"
 ).should("be.checked");
  cy.get(
    ".rct-node-expanded > ol > :nth-child(3) > .rct-text > label > .rct-checkbox > .rct-icon > path"
  ).should("be.checked");
  });
});

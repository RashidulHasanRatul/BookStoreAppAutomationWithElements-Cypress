describe("Text Box", () => {
  beforeEach(() => {
    cy.visit("/text-box");
  });

  it("Should fill up all the  Text Box and submit the form", () => {
    cy.get("#userName").type("Rashidul Hasan");
    cy.get("#userEmail").type("test@gmail.com");
    cy.get("#currentAddress").type("Dhaka");
    cy.get("#permanentAddress").type("Dhaka");
    cy.get("#submit").click();

    // Assert that the text box contains the text that we entered
    cy.get("#userName").should("have.value", "Rashidul Hasan");
    cy.get("#userEmail").should("have.value", "test@gmail.com");
    cy.get("#currentAddress").should("have.value", "Dhaka");
  });
});

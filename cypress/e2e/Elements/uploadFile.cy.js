describe("demonstrate file upload in cypress", function () {
  before(function () {
    cy.visit("https://the-internet.herokuapp.com/upload");
  });

  it("File Upload using cypress-file-upload npm package", () => {
    const filepath = "file_example_XLS_10.csv";
    cy.get('input[type="file"]').attachFile(filepath);
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains("file_example_XLS_10.csv");
  });
});

describe("Excel File download", () => {
  const data2 = [
    "0",
    "First Name",
    "Last Name",
    "Gender",
    "Country",
    "Age",
    "Date",
    "Id",
  ];

  const data3 = [];
  before(() => {
    cy.visit("https://sample-videos.com/download-sample-xls.php");
  });

  it("Should download the Excel File And Assert that", () => {
    cy.get(":nth-child(1) > :nth-child(4) > .download_xls")
      .should("be.visible")
      .click();
    cy.wait(4000);
  });

  it("Should download the Excel File And Assert that", () => {
    cy.task("parseXlsx", "cypress/downloads/file_example_XLS_10.xls").then(
      (jsonData) => {
        Object.values(jsonData[0].data[0]).forEach((key) => {
          //  cy.log(key);
          data3.push(key);
        });
        cy.log("This is From local Data2" + data2[1]);
        // cy.wrap(data3).should("eq", data2[key]);
        cy.log("This is From local Data3" + data3[1]);
        expect(data3[2]).to.eqls(data2[2]);
      }
    );
  });
});

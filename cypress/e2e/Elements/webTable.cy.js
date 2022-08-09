describe("Web Table ", () => {
  before(() => {
    cy.visit("https://sqengineer.com/practice-sites/practice-tables-selenium/");
  });

  it("check the webTable and iterate the element and assert that ", () => {
    cy.get("#table1> tbody > tr > td:nth-child(1)")
      .each(($el, index, $list) => {
        cy.log($el.text());
        const text = $el.text();
        if (text === "Selenium") {
          cy.get("#table1 > tbody > tr > td:nth-child(1)")
            .eq(index)
            .next()
            .then(($el) => {
              cy.log($el.text());
              expect($el.text()).to.contains("Open Source");
            });
        }
      })
      .should("have.length", 4);
  });
});

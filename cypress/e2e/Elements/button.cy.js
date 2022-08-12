describe(" Button", () => {
  before(() => {
    cy.visit("/buttons");
  });
  it("check the  Button and assert that ", () => {
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should(
      "have.text",
      "You have done a double click"
    );

    // right click on the button
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage").should(
      "have.text",
      "You have done a right click"
    );

    // click dynamic button
    // cy.get('button[type="button"]').then((btnTxt) => {
    //   const length = btnTxt.length;
    //   for (let i = 0; i < length; i++) {
    //     cy.log(btnTxt[i].textContent);
    //     if (btnTxt[i].textContent === "Click Me") {
    //       cy.get(btnTxt[i]).click();
    //       cy.get("#dynamicClickMessage").should(
    //         "have.text",
    //         "You have done a dynamic click"
    //       );
    //     }
    //   }
    // });

    cy.get('button[type="button"]').each(($el, index, $list) => {
      cy.log($el.text());
      if ($el.text() === "Click Me") {
        cy.get($el).click();
        cy.get("#dynamicClickMessage").should(
          "have.text",
          "You have done a dynamic click"
        );
      }
    });

    // multiple assertion on the text
    cy.get("#doubleClickMessage").each(($el, index, $list) => {
      expect($el.text()).to.be.oneOf([
        "You have done a double click",
        "You have done a right click",
        "You have done a dynamic click",
      ]);
    });
  });
});

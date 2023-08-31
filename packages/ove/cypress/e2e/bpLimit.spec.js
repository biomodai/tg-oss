describe("bpLimit", function () {
  beforeEach(() => {
    cy.visit("");
  });

  it(`bpLimit should prevent paste/insert from completing`, () => {
    cy.tgToggle("bpLimit");

    cy.get(`.veVectorInteractionWrapper:first`).type("t");
    //cypress paste:
    cy.get(".sequenceInputBubble input")
      .invoke(
        "val",
        "gagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagccccccccctttgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccgagagagagagcccccccccttt"
      )
      .trigger("input");
    cy.get(".sequenceInputBubble input").type("a{enter}");
    cy.contains(`Sorry, you cannot go over the limit of`);
    // cy.focused().type("{enter}");
  });
});

Cypress.on("uncaught:exception", err => {
  // returning false here prevents Cypress from
  // failing the test
  console.error(err);
  return false;
});

describe("StackOverflow", () => {
  it("can access", () => {
    cy.visit("https://stackoverflow.com");
  });

  it("can access other links afterwards", () => {
    cy.visit("https://github.com");
  });
});

export {};
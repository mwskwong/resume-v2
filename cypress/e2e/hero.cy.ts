import { HOME } from "constants/nav";
import * as socialMedia from "constants/socialMedia";

describe("Hero", () => {
  before(() => cy.visit("/"));

  context("Social media", () => {
    Object.entries(socialMedia).map(([name, link]) => it(
      `opens ${name} in a new tab`,
      () => {
        cy.get(`#${HOME.id} [data-cy='${name}']`)
          .should("have.attr", "target", "_blank")
          .should("have.attr", "href", link);
      }
    ));
  });

  context("Download resume", () => {
    it("opens resume in a new tab", () => {
      cy.get("[data-cy='resume']")
        .then($a => {
          expect($a).have.attr("target", "_blank");
          $a.attr("target", "_self");
        })
        .click();
      cy.url().should("match", /resume\.[a-zA-Z0-9]+\.pdf$/i);
    });
  });
});
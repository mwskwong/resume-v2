import nav from "constants/nav";
import viewports from "./viewports";

describe("Navigation", () => {
  Object.entries(viewports).map(([key, viewport]) => (
    context(key, () => {
      beforeEach(() => {
        cy.viewport(viewport);
        cy.visit("/");
        if (key === "mobile") {
          cy.get("[data-cy='menuButton']").click();
        }
      });

      Object.values(nav).map(section => it(
        `navigates to ${section.name} section`,
        () => {
          cy.get("a").contains(section.name).click();
          cy.location("hash").should("equal", `#${section.id}`);
          if (section.id === nav.HOME.id) {
            cy.window().its("scrollY").should("eq", 0);
          } else {
            cy.get(`#${section.id}`)
              // section scroll-margin-top is between 48px - 64px with +-1px margin of error
              .should(($elem: JQuery<HTMLElement>) => expect($elem[0].getClientRects()[0].top).gte(47).lte(65));
          }
        }
      ));
    })
  ));

  context("logo", () => {
    it(`navigates to ${nav.HOME.name} section`, () => {
      cy.visit("/");
      cy.scrollTo("center", { duration: 500 });
      cy.get("[data-cy='logo']").click();
      cy.location("hash").should("equal", `#${nav.HOME.id}`);
      cy.window().its("scrollY").should("eq", 0);
    });
  });

  context("scroll to top FAB", () => {
    it(`navigates to ${nav.HOME.name} section`, () => {
      cy.visit("/");
      cy.scrollTo("center", { duration: 500 });
      cy.get("[data-cy='scrollToTop']").click();
      cy.location("hash").should("equal", `#${nav.HOME.id}`);
      cy.window().its("scrollY").should("eq", 0);
    });
  });
});
import nav from "constants/nav";
import viewports from "./viewports";

describe("Navigation", () => {
  context("NavBar", () => {
    before(() => {
      cy.visit("/");
    });

    it("shows nav buttons and hide nav list on desktop", () => {
      cy.get("[data-cy='navButtons']").should("be.visible");
      cy.get("[data-cy='navList']").should("not.exist"); // navList mountOnEnter and unmountOnExit
    });

    it("shows nav buttons and hide nav list on desktop", viewports.mobile, () => {
      cy.get("[data-cy='menuButton']").click();
      cy.get("[data-cy='navButtons']").should("not.be.visible");
      cy.get("[data-cy='navList']").should("be.visible");
    });

    Object.entries(viewports).map(([key, viewport]) => (
      context(key, viewport, () => {
        before(() => {
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
  });

  context("Logo", () => {
    it(`navigates to ${nav.HOME.name} section`, () => {
      cy.visit("/");
      cy.scrollTo("bottom").wait(500);
      cy.get("[data-cy='logo']").click();
      cy.location("hash").should("equal", `#${nav.HOME.id}`);
      cy.window().its("scrollY").should("eq", 0);
    });
  });

  context("Scroll to top FAB", () => {
    it(`navigates to ${nav.HOME.name} section`, () => {
      cy.visit("/");
      cy.scrollTo("bottom").wait(500);
      cy.get("[data-cy='scrollToTop']").click();
      cy.location("hash").should("equal", `#${nav.HOME.id}`);
      cy.window().its("scrollY").should("eq", 0);
    });
  });
});
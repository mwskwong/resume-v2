import nav from "constants/nav";

import viewports from "./viewports";

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.disableSmoothScroll();
  });

  context("NavBar", () => {
    it("shows nav buttons and hide nav list on desktop", () => {
      cy.get("[data-cy='navButtons']").should("be.visible");
      cy.get("[data-cy='navList']").should("not.exist"); // navList mountOnEnter and unmountOnExit
    });

    it("shows nav buttons and hide nav list on desktop", viewports.mobile, () => {
      cy.get("[data-cy='menuButton']").click();
      cy.get("[data-cy='navButtons']").should("not.be.visible");
      cy.get("[data-cy='navList']").should("be.visible");
    });

    Object.entries(viewports).forEach(([key, viewport]) => (
      context(key, viewport, () => {
        beforeEach(() => {
          if (key === "mobile") {
            cy.get("[data-cy='menuButton']").click();
          }
        });

        Object.values(nav).forEach(({ name, id }) =>
          it(`navigates to ${name} section`, () => {
            cy.get(key === "mobile" ? "nav > li > a" : "nav > a").contains(name).click();
            cy.location("hash").should("equal", `#${id}`);
            if (id === nav.HOME.id) {
              cy.window().its("scrollY").should("equal", 0);
            } else {
              cy.get(`#${id}`)
                // section scroll-margin-top is between 48px - 64px with +-1px margin of error
                .should(($elem: JQuery<HTMLElement>) => expect($elem[0].getClientRects()[0].top).gte(47).lte(65));
            }
          })
        );
      })
    ));
  });

  context("Logo", () => {
    it(`navigates to ${nav.HOME.name} section`, () => {
      cy.visit("/");
      cy.scrollTo("bottom")
        .window()
        .its("scrollY")
        .should("not.equal", 0);
      cy.wait(1000);
      cy.get("[data-cy='logo']").click();
      cy.wait(1000);
      cy.location("hash").should("equal", `#${nav.HOME.id}`);
      cy.window().its("scrollY").should("equal", 0);
    });
  });

  context("Scroll to top FAB", () => {
    it(`navigates to ${nav.HOME.name} section`, () => {
      cy.visit("/");
      cy.scrollTo("bottom")
        .window()
        .its("scrollY")
        .should("not.equal", 0);
      cy.wait(1000);
      cy.get("[data-cy='scrollToTop']").click();
      cy.wait(1000);
      cy.location("hash").should("equal", `#${nav.HOME.id}`);
      cy.window().its("scrollY").should("equal", 0);
    });
  });
});
import viewports from "cypress/fixtures/viewports.json";

import nav from "@/constants/nav";
import { Section } from "@/types";


const testNavElement = ({ id, name }: Section, elementType: "NavButton" | "NavListItem") => {
  it(`has "${name}" label`, () => {
    cy.get(`[data-cy='${id}${elementType}']`)
      .contains(name);
  });

  it(`navigates to ${name} section`, () => {
    cy.get(`[data-cy='${id}${elementType}']`)
      .click();
    cy.hash().should("equal", `#${id}`);
    cy.get(`#${id}`)
      // section scroll-margin-top is between 48px - 64px with +-1px margin of error
      .should($section => expect($section[0].getClientRects()[0].top).lessThan(64 + 1));
  });
};

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.disableSmoothScroll();
  });

  describe("NavBar", () => {
    it("shows nav buttons and hide nav list on desktop", () => {
      cy.get("[data-cy='navButtons']").should("be.visible");
      cy.get("[data-cy='navList']").should("not.exist");
    });

    it("shows nav buttons and hide nav list on mobile", viewports.mobile, () => {
      cy.get("[data-cy='menuButton']").click();
      cy.get("[data-cy='navButtons']").should("not.be.visible");
      cy.get("[data-cy='navList']").should("be.visible");
    });

    for (const section of Object.values(nav)) {
      describe(`${name} nav button`, () => {
        testNavElement(section, "NavButton");
      });

      describe(`${name} nav list item`, viewports.mobile, () => {
        beforeEach(() => cy.get("[data-cy='menuButton']").click());
        testNavElement(section, "NavListItem");
      });
    }
  });

  describe("Logo", () => {
    it("scrolls to top", () => {
      cy.scrollTo("bottom");
      cy.get("[data-cy='logo']").click();
      cy.window().its("scrollY").should("equal", 0);
    });
  });

  describe("Scroll to top FAB", () => {
    it("scrolls to top", () => {
      cy.scrollTo("bottom");
      cy.get("[data-cy='scrollToTop']").click();
      cy.window().its("scrollY").should("equal", 0);
    });
  });
});

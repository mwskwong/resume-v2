import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import { ABOUT } from "@/constants/nav";
import selfIntroduction from "@/constants/selfIntroduction";

import viewports from "./viewports";

describe("About section", () => {
  beforeEach(() => {
    cy.visit(`/#${ABOUT.id}`);
    cy.disableSmoothScroll();
  });

  for (const viewportType in viewports) {
    const viewport = viewports[viewportType as keyof typeof viewports];
    describe(`${Cypress._.capitalize(viewportType)} view`, viewport, () => {
      describe("Navigation", () => {
        it(`navigates to section through "/#${ABOUT.id}" path`, () => {
          cy.verifySectionIsInViewport(ABOUT);
        });

        it("navigates to section by clicking navigation link", () => {
          cy.scrollTo("center");
          cy.navigateToSection(ABOUT, viewportType as keyof typeof viewports);
        });
      });
    });

    describe("Section header", () => {
      it("contains \"About\"", () => {
        cy.get(`[data-cy='${ABOUT.id}SectionHeader']`)
          .contains("About")
          .and("be.visible");
      });
    });

    describe("Profile picture", () => {
      it("contains my personal photo", () => {
        cy.get("[data-cy='profilePicture']")
          .should("be.visible")
          .and("have.attr", "src")
          .and("match", /personal_photo\.[a-zA-Z0-9]+\.jpg/i);
      });
    });

    describe("Greeting message", () => {
      it("contains full name", () => {
        cy.get("[data-cy='greetingMessage']")
          .contains(`${firstName} ${lastName}`);
      });
    });

    describe("Job titles", () => {
      it("is correct", () => {
        const jobTitlesElement = cy.get("[data-cy='jobTitles']");
        for (const jobTitle of jobTitles) {
          jobTitlesElement.should("contain", jobTitle);
        }
      });
    });

    describe("Self Introduction", () => {
      it("is correct", () => {
        cy.get("[data-cy='selfIntroduction']")
          .contains(selfIntroduction);

      });
    });

  }
});
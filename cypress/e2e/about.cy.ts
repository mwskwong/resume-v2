import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import { ABOUT } from "@/constants/nav";
import selfIntroduction from "@/constants/selfIntroduction";
import skills from "@/constants/skills";

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
        it("navigates to section by clicking navigation link", () => {
          cy.wait(10);
          cy.scrollTo("center");
          cy.navigateToSection(ABOUT, viewportType as keyof typeof viewports);
        });
      });

      describe("Section header", () => {
        it("contains \"About\"", () => {
          cy.get("[data-cy='about'] [data-cy='sectionHeader']")
            .should("be.visible")
            .and("contain", "About");
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
          cy.get("[data-cy='greeting']")
            .contains(`${firstName} ${lastName}`);
        });
      });

      describe("Job titles", () => {
        it("is correct", () => {
          cy.get("[data-cy='jobTitles']").as("jobTitles");
          for (const jobTitle of jobTitles) {
            cy.get("@jobTitles").should("contain", jobTitle);
          }
        });
      });

      describe("Self Introduction", () => {
        it("is correct", () => {
          cy.get("[data-cy='selfIntroduction']")
            .contains(selfIntroduction);
        });
      });

      describe("Skills", () => {
        it("contains title \"Skills\"", () => {
          cy.get("[data-cy='skills'] > [data-cy='title']")
            .should("be.visible")
            .and("contain", "Skills");
        });

        for (const skillSet of skills) {
          describe(skillSet.name, () => {
            it(`has the ${skillSet.name} Icon`, () => {
              cy.get(`[data-cy='skills'] [data-cy='${skillSet.id}'] [data-cy='${skillSet.id}Icon']`)
                .should("be.visible");
            });

            it(`has the subtitle "${skillSet.name}"`, () => {
              cy.get(`[data-cy='skills'] [data-cy='${skillSet.id}'] [data-cy='subtitle']`)
                .should("be.visible")
                .and("contain", skillSet.name);
            });

            for (const skill of skillSet.skills) {
              it(`contains skill "${skill}"`, () => {
                cy.get(`[data-cy='skills'] [data-cy='${skillSet.id}'] [data-cy='${skill}']`)
                  .should("be.visible")
                  .and("contain", skill);
              });
            }
          });
        }
      });
    });
  }
});
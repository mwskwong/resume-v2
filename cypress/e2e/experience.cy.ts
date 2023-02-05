import experiences from "@/constants/experiences";
import { EXPERIENCE } from "@/constants/nav";
import dateTimeFormat from "@/utils/dateTimeFormat";

import viewports from "./viewports";

describe("Experience section", () => {
  beforeEach(() => {
    cy.visit(`/#${EXPERIENCE.id}`);
    cy.disableSmoothScroll();
  });

  for (const viewportType in viewports) {
    const viewport = viewports[viewportType as keyof typeof viewports];
    describe(`${Cypress._.capitalize(viewportType)} view`, viewport, () => {
      describe("Navigation", () => {
        it(`navigates to section through "/#${EXPERIENCE.id}" path`, () => {
          cy.verifySectionIsInViewport(EXPERIENCE);
        });

        it("navigates to section by clicking navigation link", () => {
          cy.wait(10);
          cy.scrollTo("center");
          cy.navigateToSection(EXPERIENCE, viewportType as keyof typeof viewports);
        });
      });

      describe("Section header", () => {
        it("contains \"Experience\"", () => {
          cy.get("[data-cy='experience'] [data-cy='sectionHeader']")
            .should("be.visible")
            .and("contain", "Experience");
        });
      });

      describe("Experience timeline", () => {
        const timelineSelector = "[data-cy='experience'] [data-cy='timeline']";
        it("'s period is responsive", () => {
          const periodDesktopDataCy = "periodDesktop";
          const periodMobileDataCy = "periodMobile";

          if (viewportType === "desktop") {
            cy.get(`${timelineSelector} [data-cy='${periodDesktopDataCy}']`)
              .should("be.visible");
            cy.get(`${timelineSelector} [data-cy='${periodMobileDataCy}']`)
              .should("not.be.visible");
          } else {
            cy.get(`${timelineSelector} [data-cy='${periodDesktopDataCy}']`)
              .should("not.be.visible");
            cy.get(`${timelineSelector} [data-cy='${periodMobileDataCy}']`)
              .should("be.visible");
          }
        });

        for (let i = 0; i < experiences.length; i++) {
          const { from, to, jobTitle, company, jobDuties, relevantSkills, supportingDocuments } = experiences[i];
          const period = `${dateTimeFormat.format(from)} — ${to === "Present" ? "Present" : dateTimeFormat.format(to)}`;
          const periodDataCy = `period${Cypress._.capitalize(viewportType)}`;

          describe(`${jobTitle} at ${company}`, () => {
            it(`has period "${period}"`, () => {
              cy.get(`${timelineSelector} [data-cy='${periodDataCy}']`)
                .eq(i)
                .should("be.visible")
                .and("contain", period);
            });

            it(`has title "${jobTitle}"`, () => {
              cy.get(`${timelineSelector} [data-cy='title']`)
                .eq(i)
                .should("be.visible")
                .and("contain", jobTitle);
            });

            it(`has subtitle "${company}"`, () => {
              cy.get(`${timelineSelector} [data-cy='subtitle']`)
                .eq(i)
                .should("be.visible")
                .and("contain", company);
            });

            describe("Job duties", () => {
              for (const jobDuty of jobDuties) {
                it(`includes Duty: "${jobDuty}"`, () => {
                  cy.get(`${timelineSelector} [data-cy='contents']`)
                    .eq(i)
                    .children()
                    .should("be.visible")
                    .and("contain", jobDuty);
                });
              }
            });

            describe("Relevant skills", () => {
              for (const skill of relevantSkills) {
                it(`includes ${skill}`, () => {
                  cy.get(`${timelineSelector} [data-cy='tags']`)
                    .eq(i)
                    .children()
                    .should("be.visible")
                    .and("contain", skill);
                });
              }
            });

            // TODO: check for supporting documents
            describe("Support documents", () => {
              // eslint-disable-next-line no-unused-vars
              for (const supportingDocument of supportingDocuments) {

              }
            });
          });
        }
      });
    });
  }
});
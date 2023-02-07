import educations from "@/constants/educations";
import { EDUCATION } from "@/constants/nav";
import dateTimeFormat from "@/utils/dateTimeFormat";

import viewports from "./viewports";

describe("Education section", () => {
  beforeEach(() => {
    cy.visit(`/#${EDUCATION.id}`);
    cy.disableSmoothScroll();
  });

  for (const viewportType in viewports) {
    const viewport = viewports[viewportType as keyof typeof viewports];
    describe(`${Cypress._.capitalize(viewportType)} view`, viewport, () => {
      describe("Navigation", () => {
        it("navigates to section by clicking navigation link", () => {
          cy.wait(10);
          cy.scrollTo("center");
          cy.navigateToSection(EDUCATION, viewportType as keyof typeof viewports);
        });
      });

      describe("Section header", () => {
        it("contains \"Education\"", () => {
          cy.get("[data-cy='education'] [data-cy='sectionHeader']")
            .should("be.visible")
            .and("contain", "Education");
        });
      });

      describe("Education timeline", () => {
        const timelineSelector = "[data-cy='education'] [data-cy='timeline']";
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

        for (let i = 0; i < educations.length; i++) {
          const { from, to, degree, school, supportingDocuments } = educations[i];
          const period = `${dateTimeFormat.format(from)} — ${to === "Present" ? "Present" : dateTimeFormat.format(to)}`;
          const periodDataCy = `period${Cypress._.capitalize(viewportType)}`;

          describe(`${degree} at ${school}`, () => {
            it(`has period "${period}"`, () => {
              cy.get(`${timelineSelector} [data-cy='${periodDataCy}']`)
                .eq(i)
                .should("be.visible")
                .and("contain", period);
            });

            it(`has title "${degree}"`, () => {
              cy.get(`${timelineSelector} [data-cy='title']`)
                .eq(i)
                .should("be.visible")
                .and("contain", degree);
            });

            it(`has subtitle "${school}"`, () => {
              cy.get(`${timelineSelector} [data-cy='subtitle']`)
                .eq(i)
                .should("be.visible")
                .and("contain", school);
            });

            describe("Support documents", () => {
              const documents = {
                hkuCsCertOfGrad: {
                  name: "Degree Certificate",
                  matchingString: "MRVC474.jpg",
                  thumbnailRegex: /hku_cs_thumbnail\.[a-zA-Z0-9]+\.jpg/i,
                  private: false
                }
              };

              for (const supportingDocument of supportingDocuments) {
                const document = documents[supportingDocument as keyof typeof documents];

                describe(supportingDocument, () => {
                  it("contains the correct label", () => {
                    cy.get(`${timelineSelector} [data-cy='${supportingDocument}']`)
                      .should("be.visible")
                      .and("contain", document.name);
                  });

                  if (!document.private) {
                    it("opens the correct document in a new tab", () => {
                      cy.get(`${timelineSelector} [data-cy='${supportingDocument}'] a`).as("anchor");
                      cy.get("@anchor")
                        .should("have.attr", "target", "_blank")
                        .click();

                      cy.get("@anchor")
                        .invoke("attr", "href")
                        .then(href => {
                          const filename = href?.split("/").slice(-1);
                          cy.readFile(`./cypress/downloads/${filename}`)
                            .should("contain", "%PDF-")
                            .and("contain", document.matchingString);
                        });
                    });
                  }

                  it("contains the correct thumbnail", () => {
                    cy.get(`${timelineSelector} [data-cy='${supportingDocument}'] img`)
                      .should("be.visible")
                      .and("have.attr", "src")
                      .and("match", document.thumbnailRegex);
                  });
                });
              }
            });
          });
        }
      });

      // TODO: test for courses
      describe("Courses", () => {

      });
    });
  }
});
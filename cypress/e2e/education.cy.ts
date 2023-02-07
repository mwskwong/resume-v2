import { toggleButtonClasses } from "@mui/material/ToggleButton";

import courseCategories from "@/constants/courseCategories";
import courses from "@/constants/courses";
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

      describe("Courses", () => {
        describe("Title", () => {
          it("contains \"Courses & Training\"", () => {
            cy.get("[data-cy='courses'] [data-cy='title']")
              .should("be.visible")
              .and("contain", "Courses & Training");
          });
        });

        describe("Category selection", () => {
          for (let i = 0; i < courseCategories.length; i++) {
            const courseCategory = courseCategories[i];
            describe(courseCategory.name, () => {
              beforeEach(() => {
                cy.get("[data-cy='courses'] [data-cy='category']")
                  .eq(i + 1)
                  .as("categoryButton");
              });

              it(`contains "${courseCategory.name}"`, () => {
                cy.get("@categoryButton").should("contain", courseCategory.name);
              });

              it(`displays ${courseCategory.name} courses only`, () => {
                cy.get("@categoryButton").click();
                cy.get("@categoryButton")
                  .should("have.class", toggleButtonClasses.selected);

                for (const { name, category } of courses) {
                  cy.get("[data-cy='courses'] [data-cy='certificateCard']")
                    .as("courseCards");
                  if (category == courseCategory) {
                    cy.get("@courseCards")
                      .contains(name)
                      .should("be.visible");
                  } else {
                    cy.get("@courseCards")
                      .contains(name)
                      .should("not.exist");
                  }
                }
              });
            });
          }

          describe("All", () => {
            beforeEach(() => {
              cy.get("[data-cy='courses'] [data-cy='category']")
                .eq(0)
                .as("allButton");
            });

            it("contains \"All\"", () => {
              cy.get("@allButton").and("contain", "All");
            });

            it("displays all courses", () => {
              cy.get("@allButton").click();
              cy.get("@allButton")
                .should("have.class", toggleButtonClasses.selected);

              for (const { name } of courses) {
                cy.get("[data-cy='courses'] [data-cy='certificateCard']")
                  .contains(name)
                  .should("be.visible");
              }
            });
          });
        });

        for (let i = 0; i < courses.length; i++) {
          const course = courses[i];
          describe(`${course.name} card`, () => {
            beforeEach(() => {
              cy.get("[data-cy='courses'] [data-cy='certificateCard']")
                .eq(i)
                .as("courseCard");
            });

            it(`displays the course name "${course.name}" as primary text`, () => {
              cy.get("@courseCard")
                .get("[data-cy='name']")
                .should("be.visible")
                .and("contain", course.name);
            });

            it(`displays the institution as "${course.institution.name}" as secondary text`, () => {
              cy.get("@courseCard")
                .get("[data-cy='organization']")
                .should("be.visible")
                .and("contain", course.institution.name);
            });

            it(`displays the "${course.institution.name}" icon`, () => {
              cy.get("@courseCard")
                .get(`[data-cy='${course.institution.id}Icon']`)
                .should("be.visible");
            });

            // TODO: test href
          });
        }
      });
    });
  }
});

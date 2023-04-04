import documents from "cypress/fixtures/supportingDocuments.json";
import viewports from "cypress/fixtures/viewports.json";

import experiences from "@/constants/experiences";
import { EXPERIENCE } from "@/constants/nav";
import { Experience } from "@/types";
import dateTimeFormat from "@/utils/date-time-format";

const getCompanyName = (
  company?: Experience["company"],
  companyTemplate?: Experience["companyTemplate"]
) => {
  if (company) {
    return Array.isArray(company)
      ? companyTemplate
        ? companyTemplate
            .replace("{0}", company[0].name)
            .replace("{1}", company[1].name)
        : `${company[0].name} | ${company[1].name}`
      : company.name;
  }
};

const isMerged = (index: number) => {
  const prevSubtitle = getCompanyName(
    experiences[index - 1]?.company,
    experiences[index - 1]?.companyTemplate
  );
  const subtitle = getCompanyName(
    experiences[index].company,
    experiences[index].companyTemplate
  );
  const nextSubtitle = getCompanyName(
    experiences[index + 1]?.company,
    experiences[index + 1]?.companyTemplate
  );

  return prevSubtitle === subtitle || subtitle === nextSubtitle;
};

const isFirstMerged = (index: number) => {
  const prevSubtitle = getCompanyName(
    experiences[index - 1]?.company,
    experiences[index - 1]?.companyTemplate
  );
  const subtitle = getCompanyName(
    experiences[index].company,
    experiences[index].companyTemplate
  );

  return isMerged(index) && prevSubtitle !== subtitle;
};

const getNumOfMergedExperiencesBefore = (index: number) => {
  let numOfMergedExperiences = 0;
  for (let i = 0; i < index; i++) {
    if (isMerged(i)) {
      numOfMergedExperiences++;
    }
  }

  return numOfMergedExperiences;
};

const getNumOfMergedExperienceGroupsBefore = (index: number) => {
  let numOfMergedExperienceGroups = 0;
  for (let i = 0; i < index; i++) {
    if (isFirstMerged(i)) {
      numOfMergedExperienceGroups++;
    }
  }

  return numOfMergedExperienceGroups;
};

describe("Experience section", () => {
  beforeEach(() => {
    cy.visit(`/#${EXPERIENCE.id}`);
  });

  for (const viewportType in viewports) {
    const viewport = viewports[viewportType as keyof typeof viewports];
    describe(`${Cypress._.capitalize(viewportType)} view`, viewport, () => {
      describe("Navigation", () => {
        it("navigates to section by clicking navigation link", () => {
          cy.wait(10);
          cy.scrollTo("center");
          cy.navigateToSection(
            EXPERIENCE,
            viewportType as keyof typeof viewports
          );
        });
      });

      describe("Section header", () => {
        it('contains "Experience"', () => {
          cy.get("[data-cy = 'experience'] [data-cy = 'sectionHeader']")
            .should("be.visible")
            .and("contain", "Experience");
        });
      });

      describe("Experience timeline", () => {
        const timelineSelector =
          "[data-cy = 'experience'] [data-cy = 'timeline']";

        const thumbnailUrlKeywords = {
          tecpal: "tecpal",
          ha: "ha",
          edps: "edps",
          versitech: "versitech",
          publicHealthHku: "public_health_hku",
          engineeringHku: "hku",
        };

        for (let i = 0; i < experiences.length; i++) {
          const {
            from,
            to,
            jobTitle,
            company,
            companyTemplate,
            employmentType,
            jobDuties,
            relevantSkills,
            supportingDocuments,
          } = experiences[i];
          const period = `${dateTimeFormat.format(from)} — ${
            to === "Present" ? "Present" : dateTimeFormat.format(to)
          }`;

          const companyDisplayname = Array.isArray(company)
            ? company[0].name + " & " + company[1].name
            : company.name;

          describe(`${jobTitle} at ${companyDisplayname}`, () => {
            const testThumbnail = () => {
              it(`has "${companyDisplayname}" thumbnail`, () => {
                const numOfMergedExperiences =
                  getNumOfMergedExperiencesBefore(i);
                cy.get(`${timelineSelector} [data-cy = 'thumbnail']`)
                  .eq(i - Math.max(0, numOfMergedExperiences - 1))
                  .as("thumbnail");

                if (Array.isArray(company)) {
                  for (let j = 0; j < company.length; j++) {
                    cy.get("@thumbnail")
                      .find("img")
                      .eq(j)
                      .should("be.visible")
                      .and("have.attr", "src")
                      .and(
                        "include",
                        thumbnailUrlKeywords[
                          company[j].id as keyof typeof thumbnailUrlKeywords
                        ]
                      );

                    cy.get("@thumbnail")
                      .find("a")
                      .eq(j)
                      .should("be.visible")
                      .and("have.attr", "target", "_blank")
                      .and("have.attr", "href", company[j].url);
                  }
                } else {
                  cy.get("@thumbnail")
                    .find("img")
                    .should("be.visible")
                    .and("have.attr", "src")
                    .and(
                      "include",
                      thumbnailUrlKeywords[
                        company.id as keyof typeof thumbnailUrlKeywords
                      ]
                    );

                  cy.get("@thumbnail")
                    .find("a")
                    .should("be.visible")
                    .and("have.attr", "target", "_blank")
                    .and("have.attr", "href", company.url);
                }
              });
            };

            const numOfMergedExperienceGroups =
              getNumOfMergedExperienceGroupsBefore(i);

            const index = i + numOfMergedExperienceGroups;
            if (isMerged(i)) {
              if (isFirstMerged(i)) {
                testThumbnail();

                const companyName = getCompanyName(company, companyTemplate);
                it(`has title "${companyName ?? ""}"`, () => {
                  cy.get(`${timelineSelector} [data-cy = 'title']`)
                    .eq(index)
                    .should("be.visible")
                    .and("contain", companyName);
                });

                const earliestFrom = experiences.findLast(
                  ({ company, companyTemplate }) =>
                    getCompanyName(company, companyTemplate) === companyName
                )?.from;
                const fullPeriod = `${dateTimeFormat.format(earliestFrom)} — ${
                  to === "Present" ? "Present" : dateTimeFormat.format(to)
                }`;

                it(`has period "${fullPeriod}"`, () => {
                  cy.get(`${timelineSelector} [data-cy = 'period']`)
                    .eq(index)
                    .should("be.visible")
                    .and("contain", fullPeriod);
                });

                it(`has title "${jobTitle}"`, () => {
                  cy.get(`${timelineSelector} [data-cy = 'title']`)
                    .eq(index + 1)
                    .should("be.visible")
                    .and("contain", jobTitle);
                });

                it(`has period "${period}"`, () => {
                  cy.get(`${timelineSelector} [data-cy = 'period']`)
                    .eq(index + 1)
                    .should("be.visible")
                    .and("contain", period);
                });
              } else {
                it(`has title "${jobTitle}"`, () => {
                  cy.get(`${timelineSelector} [data-cy = 'title']`)
                    .eq(index)
                    .should("be.visible")
                    .and("contain", jobTitle);
                });

                it(`has period "${period}"`, () => {
                  cy.get(`${timelineSelector} [data-cy = 'period']`)
                    .eq(index)
                    .should("be.visible")
                    .and("contain", period);
                });
              }
            } else {
              testThumbnail();

              it(`has title "${jobTitle}"`, () => {
                cy.get(`${timelineSelector} [data-cy = 'title']`)
                  .eq(index)
                  .should("be.visible")
                  .and("contain", jobTitle);
              });

              const companyName = getCompanyName(company, companyTemplate);
              it(`has subtitle "${companyName ?? ""}"`, () => {
                cy.get(`${timelineSelector} [data-cy = 'subtitle']`)
                  .eq(index)
                  .should("be.visible")
                  .and("contain", companyName);
              });

              it(`has period "${period}"`, () => {
                cy.get(`${timelineSelector} [data-cy = 'period']`)
                  .eq(index)
                  .should("be.visible")
                  .and("contain", period);
              });
            }

            it(`has employment type "${employmentType.name}"`, () => {
              cy.get(`${timelineSelector} [data-cy = 'type']`)
                .eq(i)
                .should("be.visible")
                .and("contain", employmentType.name);
            });

            describe("Job duties", () => {
              for (const jobDuty of jobDuties) {
                it(`includes Duty: "${jobDuty}"`, () => {
                  cy.get(`${timelineSelector} [data-cy = 'contents']`)
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
                  cy.get(`${timelineSelector} [data-cy = 'tags']`)
                    .eq(i)
                    .children()
                    .should("be.visible")
                    .and("contain", skill);
                });
              }
            });

            describe("Support documents", () => {
              for (const supportingDocument of supportingDocuments) {
                const document =
                  documents[supportingDocument as keyof typeof documents];

                describe(supportingDocument, () => {
                  it("contains the correct label", () => {
                    cy.get(
                      `${timelineSelector} [data-cy = '${supportingDocument}']`
                    )
                      .should("be.visible")
                      .and("contain", document.name);
                  });

                  if (!document.private) {
                    it("opens the correct document in a new tab", () => {
                      cy.get(
                        `${timelineSelector} [data-cy = '${supportingDocument}'] a`
                      ).as("anchor");
                      cy.get("@anchor")
                        .should("have.attr", "target", "_blank")
                        .click();

                      cy.get("@anchor")
                        .invoke("attr", "href")
                        .then((href) => {
                          const filename = href?.split("/").at(-1);
                          cy.readFile(`./cypress/downloads/${filename ?? ""}`)
                            .should("contain", "%PDF-")
                            .and("contain", document.matchingString);
                        });
                    });
                  }

                  it("contains the correct thumbnail", () => {
                    cy.get(
                      `${timelineSelector} [data-cy = '${supportingDocument}'] img`
                    )
                      .should("be.visible")
                      .and("have.attr", "src")
                      .and("match", new RegExp(document.thumbnailRegex, "i"));
                  });
                });
              }
            });
          });
        }
      });
    });
  }
});

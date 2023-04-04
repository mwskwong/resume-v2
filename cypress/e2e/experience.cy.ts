import documents from "cypress/fixtures/supportingDocuments.json";
import viewports from "cypress/fixtures/viewports.json";

import experiences from "@/constants/experiences";
import { EXPERIENCE } from "@/constants/nav";
import { Experience } from "@/types";
import dateTimeFormat from "@/utils/date-time-format";

const getSubtitle = (
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

        let mergedExperience = 0;
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
            const prevSubtitle = getSubtitle(
              experiences[i - 1]?.company,
              experiences[i - 1]?.companyTemplate
            );
            const subtitle = getSubtitle(company, companyTemplate);
            const nextSubtitle = getSubtitle(
              experiences[i + 1]?.company,
              experiences[i + 1]?.companyTemplate
            );
            console.log(prevSubtitle, subtitle, nextSubtitle);

            const merge =
              prevSubtitle === subtitle || subtitle === nextSubtitle;
            const first = prevSubtitle !== subtitle;

            if (merge && !first) {
              mergedExperience++;
            } else {
              it(`has "${companyDisplayname}" thumbnail`, () => {
                console.log(mergedExperience);
                if (Array.isArray(company)) {
                  for (let j = 0; j < company.length; j++) {
                    cy.get(`${timelineSelector} [data-cy = 'thumbnail']`)
                      .eq(i - mergedExperience)
                      .as("thumbnail");

                    cy.get("@thumbnail")
                      .find("img")
                      .eq(j)
                      .should("be.visible")
                      .and("have.attr", "src")
                      .and("include", company[j].id);

                    cy.get("@thumbnail")
                      .find("a")
                      .eq(j)
                      .should("be.visible")
                      .and("have.attr", "target", "_blank")
                      .and("have.attr", "href", company[j].url);
                  }
                } else {
                  cy.get(`${timelineSelector} [data-cy = 'thumbnail']`)
                    .eq(i)
                    .as("thumbnail");

                  cy.get("@thumbnail")
                    .find("img")
                    .should("be.visible")
                    .and("have.attr", "src")
                    .and("include", company.id);

                  cy.get("@thumbnail")
                    .find("a")
                    .should("be.visible")
                    .and("have.attr", "target", "_blank")
                    .and("have.attr", "href", company.url);
                }
              });
            }

            it(`has title "${jobTitle}"`, () => {
              cy.get(`${timelineSelector} [data-cy = 'title']`)
                .eq(i)
                .should("be.visible")
                .and("contain", jobTitle);
            });

            it(`has subtitle "${subtitle ?? ""}"`, () => {
              cy.get(`${timelineSelector} [data-cy = 'subtitle']`)
                .eq(i)
                .should("be.visible")
                .and("contain", subtitle);
            });

            it(`has period "${period}"`, () => {
              cy.get(`${timelineSelector} [data-cy = 'period']`)
                .eq(i)
                .should("be.visible")
                .and("contain", period);
            });

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

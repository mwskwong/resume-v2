import viewports from "cypress/fixtures/viewports.json";

import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import { HOME } from "@/constants/nav";
import platformProfiles from "@/constants/platformProfiles";

describe("Hero section", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.disableSmoothScroll();
  });

  for (const viewportType in viewports) {
    const viewport = viewports[viewportType as keyof typeof viewports];
    describe(`${Cypress._.capitalize(viewportType)} view`, viewport, () => {
      describe("Navigation", () => {
        it("navigates to section by clicking navigation link", () => {
          cy.wait(10);
          cy.scrollTo("center");
          cy.navigateToSection(HOME, viewportType as keyof typeof viewports);
        });

        it("navigates to section by clicking Logo", () => {
          cy.scrollTo("center");
          cy.get("[data-cy = 'logo']").click();
          cy.verifySectionIsInViewport(HOME);
        });

        it("navigates to section by clicking Scroll to Top FAB", () => {
          cy.scrollTo("center");
          cy.get("[data-cy = 'scrollToTop']").click();
          cy.verifySectionIsInViewport(HOME);
        });
      });

      describe("Title", () => {
        it("is in \"I'm {firstName}\" format", () => {
          cy.get("[data-cy = 'title']")
            .should("be.visible")
            .and("contain", `I'm ${firstName}`);
        });
      });

      describe("Subtitle", () => {
        it("contains {jobTitles} separated by \" & \"", () => {
          cy.get("[data-cy = 'subtitle']")
            .should("be.visible")
            .and("contain", jobTitles.join(" & "));

        });
      });

      describe("Platform profile buttons", () => {
        platformProfiles.map(({ platform, url }) => {
          describe(`${platform.name} button`, () => {
            it(`contains ${platform.name} icon`, () => {
              cy.get(`#${HOME.id} [data-cy = '${platform.id}Button'] [data-cy = '${platform.id}Icon']`)
                .should("be.visible");
            });

            it(`opens ${firstName}'s profile link of ${platform.name} in new tab`, () => {
              cy.get(`#${HOME.id} [data-cy = '${platform.id}Button']`)
                .should("be.visible")
                .and("have.attr", "target", "_blank")
                .and("have.attr", "href", url);

              cy.request({ url: url, failOnStatusCode: false })
                .should(response => {
                  expect(
                    response.isOkStatusCode
                    || response.status === 999 // Used by LinkedIn
                  ).be.true;
                  expect(response.body).contains("</html>");
                });
            });
          });
        });
      });

      describe("Download resume button", () => {
        it("has 'Download Resume' label", () => {
          cy.get("[data-cy = 'downloadResume']")
            .contains("Download Resume");
        });

        it(`opens the resume PDF of ${firstName} in a new tab`, () => {
          cy.get("[data-cy = 'downloadResume']").as("downloadResumeButton");
          cy.get("@downloadResumeButton")
            .should("have.attr", "target", "_blank")
            .click();

          cy.get("@downloadResumeButton")
            .invoke("attr", "href")
            .then(href => {
              const filename = href?.split("/").slice(-1);
              cy.readFile(`./cypress/downloads/${filename}`)
                .should("contain", "%PDF-")
                .and("contain", `Resume of ${firstName} ${lastName}`);
            });
        });
      });
    });
  }
});

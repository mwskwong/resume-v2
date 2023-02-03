
import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import { HOME } from "@/constants/nav";
import socialMedia from "@/constants/socialMedia";

import viewports from "./viewports";

describe("Hero section", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.disableSmoothScroll();
  });

  for (const viewportType in viewports) {
    const viewport = viewports[viewportType as keyof typeof viewports];
    describe(`${Cypress._.capitalize(viewportType)} view`, viewport, () => {
      describe("Navigation", () => {
        it("navigates to section through \"/\" path", () => {
          cy.verifySectionIsInViewport(HOME);
        });

        it(`navigates to section through "/#${HOME.id}" path`, () => {
          cy.visit(`/#${HOME.id}`);
          cy.verifySectionIsInViewport(HOME);
        });

        it("navigates to section by clicking navigation link", () => {
          // cy.wait(10);
          cy.scrollTo("center");
          cy.navigateToSection(HOME, viewportType as keyof typeof viewports);
        });

        it("navigates to section by clicking Logo", () => {
          cy.scrollTo("center");
          cy.get("[data-cy='logo']").click();
          cy.verifySectionIsInViewport(HOME);
        });

        it("navigates to section by clicking Scroll to Top FAB", () => {
          cy.scrollTo("center");
          cy.get("[data-cy='scrollToTop']").click();
          cy.verifySectionIsInViewport(HOME);
        });
      });

      describe("Title", () => {
        it("is in \"I'm {firstName}\" format", () => {
          cy.get("[data-cy='title']")
            .contains(`I'm ${firstName}`)
            .and("be.visible");
        });
      });

      describe("Subtitle", () => {
        it("is {jobTitles} separated by \" & \"", () => {
          cy.get("[data-cy='subtitle']")
            .contains(jobTitles.join(" & "))
            .and("be.visible");
        });
      });

      describe("Social media buttons", () => {
        Object.entries(socialMedia).map(([name, link]) => {
          const label = Cypress._.capitalize(name);
          describe(`${label} button`, () => {
            it(`contains ${label} icon`, () => {
              cy.get(`#${HOME.id} [data-cy='${name}Button'] [data-cy='${name}Icon']`)
                .should("be.visible");
            });

            it(`links to the ${label} link and opens in new tab`, () => {
              cy.get(`#${HOME.id} [data-cy='${name}Button']`)
                .should("be.visible")
                .and("have.attr", "target", "_blank")
                .and("have.attr", "href", link);

              cy.request({ url: link, failOnStatusCode: false })
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
          cy.get("[data-cy='downloadResume']")
            .contains("Download Resume");
        });


        it("links to the resume PDF and opens it in a new tab", () => {
          const downloadResumeButton = cy.get("[data-cy='downloadResume']");
          downloadResumeButton
            .should("have.attr", "target", "_blank")
            .click();

          downloadResumeButton
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
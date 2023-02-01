import jobTitles from "@/constants/jobTitles";
import { firstName } from "@/constants/name";
import { HOME } from "@/constants/nav";
import socialMedia from "@/constants/socialMedia";

describe("Hero section", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.disableSmoothScroll();
  });

  describe("Title", () => {
    it("is in 'I'm {firstName}' format", () => {
      cy.get("[data-cy='title']")
        .contains(`I'm ${firstName}`);
    });
  });

  describe("Subtitle", () => {
    it("is {jobTitles} separated by ' & '", () => {
      cy.get("[data-cy='subtitle']")
        .contains(jobTitles.join(" & "));
    });
  });

  describe("Social media buttons", () => {
    Object.entries(socialMedia).map(([name, link]) => {
      const label = Cypress._.capitalize(name);
      describe(`${label} button`, () => {
        it(`contains ${label} icon`, () => {
          cy.get(`#${HOME.id} [data-cy='${name}Button'] [data-cy='${name}Icon']`)
            .should("exist");
        });

        it(`links to the ${label} link`, () => {
          cy.get(`#${HOME.id} [data-cy='${name}Button']`)
            .should("have.attr", "target", "_blank")
            .should("have.attr", "href", link);
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
      cy.get("[data-cy='downloadResume']")
        .should("have.attr", "target", "_blank")
        .invoke("removeAttr", "target")
        .click();
      cy.url().should("match", /resume\.[a-zA-Z0-9]+\.pdf$/i);
    });
  });
});
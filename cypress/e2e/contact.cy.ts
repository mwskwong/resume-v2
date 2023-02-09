import viewports from "cypress/fixtures/viewports.json";

import contact from "@/constants/contact";
import { CONTACT } from "@/constants/nav";
import { Contact } from "@/types";

describe("Contact section", () => {
  beforeEach(() => {
    cy.visit(`/#${CONTACT.id}`);
    cy.disableSmoothScroll();
    cy.get("[data-cy='contact']").as("contact");
  });

  for (const viewportType in viewports) {
    const viewport = viewports[viewportType as keyof typeof viewports];
    describe(`${Cypress._.capitalize(viewportType)} view`, viewport, () => {
      describe("Navigation", () => {
        it("navigates to section by clicking navigation link", () => {
          cy.wait(10);
          cy.scrollTo("center");
          cy.navigateToSection(CONTACT, viewportType as keyof typeof viewports);
        });
      });

      describe("Section header", () => {
        it("contains \"Contact\"", () => {
          cy.get("@contact")
            .find("[data-cy='sectionHeader']")
            .should("be.visible")
            .and("contain", "Contact");
        });
      });

      describe("Personal info", () => {
        for(const type in contact) {
          const info = contact[type as keyof Contact];

          it(`displays "${info}" as ${type}`, () => {
            cy.get("@contact")
              .find(`[data-cy='personalInfo'] [data-cy='${type}']`)
              .should("be.visible")
              .and("contain", info);
          });
        }
      });

      describe("Form", () => {
        // eslint-disable-next-line no-unused-vars
        const fields = ["name", "email", "subject", "message"];

        beforeEach(() => {
          cy.get("@contact")
            .find("form")
            .as("form");
        });

        it("fails to submit without filling in any fields");
        it("fails to submit when filling in non-email content in the email field");
        it("submits successfully when filling in valid contents");
        it("displays the error message when Formspree API returns one and allows users to edit the fields and resubmit");
      });
    });
  }
});

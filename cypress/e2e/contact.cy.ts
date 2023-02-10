import { FormError } from "@formspree/core";
import { buttonClasses } from "@mui/material/Button";
import contactForm from "cypress/fixtures/contactForm.json";
import viewports from "cypress/fixtures/viewports.json";

import contact from "@/constants/contact";
import { CONTACT } from "@/constants/nav";
import { Contact } from "@/types";

describe("Contact section", () => {
  beforeEach(() => {
    cy.visit(`/#${CONTACT.id}`);
    cy.disableSmoothScroll();
    cy.get("[data-cy = 'contact']").as("contact");
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
            .find("[data-cy = 'sectionHeader']")
            .should("be.visible")
            .and("contain", "Contact");
        });
      });

      describe("Personal info", () => {
        for (const type in contact) {
          const info = contact[type as keyof Contact];

          it(`displays "${info}" as ${type}`, () => {
            cy.get("@contact")
              .find(`[data-cy = 'personalInfo'] [data-cy = '${type}']`)
              .should("be.visible")
              .and("contain", info);
          });
        }
      });

      describe("Form", () => {
        beforeEach(() => {
          cy.get("@contact").find("form").as("form");

          cy.get("@form").find("[data-cy = 'name']").as("name");
          cy.get("@form").find("[data-cy = 'email']").as("email");
          cy.get("@form").find("[data-cy = 'subject']").as("subject");
          cy.get("@form").find("[data-cy = 'message']").as("message");
          cy.get("@form").find("[type = 'submit']").as("submitButton");

          cy.get("@name").find("input").as("nameInput");
          cy.get("@email").find("input").as("emailInput");
          cy.get("@subject").find("input").as("subjectInput");
          cy.get("@message").find("textarea").first().as("messageInput");
        });

        it("fails to submit without filling in any fields", () => {
          cy.intercept("POST", `${contactForm.apiUrlPrefix}/*`, cy.spy().as("formspreeApi"));

          cy.get("@form").submit();
          cy.get("@formspreeApi").should("not.be.called");

          cy.focused().should("have.attr", "name", "name");

          const fieldRequiredError = contactForm.textFieldError.required;
          cy.get("@name").should("contain", fieldRequiredError);
          cy.get("@email").should("contain", fieldRequiredError);
          cy.get("@subject").should("contain", fieldRequiredError);
          cy.get("@message").should("contain", fieldRequiredError);
        });

        it("fails to submit when filling in non-email content in the email field", () => {
          cy.intercept("POST", `${contactForm.apiUrlPrefix}/*`, cy.spy().as("formspreeApi"));

          const validFormValues = contactForm.validFormValues;
          cy.get("@nameInput").type(validFormValues.name);
          cy.get("@emailInput").type("definitely not an email");
          cy.get("@subjectInput").type(validFormValues.subject);
          cy.get("@messageInput").type(validFormValues.message);

          cy.get("@form").submit();
          cy.get("@formspreeApi").should("not.be.called");

          const fieldEmailError = contactForm.textFieldError.email;
          cy.get("@name").should("contain", contactForm.defaultHelperText);
          cy.get("@email").should("contain", fieldEmailError);
          cy.get("@subject").should("contain", contactForm.defaultHelperText);
          cy.get("@message").should("contain", contactForm.defaultHelperText);
        });

        it("submits successfully when filling in valid contents", () => {
          cy.intercept("POST", `${contactForm.apiUrlPrefix}/*`, {
            body: contactForm.formspreeResponse.success
          }).as("formspreeApi");

          const validFormValues = contactForm.validFormValues;
          cy.get("@nameInput").type(validFormValues.name);
          cy.get("@emailInput").type(validFormValues.email);
          cy.get("@subjectInput").type(validFormValues.subject);
          cy.get("@messageInput").type(validFormValues.message);

          cy.get("@form").submit();
          cy.wait("@formspreeApi").then(({ response }) => {
            expect(response?.body.ok).to.be.true;
          });

          cy.get("@submitButton").should("have.class", buttonClasses.containedSuccess);
          cy.get("@nameInput").should("have.value", "");
          cy.get("@emailInput").should("have.value", "");
          cy.get("@subjectInput").should("have.value", "");
          cy.get("@messageInput").should("have.value", "");
        });

        it("displays the error messages when Formspree API returns a HTTP error.", () => {
          cy.intercept("POST", `${contactForm.apiUrlPrefix}/*`, {
            statusCode: 400,
            body: contactForm.formspreeResponse.error
          }).as("formspreeApi");

          const validFormValues = contactForm.validFormValues;
          cy.get("@nameInput").type(validFormValues.name);
          cy.get("@emailInput").type(validFormValues.email);
          cy.get("@subjectInput").type(validFormValues.subject);
          cy.get("@messageInput").type(validFormValues.message);

          cy.get("@form").submit();
          cy.wait("@formspreeApi").then(({ response }) => {
            cy.get("@form").find("[data-cy = 'alerts']").as("alerts");
            for (const error of response?.body.errors as FormError[]) {
              cy.get("@alerts")
                .should("be.visible")
                .and("contain", error.message);
            }
          });
        });

        it("displays the error message when having network error", () => {
          cy.intercept("POST", `${contactForm.apiUrlPrefix}/*`, {
            forceNetworkError: true
          }).as("formspreeApi");

          const validFormValues = contactForm.validFormValues;
          cy.get("@nameInput").type(validFormValues.name);
          cy.get("@emailInput").type(validFormValues.email);
          cy.get("@subjectInput").type(validFormValues.subject);
          cy.get("@messageInput").type(validFormValues.message);

          cy.get("@form").submit();
          cy.wait("@formspreeApi");

          cy.get("@form").find("[data-cy = 'alerts']")
            .should("be.visible")
            .and("contain", contactForm.offlineError);
        });
      });
    });
  }
});

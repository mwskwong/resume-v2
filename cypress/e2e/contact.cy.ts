import { defaultHelperText, errorMessages, validEmail } from "../fixtures/contact.json";

import { CONTACT } from "constants/nav";

describe("Contact", () => {
  context("Form", () => {
    for (const field in validEmail) {
      context(`${field} field`, () => {
        beforeEach(() => {
          cy.visit(`/#${CONTACT.id}`)
            .window()
            .its("scrollY")
            .should("not.equal", 0);
          cy.get("[data-cy='contact']").submit().wait(1000);
        });

        it("is required", () => {
          cy.get(`[data-cy='${field}']`)
            .children()
            .each($el => cy.wrap($el).should("have.class", "Mui-error"));
          cy.get(`[data-cy='${field}']`)
            .find("> .MuiFormHelperText-root")
            .should("have.text", errorMessages.required);
        });

        if (field === "email") {
          it("must contain a valid email", () => {
            // email field must be an input
            cy.get(`[data-cy='${field}']`)
              .find("input")
              .type("some random text");
            cy.get(`[data-cy='${field}']`)
              .children()
              .each($el => cy.wrap($el).should("have.class", "Mui-error"));
            cy.get(`[data-cy='${field}']`)
              .find("> .MuiFormHelperText-root")
              .should("have.text", errorMessages.email);
          });
        }

        it("updates status on type", () => {
          // message field is an textarea
          // There is a invisible textarea in <Input multiple/>
          cy.get(`[data-cy='${field}']`)
            .find(":is(input, textarea)")
            .filter(":visible")
            .clear();
          cy.get(`[data-cy='${field}']`)
            .find(":is(input, textarea)")
            .filter(":visible")
            .type(field === "email" ? validEmail.email : `This is the content of ${field}`);
          cy.get(`[data-cy='${field}']`).children().each($el => cy.wrap($el).should("not.have.class", "Mui-error"));
          cy.get(`[data-cy='${field}']`)
            .find("> .MuiFormHelperText-root")
            .should("have.text", defaultHelperText);
        });
      });
    }

    context("Submission", () => {
      before(() => {
        for (const field in validEmail) {
          cy.get(`[data-cy='${field}']`)
            .find(":is(input, textarea)")
            .filter(":visible")
            .clear();
        }
      });

      it("is a success with valid data", () => {
        Object.entries(validEmail).forEach(([field, value]) => {
          cy.get(`[data-cy='${field}']`)
            .find(":is(input, textarea)")
            .filter(":visible").type(value);
        });

        cy.get("[data-cy='contact']").submit();
        cy.get("[data-cy='contact']").find("[type='submit']").should("have.class", "MuiLoadingButton-loading");

        cy.intercept({
          method: "POST",
          url: "https://formspree.io/f/*"
        }).as("formSubmission");
        cy.wait("@formSubmission").then(interception => {
          expect(interception?.response?.body?.ok).be.true;
          cy.get("[data-cy='contact']")
            .find("[type='submit']")
            .should("have.class", "MuiButton-containedSuccess");
          for (const field in validEmail) {
            cy.get(`[data-cy='${field}']`)
              .find(":is(input, textarea)")
              .filter(":visible")
              .should("have.value", "");
          }
        });
      });

      it("resets submit button success status after 5s", () => {
        cy.get("[data-cy='contact']")
          .find("[type='submit']")
          .should("have.class", "MuiButton-containedSuccess");
        cy.wait(5000);
        cy.get("[data-cy='contact']")
          .find("[type='submit']")
          .should("not.have.class", "MuiButton-containedSuccess");
      });

      // TODO: form submission fail
    });
  });
});
import { formHelperTextClasses } from "@mui/material";

import { CONTACT } from "@/constants/nav";

import { defaultHelperText, errorMessages, validEmail } from "../fixtures/contact.json";

describe("Contact", () => {
  beforeEach(() => {
    cy.visit(`/#${CONTACT.id}`)
      .window()
      .its("scrollY")
      .should("not.equal", 0);
    cy.disableSmoothScroll();
    cy.get("[data-cy='contact']").submit();
  });

  context("Form", () => {
    for (const field in validEmail) {
      context(`${field} field`, () => {
        it("is required", () => {
          cy.get(`[data-cy='${field}']`)
            .children()
            .each($el => cy.wrap($el).should("have.class", "Mui-error"));
          cy.get(`[data-cy='${field}']`)
            .find(`> .${formHelperTextClasses.root}`)
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
              .find(`> .${formHelperTextClasses.root}`)
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
            .find(`> .${formHelperTextClasses.root}`)
            .should("have.text", defaultHelperText);
        });
      });
    }

    context("Submission", () => {

      context("Success", () => {
        before(() => {
          cy.intercept("POST", "https://formspree.io/f/*", { body: { ok: true }, delay: 1000 })
            .as("formSubmission");
        });

        it("succeeds with valid data", () => {
          Object.entries(validEmail).forEach(([field, value]) => {
            cy.get(`[data-cy='${field}']`)
              .find(":is(input, textarea)")
              .filter(":visible").type(value);
          });

          cy.get("[data-cy='contact']").submit();
          cy.get("[data-cy='contact']").find("[type='submit']").should("have.class", "MuiLoadingButton-loading");

          cy.wait("@formSubmission").then(interception =>
            expect(interception?.response?.body?.ok).be.true
          );
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

        it("resets submit button success status after 5s", () => {
          cy.wait(5000);
          cy.get("[data-cy='contact']")
            .find("[type='submit']")
            .should("not.have.class", "MuiButton-containedSuccess");
        });
      });

      context("Failure", () => {
        before(() => {
          cy.intercept("POST", "https://formspree.io/f/*", { forceNetworkError: true, delay: 1000 })
            .as("formSubmission");
        });

        it("fails when offline", () => {
          Object.entries(validEmail).forEach(([field, value]) => {
            cy.get(`[data-cy='${field}']`)
              .find(":is(input, textarea)")
              .filter(":visible").type(value);
          });

          cy.get("[data-cy='contact']").submit();

          cy.wait("@formSubmission");
          cy.get("[data-cy='contact']")
            .find("[data-cy='alert']")
            .contains("Failed to fetch");
          cy.get("[data-cy='contact']")
            .find("[type='submit']")
            .should("not.have.class", "MuiButton-containedSuccess");
        });
      });
    });
  });
});
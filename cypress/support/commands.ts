/// <reference types="cypress" />
import "cypress-downloadfile/lib/downloadFileCommand";

import { buttonClasses } from "@mui/material/Button";
import { listItemButtonClasses } from "@mui/material/ListItemButton";
import viewports from "cypress/fixtures/viewports.json";

import { Section } from "@/types";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare global {
  namespace Cypress {
    interface Chainable {
      disableSmoothScroll: () => Chainable<void>;
      navigateToSection: (section: Section, viewport: keyof typeof viewports) => Chainable<void>;
      verifySectionIsInViewport: (section: Section) => Chainable<void>;
    }
  }
}

Cypress.Commands.add("disableSmoothScroll", () => {
  cy.document().then(document => {
    const node = document.createElement("style");
    node.innerHTML = "html { scroll-behavior: auto !important; }";
    document.body.appendChild(node);
  });
});

Cypress.Commands.add("navigateToSection", (section, viewport) => {
  const container = viewport === "desktop" ? "navButtons" : "navList";
  const activeClassName = viewport === "desktop" ? buttonClasses.textPrimary : listItemButtonClasses.selected;

  if (viewport === "mobile") {
    cy.get("[data-cy = 'menuButton']").click();
  }

  cy.get(`[data-cy = '${container}'] [data-cy = '${section.id}']`).as("navElement");
  cy.get("@navElement").should("contain", section.name);
  cy.get("@navElement").click();
  cy.get("@navElement").should("have.class", activeClassName);
  cy.verifySectionIsInViewport(section);

  if (viewport === "mobile") {
    cy.get("[data-cy = 'menuButton']").click();
  }
});

Cypress.Commands.add("verifySectionIsInViewport", section => {
  cy.get(`#${section.id}`).first()
    .should($section =>
      // Expect equal to 0, with +-1px margin of error
      expect($section[0].getClientRects()[0].top)
        .greaterThan(-1)
        .and
        .lessThan(1)
    );
});

export { };

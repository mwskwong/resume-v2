/// <reference types="cypress" />
import { buttonClasses, listItemClasses } from "@mui/material";

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

Cypress.Commands.add("disableSmoothScroll", () => {
  cy.document().then(document => {
    const node = document.createElement("style");
    node.innerHTML = "html { scroll-behavior: inherit !important; }";
    document.body.appendChild(node);
  });
});

Cypress.Commands.add("navigateToSection", (section, viewport) => {
  const elementType = viewport === "desktop" ? "NavButton" : "NavListItem";
  const dataCy = `${section.id}${elementType}`;
  const activeClassName = viewport === "desktop" ? buttonClasses.textPrimary : listItemClasses.selected;

  if (viewport === "mobile") {
    cy.toggleNavMenu();
  }

  const navElement = cy.get(`[data-cy='${dataCy}']`);
  navElement.contains(section.name);
  navElement.click();
  navElement.should("have.class", activeClassName);
  cy.hash().should("equal", `#${section.id}`);
  cy.get(`#${section.id}`).first()
    .should($section =>
      expect($section[0].getClientRects()[0].top).equals(0)
    );

  if (viewport === "mobile") {
    cy.toggleNavMenu();
  }
});

Cypress.Commands.add("toggleNavMenu", () => cy.get("[data-cy='menuButton']").click());

export { };
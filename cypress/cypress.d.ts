import viewports from "cypress/fixtures/viewports.json";

import { Section } from "@/types";

declare global {
  namespace Cypress {
    interface Chainable {
      navigateToSection: (
        section: Section,
        viewport: keyof typeof viewports
      ) => Chainable<void>;
      verifySectionIsInViewport: (section: Section) => Chainable<void>;
    }
  }
}

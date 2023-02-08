import viewports from "cypress/fixtures/viewports.json";
import { FC, SVGProps } from "react";

import { Section } from ".";

declare global {
  declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_URL: string;
      NEXT_PUBLIC_FORM: string;
      ANALYZE_BUNDLE: 1 | 0;
      VERCEL_ENV: "preview" | "production" | "development";
    }
  }

  declare module "*.pdf" {
    const content: string;
    export default content;
  }

  declare module "*.svg" {
    const ReactComponent: FC<SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }

  namespace Cypress {
    interface Chainable {
      disableSmoothScroll: () => Chainable<void>;
      toggleNavMenu: () => Chainable<JQuery>;
      navigateToSection: (section: Section, viewport: keyof typeof viewports) => Chainable<void>;
      verifySectionIsInViewport: (section:Section) => Chainable<void>;
    }
  }
}

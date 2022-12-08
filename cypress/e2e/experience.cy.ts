import experiences from "constants/_experiences";
import { EXPERIENCE } from "constants/nav";

import viewports from "./viewports";

describe("Experience", () => {
  beforeEach(() => {
    cy.visit(`/#${EXPERIENCE.id}`);
    cy.disableSmoothScroll();
  });

  context("Timeline", () => {
    it("shows period on the opposite side on desktop", () => {
      cy.get(`#${EXPERIENCE.id} [data-cy='timelinePeriodDesktop']`).should("be.visible");
      cy.get(`#${EXPERIENCE.id} [data-cy='timelinePeriodMobile']`).should("not.be.visible");
    });

    it("shows period on the same side on mobile", viewports.mobile, () => {
      cy.get(`#${EXPERIENCE.id} [data-cy='timelinePeriodDesktop']`).should("not.be.visible");
      cy.get(`#${EXPERIENCE.id} [data-cy='timelinePeriodMobile']`).should("be.visible");
    });

    for (const { jobTitle, supportingDocuments } of experiences) {
      for (const { name } of supportingDocuments ?? []) {
        it(`opens ${name} of ${jobTitle}`, () => {
          cy.get(`[data-cy='${jobTitle}-${name}']`)
            .then($a => {
              expect($a).have.attr("target", "_blank");
              $a.attr("target", "_self");
            })
            .click();
          cy.go("back");
        });
      }
    }
  });
});
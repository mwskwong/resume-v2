import { EXPERIENCE } from "constants/nav";
import viewports from "./viewports";

describe("Experience", () => {
  context("Timeline", () => {
    before(() => {
      cy.visit(`/#${EXPERIENCE.id}`);
    });

    it("shows period on the opposite side on desktop", () => {
      cy.get("[data-cy='timelinePeriodDesktop']").should("be.visible");
      cy.get("[data-cy='timelinePeriodMobile']").should("not.be.visible");
    });

    it("shows period on the same side on mobile", viewports.mobile, () => {
      cy.get("[data-cy='timelinePeriodDesktop']").should("not.be.visible");
      cy.get("[data-cy='timelinePeriodMobile']").should("be.visible");
    });

    it("opens supporting documents", () => {
      cy.get("body").then($body => {
        if ($body.find("[data-cy='supportingDocument']").length > 0) {
          cy.get("[data-cy='supportingDocument']").then($anchors => {
            const count = $anchors.length;
            for (let i = 0; i < count; i++) {
              cy.get("[data-cy='supportingDocument']")
                .then($a => {
                  expect($a).have.attr("target", "_blank");
                  $a.attr("target", "_self");
                })
                .eq(i)
                .click();
              cy.go("back");
            }
          });
        }
      });
    });
  });

  context("Certifications", () => {
    it("opens certifications", () => {
      cy.get("body").then($body => {
        if ($body.find("[data-cy='certifications']").length > 0) {
          cy.get("[data-cy='certifications']").then($anchors => {
            const count = $anchors.length;
            for (let i = 0; i < count; i++) {
              cy.get("[data-cy='certifications']")
                .then($a => {
                  expect($a).have.attr("target", "_blank");
                  $a.attr("target", "_self");
                })
                .eq(i)
                .click();
              cy.go("back");
            }
          });
        }
      });
    });
  });
});
import { EDUCATION } from "constants/nav";
import viewports from "./viewports";

describe("Education", () => {
  context("Timeline", () => {
    before(() => {
      cy.visit(`/#${EDUCATION.id}`);
    });

    it("shows period on the opposite side on desktop", () => {
      cy.get(`#${EDUCATION.id} [data-cy='timelinePeriodDesktop']`).should("be.visible");
      cy.get(`#${EDUCATION.id} [data-cy='timelinePeriodMobile']`).should("not.be.visible");
    });

    it("shows period on the same side on mobile", viewports.mobile, () => {
      cy.get(`#${EDUCATION.id} [data-cy='timelinePeriodDesktop']`).should("not.be.visible");
      cy.get(`#${EDUCATION.id} [data-cy='timelinePeriodMobile']`).should("be.visible");
    });

    it("opens supporting documents", () => {
      cy.get("body").then($body => {
        if ($body.find(`#${EDUCATION.id} [data-cy='supportingDocument']`).length > 0) {
          cy.get(`#${EDUCATION.id} [data-cy='supportingDocument']`).then($anchors => {
            const count = $anchors.length;
            for (let i = 0; i < count; i++) {
              cy.get(`#${EDUCATION.id} [data-cy='supportingDocument']`)
                .then($a => {
                  expect($a).have.attr("target", "_blank");
                  $a.attr("target", "_self");
                })
                .eq(i)
                .click({ scrollBehavior: "center" });
              cy.go("back");
            }
          });
        }
      });
    });
  });

  context("Courses", () => {
    it("opens course", () => {
      cy.get("body").then($body => {
        if ($body.find("[data-cy='course']").length > 0) {
          cy.get("[data-cy='course']").then($anchors => {
            const count = $anchors.length;
            for (let i = 0; i < count; i++) {
              cy.get("[data-cy='course']")
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
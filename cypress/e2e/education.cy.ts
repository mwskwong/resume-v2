import courses, { categories } from "constants/_courses";

import { EDUCATION } from "constants/nav";
import education from "constants/_education";
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

    for (const { degree, supportingDocuments } of education) {
      for (const { name } of supportingDocuments ?? []) {
        it(`opens ${name} of ${degree}`, () => {
          cy.get(`[data-cy='${degree}-${name}']`)
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

  context("Courses", () => {
    for (const { name } of courses) {
      it(`opens ${name}`, () => {
        cy.get(`[data-cy='${name}']`)
          .then($card => {
            const a = $card.find("a");
            if (a.length) {
              cy.wrap(a).then($a => {
                expect($a).have.attr("target", "_blank");
                $a.attr("target", "_self");
              })
                .click();
              cy.go("back");
            } else {
              cy.log(`${name} doesn't click to a certificate`);
            }
          });
      });
    }

    context("Filtering", () => {
      for (const currentCategory of categories) {
        it(`filters courses on ${currentCategory} category`, () => {
          cy.get(`[data-cy='${currentCategory}']`).click();

          for (const { name, category } of courses) {
            cy.get(`[data-cy='${name}']`).should(
              category === currentCategory
                ? "exist"
                : "not.exist"
            );
          }
        });
      }

      it("shows all courses", () => {
        cy.get("[data-cy='All']").click();

        for (const { name } of courses) {
          cy.get(`[data-cy='${name}']`).should("be.visible");
        }
      });
    });
  });
});
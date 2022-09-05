import type { Section } from "constants/nav";
import nav from "constants/nav";

const navigatesToSection = (section: Section) => {
  cy.get(`a:contains(${section.name})`).click();
  cy.location("hash").should("equal", `#${section.id}`);
  if (section.id === nav.HOME.id) cy.window().its("scrollY").should("eq", 0);
  else cy.get(`#${section.id}`)
    .should(($elem: JQuery<HTMLElement>) => expect($elem[0].getClientRects()[0].top).gte(47).lte(65));
};

describe("Navigation", () => {
  beforeEach(() => cy.visit("/"));

  it("navigates to Hero section", () => navigatesToSection(nav.HOME));

  it("navigates to About section", () => navigatesToSection(nav.ABOUT));

  it("navigates to Experience section", () => navigatesToSection(nav.EXPERIENCE));

  it("navigates to Education section", () => navigatesToSection(nav.EDUCATION));

  it("navigates to Contact section", () => navigatesToSection(nav.CONTACT));
});
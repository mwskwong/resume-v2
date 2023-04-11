// /// <reference types="cypress-downloadfile"/>
// import courseCertificates from "cypress/fixtures/courseCertificates.json";
// import documents from "cypress/fixtures/supportingDocuments.json";
// import viewports from "cypress/fixtures/viewports.json";

// import courses from "@/constants/courses";
// import educations from "@/constants/educations";
// import { EDUCATION } from "@/constants/nav";
// import dateTimeFormat from "@/utils/date-time-format";

// const courseHasCertificate = (
//   courseId: string
// ): courseId is keyof typeof courseCertificates =>
//   Object.keys(courseCertificates).includes(courseId);

// describe("Education section", () => {
//   beforeEach(() => {
//     cy.visit(`/#${EDUCATION.id}`);
//   });

//   for (const viewportType in viewports) {
//     const viewport = viewports[viewportType as keyof typeof viewports];
//     describe(`${Cypress._.capitalize(viewportType)} view`, viewport, () => {
//       describe("Navigation", () => {
//         it("navigates to section by clicking navigation link", () => {
//           cy.wait(10);
//           cy.scrollTo("center");
//           cy.navigateToSection(
//             EDUCATION,
//             viewportType as keyof typeof viewports
//           );
//         });
//       });

//       describe("Section header", () => {
//         it('contains "Education"', () => {
//           cy.get("[data-cy = 'education'] [data-cy = 'sectionHeader']")
//             .should("be.visible")
//             .and("contain", "Education");
//         });
//       });

//       describe("Education timeline", () => {
//         const timelineSelector =
//           "[data-cy = 'education'] [data-cy = 'timeline']";

//         for (let i = 0; i < educations.length; i++) {
//           const { from, to, degree, school, mode, supportingDocuments } =
//             educations[i];
//           const period = `${dateTimeFormat.format(from)} — ${
//             to === "Present" ? "Present" : dateTimeFormat.format(to)
//           }`;

//           describe(`${degree} at ${school.name}`, () => {
//             it(`has "${school.name}" thumbnail`, () => {
//               cy.get(`${timelineSelector} [data-cy = 'thumbnail']`)
//                 .eq(i)
//                 .as("thumbnail");

//               cy.get("@thumbnail")
//                 .find("img")
//                 .should("be.visible")
//                 .and("have.attr", "src")
//                 .and("include", school.id);

//               cy.get("@thumbnail")
//                 .find("a")
//                 .should("be.visible")
//                 .and("have.attr", "target", "_blank")
//                 .and("have.attr", "href", school.url);
//             });

//             it(`has title "${degree}"`, () => {
//               cy.get(`${timelineSelector} [data-cy = 'title']`)
//                 .eq(i)
//                 .should("be.visible")
//                 .and("contain", degree);
//             });

//             it(`has subtitle "${school.name}"`, () => {
//               cy.get(`${timelineSelector} [data-cy = 'subtitle']`)
//                 .eq(i)
//                 .should("be.visible")
//                 .and("contain", school.name);
//             });

//             it(`has period "${period}"`, () => {
//               cy.get(`${timelineSelector} [data-cy = 'period']`)
//                 .eq(i)
//                 .should("be.visible")
//                 .and("contain", period);
//             });

//             if (mode) {
//               it(`has mode "${mode.name}"`, () => {
//                 cy.get(`${timelineSelector} [data-cy = 'type']`)
//                   .eq(i)
//                   .should("be.visible")
//                   .and("contain", mode.name);
//               });
//             }

//             describe("Support documents", () => {
//               for (const supportingDocument of supportingDocuments) {
//                 const document =
//                   documents[supportingDocument as keyof typeof documents];

//                 describe(supportingDocument, () => {
//                   it("contains the correct label", () => {
//                     cy.get(
//                       `${timelineSelector} [data-cy = '${supportingDocument}']`
//                     )
//                       .should("be.visible")
//                       .and("contain", document.name);
//                   });

//                   if (!document.private) {
//                     it("opens the correct document in a new tab", () => {
//                       cy.get(
//                         `${timelineSelector} [data-cy = '${supportingDocument}'] a`
//                       ).as("anchor");
//                       cy.get("@anchor")
//                         .should("have.attr", "target", "_blank")
//                         .click();

//                       cy.get("@anchor")
//                         .invoke("attr", "href")
//                         .then((href) => {
//                           const filename = href?.split("/").at(-1);
//                           cy.readFile(`./cypress/downloads/${filename ?? ""}`)
//                             .should("contain", "%PDF-")
//                             .and("contain", document.matchingString);
//                         });
//                     });
//                   }

//                   it("contains the correct thumbnail", () => {
//                     cy.get(
//                       `${timelineSelector} [data-cy = '${supportingDocument}'] img`
//                     )
//                       .should("be.visible")
//                       .and("have.attr", "src")
//                       .and("match", new RegExp(document.thumbnailRegex, "i"));
//                   });
//                 });
//               }
//             });
//           });
//         }
//       });

//       describe("Courses", () => {
//         describe("Title", () => {
//           it('contains "Courses & Training"', () => {
//             cy.get("[data-cy = 'courses'] [data-cy = 'title']")
//               .should("be.visible")
//               .and("contain", "Courses & Training");
//           });
//         });

//         describe("Courses filtering", () => {
//           beforeEach(() => {
//             cy.get("[data-cy = 'courses'] [data-cy = 'certificateCard']").as(
//               "courseCards"
//             );
//           });

//           it("displays all courses initially", () => {
//             for (const { name } of courses) {
//               cy.get("@courseCards").contains(name).should("be.visible");
//             }
//           });

//           const keywords = {
//             name: {
//               originalCase: "Adminis",
//               uppercase: "Adminis".toUpperCase(),
//               lowercase: "Adminis".toLowerCase(),
//             },
//             category: {
//               originalCase: "Datab",
//               uppercase: "Datab".toUpperCase(),
//               lowercase: "Datab".toLowerCase(),
//             },
//             institution: {
//               originalCase: "demy",
//               uppercase: "demy".toUpperCase(),
//               lowercase: "demy".toLowerCase(),
//             },
//           };

//           for (const key in keywords.name) {
//             it(`searches the courses by name in ${key}`, () => {
//               const keyword = keywords.name[key as keyof typeof keywords.name];

//               cy.get("[data-cy = 'courses'] input").type(keyword);
//               for (const { name } of courses) {
//                 if (name.toLowerCase().includes(keyword.toLowerCase())) {
//                   cy.get("@courseCards").contains(name).should("be.visible");
//                 } else {
//                   cy.get("@courseCards").contains(name).should("not.exist");
//                 }
//               }
//             });
//           }

//           for (const key in keywords.category) {
//             it(`searches the courses by category in ${key}`, () => {
//               const keyword =
//                 keywords.category[key as keyof typeof keywords.category];

//               cy.get("[data-cy = 'courses'] input").type(keyword);
//               for (const { category } of courses) {
//                 if (
//                   category.name.toLowerCase().includes(keyword.toLowerCase())
//                 ) {
//                   cy.get("@courseCards")
//                     .contains(category.name)
//                     .should("be.visible");
//                 } else {
//                   cy.get("@courseCards")
//                     .contains(category.name)
//                     .should("not.exist");
//                 }
//               }
//             });
//           }

//           for (const key in keywords.institution) {
//             it(`searches the courses by institution in ${key}`, () => {
//               const keyword =
//                 keywords.institution[key as keyof typeof keywords.institution];

//               cy.get("[data-cy = 'courses'] input").type(keyword);
//               for (const { institution } of courses) {
//                 if (
//                   institution.name.toLowerCase().includes(keyword.toLowerCase())
//                 ) {
//                   cy.get("@courseCards")
//                     .get(`[data-cy = '${institution.id}Icon']`)
//                     .should("be.visible");
//                 } else {
//                   cy.get("@courseCards")
//                     .get(`[data-cy = '${institution.id}Icon']`)
//                     .should("not.exist");
//                 }
//               }
//             });
//           }

//           it("searches the courses by by special character without crashing", () => {
//             const keyword = "\\.*%$#@~`";
//             cy.get("[data-cy = 'courses'] input").type(keyword);
//             cy.get("@courseCards").should("not.exist");
//           });
//         });

//         for (let i = 0; i < courses.length; i++) {
//           const course = courses[i];
//           describe(`${course.name} card`, () => {
//             beforeEach(() => {
//               cy.get("[data-cy = 'courses'] [data-cy = 'certificateCard']")
//                 .eq(i)
//                 .as("courseCard");
//             });

//             it(`displays the course name "${course.name}" as primary text`, () => {
//               cy.get("@courseCard")
//                 .find("[data-cy = 'name']")
//                 .should("be.visible")
//                 .and("contain", course.name);
//             });

//             it(`displays the institution as "${course.institution.name}" as secondary text`, () => {
//               cy.get("@courseCard")
//                 .find("[data-cy = 'organization']")
//                 .should("be.visible")
//                 .and("contain", course.institution.name);
//             });

//             it(`displays the "${course.institution.name}" icon`, () => {
//               cy.get("@courseCard")
//                 .get(`[data-cy = '${course.institution.id}Icon']`)
//                 .should("be.visible");
//             });

//             if (courseHasCertificate(course.id)) {
//               const courseCertificate = courseCertificates[course.id];
//               it("opens the correct certificate in a new tab", () => {
//                 cy.get("@courseCard").find("a").as("anchor");

//                 cy.get("@anchor")
//                   .should("have.attr", "target", "_blank")
//                   .click();

//                 cy.get("@anchor")
//                   .invoke("attr", "href")
//                   .then((href) => {
//                     expect(href).to.exist;
//                     if (href) {
//                       const filename = href.split("/").at(-1);
//                       let fileTypeMatchingString;
//                       switch (courseCertificate.type) {
//                         case "pdf": {
//                           fileTypeMatchingString = "%PDF-";
//                           break;
//                         }
//                         case "jpg": {
//                           fileTypeMatchingString = "JFIF";
//                           const fileUrl = new URL(
//                             href,
//                             Cypress.config().baseUrl ?? ""
//                           ).href;
//                           cy.downloadFile(
//                             fileUrl,
//                             "./cypress/downloads",
//                             filename ?? ""
//                           );
//                           break;
//                         }
//                       }

//                       cy.readFile(`./cypress/downloads/${filename ?? ""}`)
//                         .should("contain", fileTypeMatchingString)
//                         .and("contain", courseCertificate.matchingString);
//                     }
//                   });
//               });
//             }
//           });
//         }
//       });
//     });
//   }
// });

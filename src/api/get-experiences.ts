import { Entry } from "contentful";
import { orderBy } from "lodash-es";
import "server-only";

import client from "./client";
import {
  ExperienceEntrySkeleton,
  OrganizationEntrySkeleton,
  SkillEntrySkeleton,
} from "./types";

const getExperiences = async () => {
  // TODO: Can I do better?
  // Contentful always place undefined fields at the bottom,
  // so we first sort in ASC and then reverse it
  // such that it's in DESC order while undefined values are at the top
  const { items } =
    await client.withoutUnresolvableLinks.getEntries<ExperienceEntrySkeleton>({
      content_type: "experience",
      order: ["fields.to"],
    });

  items.reverse();
  for (const item of items) {
    item.fields.skills = orderBy(
      item.fields.skills,
      ["fields.proficiency", "fields.name"],
      ["desc", "asc"]
    ) as typeof item.fields.skills;
  }

  return items.map((item) => ({
    ...item.fields,
    companies: item.fields.companies
      .filter(
        (
          elem
        ): elem is Entry<
          OrganizationEntrySkeleton,
          "WITHOUT_UNRESOLVABLE_LINKS"
        > => Boolean(elem)
      )
      .map((company) => ({
        ...company.fields,
        logo:
          company.fields.logo?.fields.file &&
          `https:${company.fields.logo.fields.file.url}`,
      })),
    supportingDocuments: item.fields.supportingDocuments
      ?.map((supportingDocument) =>
        supportingDocument?.fields.title && supportingDocument.fields.file
          ? {
              title: supportingDocument.fields.title,
              url: `https:${supportingDocument.fields.file.url}`,
            }
          : undefined
      )
      .filter((elem): elem is { title: string; url: string } => Boolean(elem)),
    skills: item.fields.skills
      .filter(
        (
          elem
        ): elem is Entry<SkillEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS"> =>
          Boolean(elem)
      )
      .map((skill) => skill.fields.name),
  }));
};

export default getExperiences;

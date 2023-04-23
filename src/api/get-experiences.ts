import { Asset, AssetFile, Entry } from "contentful";
import { orderBy } from "lodash-es";
import "server-only";

import client from "./client";
import {
  ExperienceEntrySkeleton,
  OrganizationEntrySkeleton,
  SkillEntrySkeleton,
} from "./types";

export default async function getExperiences() {
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
          company.fields.logo &&
          (company.fields.logo.fields.file as AssetFile).url,
      })),
    supportingDocuments: item.fields.supportingDocuments
      ?.filter((elem): elem is Asset => Boolean(elem))
      .map((supportingDocument) => ({
        title: supportingDocument.fields.title as string,
        url: `https:${(supportingDocument.fields.file as AssetFile).url}`,
      })),
    skills: item.fields.skills
      .filter(
        (
          elem
        ): elem is Entry<SkillEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS"> =>
          Boolean(elem)
      )
      .map((skill) => skill.fields.name),
  }));
}

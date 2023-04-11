import { AssetFile } from "contentful";
import { orderBy } from "lodash-es";
import "server-only";

import client from "./client";
import { ExperienceEntrySkeleton } from "./types";

const getExperiences = async () => {
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
    from: new Date(item.fields.from),
    to: item.fields.to && new Date(item.fields.to),
    companies: item.fields.companies.map(
      (company) =>
        company && {
          ...company.fields,
          logo:
            company.fields.logo &&
            (company.fields.logo.fields.file as AssetFile).url,
        }
    ),
    supportingDocuments:
      item.fields.supportingDocuments &&
      (item.fields.supportingDocuments
        .map(
          (supportingDocument) =>
            supportingDocument && {
              title: supportingDocument.fields.title as string,
              url: `https:${(supportingDocument.fields.file as AssetFile).url}`,
            }
        )
        .filter(Boolean) as { title: string; url: string }[]),
    skills: item.fields.skills.map((skill) => skill?.fields.name),
  }));
};

export default getExperiences;

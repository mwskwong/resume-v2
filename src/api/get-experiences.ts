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
    companies: item.fields.companies.map((company) => ({
      ...company?.fields,
      logo: (company?.fields.logo?.fields.file as AssetFile).url,
    })),
    // TODO: generate thumbnail
    supportingDocuments: item.fields.supportingDocuments?.map(
      (supportingDocument) => {
        const file = supportingDocument?.fields.file as AssetFile;
        return {
          title: supportingDocument?.fields.title,
          url: file.url,
        };
      }
    ),
    skills: item.fields.skills.map((skill) => skill?.fields.name),
  }));
};

export default getExperiences;

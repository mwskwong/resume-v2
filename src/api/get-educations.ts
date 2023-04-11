import { Asset, AssetFile } from "contentful";
import "server-only";

import client from "./client";
import { EducationEntrySkeleton } from "./types";

export default async function getEducations() {
  // Contentful always place undefined fields at the bottom,
  // so we first sort in ASC and then reverse it
  // such that it's in DESC order while undefined values are at the top
  const { items } =
    await client.withoutUnresolvableLinks.getEntries<EducationEntrySkeleton>({
      content_type: "education",
      order: ["fields.to"],
    });

  items.reverse();

  return items.map((item) => ({
    ...item.fields,
    school: item.fields.school && {
      ...item.fields.school.fields,
      logo:
        item.fields.school.fields.logo &&
        (item.fields.school.fields.logo.fields.file as AssetFile).url,
    },
    supportingDocuments: item.fields.supportingDocuments
      ?.filter((elem): elem is Asset => Boolean(elem))
      .map((supportingDocument) => ({
        title: supportingDocument.fields.title as string,
        url: `https:${(supportingDocument.fields.file as AssetFile).url}`,
      })),
  }));
}

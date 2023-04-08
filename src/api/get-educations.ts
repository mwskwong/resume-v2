import { AssetFile } from "contentful";
import "server-only";

import client from "./client";
import { EducationEntrySkeleton } from "./types";

const getEducations = async () => {
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
    from: new Date(item.fields.from),
    to: item.fields.to && new Date(item.fields.to),
    school: {
      ...item.fields.school?.fields,
      logo: (item.fields.school?.fields.logo?.fields.file as AssetFile).url,
    },
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
  }));
};

export default getEducations;

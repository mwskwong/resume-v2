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
    school: item.fields.school && {
      ...item.fields.school.fields,
      logo: item.fields.school.fields.logo?.fields.file?.url,
    },
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
  }));
};

export default getEducations;

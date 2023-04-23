import { EntryFields } from "contentful";

import client from "./client";

export default async function getSupportingDocuments() {
  const { items } = await client.getAssets({
    "metadata.tags.sys.id[in]": ["supportingDocument"],
  });

  return items
    .map(
      (item) =>
        item.fields.file && {
          url: `https:${item.fields.file.url}`,
          lastModified: item.sys.updatedAt,
        }
    )
    .filter(
      (
        supportingDocument
      ): supportingDocument is {
        url: string;
        lastModified: EntryFields.Date;
      } => Boolean(supportingDocument)
    );
}

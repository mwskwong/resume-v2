import { EntryFields } from "contentful";
import "server-only";

import client from "./client";

const getSupportingDocuments = async () => {
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
};

export default getSupportingDocuments;

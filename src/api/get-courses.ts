import { AssetFile } from "contentful";
import "server-only";

import client from "./client";
import { CourseEntrySkeleton } from "./types";

const getCourses = async () => {
  const { items } =
    await client.withoutUnresolvableLinks.getEntries<CourseEntrySkeleton>({
      content_type: "course",
      order: ["fields.name"],
    });

  return items.map((item) => ({
    ...item.fields,
    institution: {
      id: item.fields.institution?.sys.id,
      name: item.fields.institution?.fields.name,
    },
    certificate: (item.fields.certificate?.fields.file as AssetFile).url,
  }));
};

export default getCourses;

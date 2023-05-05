import client from "./client";
import { CourseEntrySkeleton } from "./types";

export default async function getCourses() {
  const { items } =
    await client.withoutUnresolvableLinks.getEntries<CourseEntrySkeleton>({
      content_type: "course",
      order: ["fields.name"],
    });

  return items.map((item) => ({
    ...item.fields,
    institution: item.fields.institution && {
      id: item.fields.institution.sys.id,
      name: item.fields.institution.fields.name,
    },
    certificate:
      item.fields.certificate?.fields.file &&
      `https:${item.fields.certificate.fields.file.url}`,
  }));
}

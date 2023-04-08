import { AssetFile } from "contentful";
import { NextResponse } from "next/server";
import pdfjs from "pdfjs-dist";

import client, { CourseEntrySkeleton } from "@/api";

export const GET = async () => {
  const { items } =
    await client.withoutUnresolvableLinks.getEntries<CourseEntrySkeleton>({
      content_type: "course",
      order: ["fields.name"],
    });

  for (const course of items) {
    const url = (course.fields.certificate?.fields.file as AssetFile).url;

    const pdfDocument = await pdfjs.getDocument(url).promise;
    const page = await pdfDocument.getPage(0);
  }

  return NextResponse.json(items);
};

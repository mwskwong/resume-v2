import endent from "endent";
import { ServerRuntime } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;

  return new NextResponse(endent`
    User-agent: *
    Allow: /

    Sitemap: ${siteUrl}/sitemap.xml
  `);
};

export const runtime: ServerRuntime = "edge";

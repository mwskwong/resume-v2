import dedent from "dedent";
import { ServerRuntime } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;

  return new NextResponse(dedent`
    User-agent: *
    Allow: /
    
    Host: ${siteUrl}

    Sitemap: ${siteUrl}/sitemap.xml
  `);
};

export const runtime: ServerRuntime = "edge";

import { ServerRuntime } from "next";
import { NextResponse } from "next/server";
import { WebAppManifest } from "web-app-manifest";

import { firstName, lastName } from "@/constants/name";
import selfIntroduction from "@/constants/selfIntroduction";

export const GET = async () => {
  const manifest: WebAppManifest = {
    lang: "en",
    name: `${firstName} ${lastName}`,
    short_name: firstName,
    description: selfIntroduction,
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    start_url: "/",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff"
  };

  return NextResponse.json(manifest);
};

export const runtime: ServerRuntime = "experimental-edge";

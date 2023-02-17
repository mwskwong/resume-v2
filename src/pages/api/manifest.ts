import { PageConfig } from "next";
import { WebAppManifest } from "web-app-manifest";

import { firstName, lastName } from "@/constants/name";
import selfIntroduction from "@/constants/selfIntroduction";

const handler = () => {
  const manifest: WebAppManifest = {
    lang: "en",
    name: `${firstName} ${lastName}`,
    short_name: firstName,
    description: selfIntroduction,
    icons: [
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    start_url: "/",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff"
  };

  return new Response(
    JSON.stringify(manifest),
    {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    }
  );
};

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;

import { MetadataRoute } from "next";

import { firstName, lastName, selfIntroduction } from "@/constants/data";

export const runtime = "edge";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#ffffff",
    description: selfIntroduction,
    display: "standalone",
    icons: [
      {
        src: "/icon192",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/icon512",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    name: `${firstName} ${lastName}`,
    short_name: firstName,
    start_url: "/",
    theme_color: "#ffffff",
  };
}

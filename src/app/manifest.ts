import { MetadataRoute } from "next";

import { firstName, lastName, selfIntroduction } from "@/constants/data";

const manifest = (): MetadataRoute.Manifest => ({
  background_color: "#ffffff",
  description: selfIntroduction,
  display: "standalone",
  icons: [
    {
      src: "/icon/192",
      type: "image/png",
      sizes: "192x192",
    },
    {
      src: "/icon/512",
      type: "image/png",
      sizes: "512x512",
    },
  ],
  name: `${firstName} ${lastName}`,
  short_name: firstName,
  start_url: "/",
  theme_color: "#ffffff",
});

export const runtime = "edge";

export default manifest;

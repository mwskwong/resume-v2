import { ImageResponse } from "@vercel/og";
import { ServerRuntime } from "next";

import OG from "./OG";
import getRubikMedium from "./getRubikMedium";

export const GET = async () => {
  const rubikMedium = await getRubikMedium();

  return new ImageResponse(<OG />, {
    fonts: [
      {
        name: "Rubik",
        data: rubikMedium,
        weight: 500,
      },
    ],
  });
};

export const runtime: ServerRuntime = "experimental-edge";

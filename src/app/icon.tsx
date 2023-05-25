import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 32, height: 32 },
    },
    {
      contentType: "image/png",
      size: { width: 192, height: 192 },
    },
    {
      contentType: "image/png",
      size: { width: 512, height: 512 },
    },
  ];
}

type Params = ReturnType<typeof generateImageMetadata>[number];

export default function icon({ size }: Params) {
  return new ImageResponse(<Icon size={size} rounded />);
}

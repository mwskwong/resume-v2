import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";

export function generateImageMetadata() {
  return [
    {
      id: "32",
      contentType: "image/png",
      size: { width: 32, height: 32 },
    },
    {
      id: "192",
      contentType: "image/png",
      size: { width: 192, height: 192 },
    },
    {
      id: "512",
      contentType: "image/png",
      size: { width: 512, height: 512 },
    },
  ];
}

export default function icon({ id }: { id: string }) {
  const size = { width: parseInt(id), height: parseInt(id) };
  return new ImageResponse(<Icon size={size} rounded />, size);
}

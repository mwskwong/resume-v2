import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";
export const runtime = "edge";

export default function icon512() {
  return new ImageResponse(<Icon size={size} />, size);
}

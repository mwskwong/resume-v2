import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const runtime = "edge";

export default function icon() {
  return new ImageResponse(<Icon size={size} rounded />, size);
}

import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const runtime = "edge";

export default function appleIcon() {
  return new ImageResponse(<Icon size={size} />, size);
}

import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";
export const runtime = "edge";

export default function icon192() {
  return new ImageResponse(<Icon size={size} />, size);
}

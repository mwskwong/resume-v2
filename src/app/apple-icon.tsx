import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";

const appleIcon = () => {
  return new ImageResponse(<Icon size={size} />, size);
};

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const runtime = "edge";

export default appleIcon;

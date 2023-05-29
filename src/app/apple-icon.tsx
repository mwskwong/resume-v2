import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";

const appleIcon = () =>
  new ImageResponse(
    (
      <div
        style={{
          background: "white",
          display: "flex",
          padding: "20%",
          width: "100%",
          height: "100%",
        }}
      >
        <Icon width="100%" />
      </div>
    ),
    size
  );

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const runtime = "edge";

export default appleIcon;

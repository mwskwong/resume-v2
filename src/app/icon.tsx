import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";

const icon = ({ id }: { id: string }) =>
  new ImageResponse(
    (
      <div
        style={{
          background: "white",
          display: "flex",
          padding: "15%",
          borderRadius: "15%",
          width: "100%",
          height: "100%",
        }}
      >
        <Icon width="100%" />
      </div>
    ),
    { width: parseInt(id), height: parseInt(id) }
  );

export const runtime = "edge";
export const generateImageMetadata = () => [
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

export default icon;

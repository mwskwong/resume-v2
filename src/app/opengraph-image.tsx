import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";
import { firstName, lastName } from "@/constants/data";

export const alt = `${firstName} ${lastName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function getRubikMedium() {
  const response = await fetch(
    new URL(
      "@fontsource/rubik/files/rubik-latin-500-normal.woff",
      import.meta.url
    )
  );
  const rubikMedium = await response.arrayBuffer();

  return rubikMedium;
}

export default async function openGraphImage() {
  const rubikMedium = await getRubikMedium();
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#ffffff",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Rubik",
          fontWeight: 500,
          color: "#1a2027",
        }}
      >
        <Icon size={size} disableBackground />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: (170 / 2) * 1.16,
            lineHeight: "100%",
            textTransform: "uppercase",
            marginLeft: 15,
          }}
        >
          <span>{firstName}</span>
          <span style={{ color: "#006edb" }}>{lastName}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Rubik",
          data: rubikMedium,
          weight: 500,
        },
      ],
    }
  );
}

import { ImageResponse } from "next/server";

import Icon from "@/components/shared/icon";
import { firstName, jobTitles, lastName } from "@/constants/data";

export const alt = `${firstName} ${lastName} - ${jobTitles.join(" & ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

const getRubikMedium = async () => {
  const response = await fetch(
    new URL(
      "@fontsource/rubik/files/rubik-latin-500-normal.woff",
      import.meta.url
    )
  );
  const rubikMedium = await response.arrayBuffer();

  return rubikMedium;
};

const openGraphImage = async () => {
  const iconSize = { width: 170, height: 170 };
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
        <Icon size={iconSize} disableBackground />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: (iconSize.width / 2) * 1.15,
            lineHeight: 1,
            textTransform: "uppercase",
            marginLeft: 16,
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
          data: await getRubikMedium(),
          weight: 500,
        },
      ],
    }
  );
};

export default openGraphImage;

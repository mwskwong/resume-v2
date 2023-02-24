import { ImageResponse } from "@vercel/og";
import { PageConfig } from "next";

import Icon from "@/assets/images/icon.svg";
import { firstName, lastName } from "@/constants/name";

const rubikMedium = fetch(new URL("@fontsource/rubik/files/rubik-latin-500-normal.woff", import.meta.url))
  .then(res => res.arrayBuffer());

const handler = async () => {
  const rubikMediumData = await rubikMedium;
  
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        background: "white",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Rubik",
        fontWeight: 500,
        color: "#1a2027"
      }}
    >
      <Icon width={170} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 170 / 2 * 1.16,
          lineHeight: "100%",
          textTransform: "uppercase",
          marginLeft: 15
        }}
      >
        <span>{firstName}</span>
        <span style={{ color: "#006edb" }}>{lastName}</span>
      </div>
    </div>,
    {
      width: 1280,
      height: 640,
      fonts: [
        {
          name: "Rubik",
          data: rubikMediumData,
          weight: 500
        }
      ]
    }
  );
};

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;

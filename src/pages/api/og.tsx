import { ImageResponse } from "@vercel/og";
import { PageConfig } from "next";
import { NextRequest } from "next/server";
import { FC } from "react";

import Icon from "@/assets/images/icon.svg";
import { firstName, lastName } from "@/constants/name";

const rubikMedium = fetch(new URL("@fontsource/rubik/files/rubik-latin-500-normal.woff", import.meta.url))
  .then(res => res.arrayBuffer());

const LandingOGImage: FC = () => (
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
  </div>
);

const OGImageWithTitle: FC<{ title: string }> = ({ title }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: 60
      }}
    >
      <Icon width={80} />
      <span style={{ marginLeft: 16 }}>{firstName}</span>
    </div>
    <div
      style={{
        fontSize: 50,
        margin: "50px 120px",
        textAlign: "center"
      }}
    >
      {title.slice(0, 100)}
    </div>
  </div>
);

const handler = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title");
    const rubikMediumData = await rubikMedium;

    return new ImageResponse(
      title ? <OGImageWithTitle title={title} /> : <LandingOGImage />,
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
  } catch (error) {
    console.error(error);
    return new Response(
      "Failed to generate OG image.",
      { status: 500 }
    );
  }
};

export const config: PageConfig = {
  runtime: "edge"
};

export default handler;

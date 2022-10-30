import { ImageResponse } from "@vercel/og";
import Icon from "assets/images/icon.svg";
import { firstName, lastName } from "constants/name";
import { NextApiHandler, PageConfig } from "next";

const font = fetch(new URL("@fontsource/rubik/files/rubik-latin-500-normal.woff", import.meta.url))
  .then(res => res.arrayBuffer());

const handler: NextApiHandler = async () => {
  try {
    const fontData = await font;
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            background: "white",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            color: "#1a2027",
            fontSize: 300
          }}
        >
          <Icon width={170} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 98,
              lineHeight: "100%",
              textTransform: "uppercase",
              marginLeft: 15
            }}
          >
            <span>{firstName}</span>
            <span style={{ color: "#006edb" }}>{lastName}</span>
          </div>
        </div>
      ),
      {
        width: 1280,
        height: 640,
        fonts: [
          {
            name: "Rubik Medium",
            data: fontData
          }
        ],
        debug: process.env.NODE_ENV === "development"
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Failed to generate OG image.", {
      status: 500
    });
  }
};

export const config: PageConfig = {
  runtime: "experimental-edge"
};

export default handler;
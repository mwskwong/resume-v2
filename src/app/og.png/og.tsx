import { FC } from "react";

import Icon from "@/assets/images/icon.svg";
import { firstName, lastName } from "@/constants/name";

const OG: FC = () => (
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
    <Icon width={170} />
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
);

export default OG;

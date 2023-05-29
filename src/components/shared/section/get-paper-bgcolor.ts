import { TypeBackground } from "@mui/material";

type BgColor = keyof TypeBackground;

const getPaperBgColor = (sectionVariant: BgColor): BgColor => {
  switch (sectionVariant) {
    case "default":
      return "primary";
    case "primary":
      return "secondary";
    case "secondary":
      return "tertiary";
    default:
      return "paper";
  }
};

export default getPaperBgColor;

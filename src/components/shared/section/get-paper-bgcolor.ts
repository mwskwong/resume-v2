import { TypeBackground } from "@mui/material";

import SectionProps from "./section-props";

const getPaperBgColor = (
  sectionVariant: SectionProps["variant"]
): keyof TypeBackground => {
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

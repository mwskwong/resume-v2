import { TypeBackground } from "@mui/material";

import SectionProps from "./SectionProps";

const getPaperBgColor = (
  variant: SectionProps["variant"]
): keyof TypeBackground => {
  switch (variant) {
    case "default":
      return "primary";
    case "primary":
      return "secondary";
    case "secondary":
      return "tertiary";
    default:
      return "default";
  }
};

export default getPaperBgColor;

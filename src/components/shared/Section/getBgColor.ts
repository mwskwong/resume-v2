import { TypeBackground } from "@mui/material";

import SectionProps from "./SectionProps";

const getBgColor = (variant: SectionProps["variant"]): keyof TypeBackground => {
  switch (variant) {
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    case "tertiary":
      return "tertiary";
    default:
      return "default";
  }
};

export default getBgColor;

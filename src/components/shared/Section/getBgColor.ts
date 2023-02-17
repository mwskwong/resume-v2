import { TypeBackground } from "@mui/material";

import SectionProps from "./SectionProps";

const getBgColor = (variant: SectionProps["variant"]): keyof TypeBackground => {
  switch (variant) {
    case "primary":
      return "sectionPrimary";
    case "secondary":
      return "sectionSecondary";
    case "tertiary":
      return "sectionTertiary";
    default:
      return "default";
  }
};

export default getBgColor;

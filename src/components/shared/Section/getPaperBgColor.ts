import { TypeBackground } from "@mui/material";

import SectionProps from "./SectionProps";

const getPaperBgColor = (variant: SectionProps["variant"]): keyof TypeBackground => {
  switch (variant) {
    case "default":
      return "sectionPrimary";
    case "primary":
      return "sectionSecondary";
    case "secondary":
      return "sectionTertiary";
    default:
      return "default";
  }
};

export default getPaperBgColor;

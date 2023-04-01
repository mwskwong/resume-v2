import { TypeBackground } from "@mui/material";

import SectionProps from "./section-props";

const getBgColor = (
  sectionVariant: SectionProps["variant"]
): keyof TypeBackground => {
  if (sectionVariant) {
    return sectionVariant;
  }

  return "default";
};

export default getBgColor;

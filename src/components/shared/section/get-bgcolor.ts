import { TypeBackground } from "@mui/material";

import SectionProps from "./section-props";

export default function getBgColor(
  sectionVariant: SectionProps["variant"]
): keyof TypeBackground {
  if (sectionVariant) {
    return sectionVariant;
  }

  return "default";
}

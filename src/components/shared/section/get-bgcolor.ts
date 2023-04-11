import { TypeBackground } from "@mui/material";

export default function getBgColor(
  sectionVariant?: keyof TypeBackground
): keyof TypeBackground {
  return sectionVariant ?? "default";
}

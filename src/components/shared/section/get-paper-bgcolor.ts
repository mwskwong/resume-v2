import { TypeBackground } from "@mui/material";

export default function getPaperBgColor(
  sectionVariant: keyof TypeBackground
): keyof TypeBackground {
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
}

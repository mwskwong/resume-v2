import { TypeBackground } from "@mui/material";

type BgColor = keyof TypeBackground;

const getBgColor = (sectionVariant?: BgColor): BgColor =>
  sectionVariant ?? "default";

export default getBgColor;

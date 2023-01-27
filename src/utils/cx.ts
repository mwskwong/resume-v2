import { SxProps, Theme } from "@mui/material";

type Cx = (...args: (SxProps<Theme> | undefined)[]) => SxProps<Theme>

const cx: Cx = (...args) => args
  .filter(sx => Boolean(sx))
  .flat() as SxProps<Theme>;

export default cx;
import { SxProps, Theme } from "@mui/material";

import { UseSx } from "types";

const simpleIcons = (sx?: SxProps<Theme>): SxProps<Theme> => ({
  p: "2px",
  ...sx
});

const useSx: UseSx = sx => ({
  simpleIcons: simpleIcons(sx),
  enterpriseDb: {
    color: "enterpriseDb.main",
    ...simpleIcons(sx)
  },
  microsoft: {
    color: "microsoft.main",
    ...simpleIcons(sx)
  },
  mongoDb: {
    color: "mongoDb.main",
    ...simpleIcons(sx)
  },
  oracle: {
    color: "oracle.main",
    ...simpleIcons(sx)
  },
  udemy: {
    color: "udemy.main",
    ...simpleIcons(sx)
  }
});

export default useSx;
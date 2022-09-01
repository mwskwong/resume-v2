import type { SxProps, Theme } from "@mui/material";

import type { UseSx } from "types";

const simpleIcons = (sx?: SxProps<Theme>): SxProps<Theme> => ({
  p: "2px",
  ...sx
});

const useSx: UseSx = sx => ({
  simpleIcons: simpleIcons(sx),
  enterpriseDb: {
    color: "enterpriseDB.main",
    ...simpleIcons(sx)
  },
  microsoft: {
    color: "microsoft.main",
    ...simpleIcons(sx)
  },
  mongoDb: {
    color: "mongoDB.main",
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
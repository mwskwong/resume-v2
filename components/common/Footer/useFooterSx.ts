import type { SxProps, Theme } from "@mui/material";

import asSxRecord from "utils/asSxRecord";

const useSx = (sx?: SxProps<Theme>) => asSxRecord({
  root: {
    color: "text.secondary",
    py: 4,
    ...sx
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    color: "inherit",
    fontWeight: "regular",
    width: "100%",
    textAlign: {
      xs: "center",
      lg: "unset"
    }
  },
  loveIcon: {
    verticalAlign: "middle"
  }
});

export default useSx;
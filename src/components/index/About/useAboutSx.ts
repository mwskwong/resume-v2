import type { SxProps, Theme } from "@mui/material";

import asSxRecord from "utils/asSxRecord";

const useSx = (sx?: SxProps<Theme>) => asSxRecord({
  root: sx,
  stack: {
    alignItems: "center"
  }
});

export default useSx;
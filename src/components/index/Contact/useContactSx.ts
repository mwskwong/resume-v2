import { SxProps, Theme } from "@mui/material";

import asSxRecord from "utils/asSxRecord";

const useSx = (sx?: SxProps<Theme>) => asSxRecord({
  root: sx,
  alertContainer: {
    pt: 2
  }
});

export default useSx;
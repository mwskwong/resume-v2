import { SxProps, Theme } from "@mui/material";
import asSxRecord from "utils/asSxRecord";

const useSx = (sx?: SxProps<Theme>) => asSxRecord({
  root: {
    justifyContent: "center",
    ...sx
  }
});

export default useSx;
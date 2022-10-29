import { SxProps, Theme } from "@mui/material";
import asSxRecord from "utils/asSxRecord";

const useSx = (sx?: SxProps<Theme>) => asSxRecord({
  root: {
    color: "text.secondary",
    py: 4,
    ...sx
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (min-width: 1300px)": {
      flexDirection: "row"
    }
  },
  text: {
    color: "inherit",
    fontWeight: "regular",
    width: "100%",
    textAlign: "center",
    "@media (min-width: 1300px)": {
      textAlign: "unset"
    }
  },
  loveIcon: {
    verticalAlign: "middle"
  }
});

export default useSx;
import { SxProps, Theme } from "@mui/material";

import asSxRecord from "utils/asSxRecord";

const simpleIcons = (sx?: SxProps<Theme>): SxProps<Theme> => ({
  p: "2px",
  ...sx
});

const useSx = (sx?: SxProps<Theme>) => asSxRecord({
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
  },
  datacamp: {
    color: "datacamp.main",
    ...simpleIcons(sx)
  }
});

export default useSx;
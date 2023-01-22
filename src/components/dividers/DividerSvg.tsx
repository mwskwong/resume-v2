import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

import useStyles from "./useDividerSvgStyles";

const DividerSvg: FC<BoxProps<"svg">> = ({ className, ...props }) => {
  const { classes, cx } = useStyles();

  return (
    <Box
      component="svg"
      className={cx(classes.root, className)}
      {...props}
    />
  );
};

if (process.env.NODE_ENV === "development") {
  DividerSvg.whyDidYouRender = true;
}

export default DividerSvg;
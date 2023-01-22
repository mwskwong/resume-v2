import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siOracle } from "simple-icons/icons";

import useStyles from "./useStyles";

const Oracle: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles({ color: "oracle" });

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siOracle.path} />
    </SvgIcon>
  );
};

Oracle.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  Oracle.whyDidYouRender = true;
}

export default Oracle;

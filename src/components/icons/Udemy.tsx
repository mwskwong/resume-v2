import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siUdemy } from "simple-icons/icons";

import useStyles from "./useStyles";

const Udemy: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles({ color: "udemy" });

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siUdemy.path} />
    </SvgIcon>
  );
};

Udemy.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  Udemy.whyDidYouRender = true;
}

export default Udemy;

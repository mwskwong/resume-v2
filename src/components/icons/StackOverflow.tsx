import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siStackoverflow } from "simple-icons/icons";

import useStyles from "./useStyles";

const StackOverflow: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles();

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siStackoverflow.path} />
    </SvgIcon>
  );
};

StackOverflow.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  StackOverflow.whyDidYouRender = true;
}

export default StackOverflow;

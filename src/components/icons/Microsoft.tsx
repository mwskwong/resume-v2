import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siMicrosoft } from "simple-icons/icons";

import useStyles from "./useStyles";

const Microsoft: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles({ color: "microsoft" });

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siMicrosoft.path} />
    </SvgIcon>
  );
};

Microsoft.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  Microsoft.whyDidYouRender = true;
}

export default Microsoft;

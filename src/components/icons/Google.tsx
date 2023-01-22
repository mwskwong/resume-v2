import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siGoogle } from "simple-icons/icons";

import useStyles from "./useStyles";

const Google: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles({ color: "google" });

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siGoogle.path} />
    </SvgIcon>
  );
};

Google.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  Google.whyDidYouRender = true;
}

export default Google;

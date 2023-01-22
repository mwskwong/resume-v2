import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siLinkedin } from "simple-icons/icons";

import useStyles from "./useStyles";

const LinkedIn: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles();

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siLinkedin.path} />
    </SvgIcon>
  );
};

LinkedIn.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  LinkedIn.whyDidYouRender = true;
}

export default LinkedIn;

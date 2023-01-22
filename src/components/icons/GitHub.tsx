import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siGithub } from "simple-icons/icons";

import useStyles from "./useStyles";

const GitHub: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles();

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siGithub.path} />
    </SvgIcon>
  );
};

GitHub.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  GitHub.whyDidYouRender = true;
}

export default GitHub;

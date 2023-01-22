import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siEnterprisedb } from "simple-icons/icons";

import useStyles from "./useStyles";

const EnterpriseDb: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles({ color: "enterpriseDb" });

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siEnterprisedb.path} />
    </SvgIcon>
  );
};

EnterpriseDb.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  EnterpriseDb.whyDidYouRender = true;
}

export default EnterpriseDb;

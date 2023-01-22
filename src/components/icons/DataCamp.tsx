import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siDatacamp } from "simple-icons/icons";

import useStyles from "./useStyles";

const DataCamp: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles({ color: "dataCamp" });

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siDatacamp.path} />
    </SvgIcon>
  );
};

DataCamp.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  DataCamp.whyDidYouRender = true;
}

export default DataCamp;

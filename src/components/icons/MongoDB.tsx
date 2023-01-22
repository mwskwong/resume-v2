import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siMongodb } from "simple-icons/icons";

import useStyles from "./useStyles";

const MongoDb: FC<SvgIconProps> = ({ className, ...props }) => {
  const { classes, cx } = useStyles({ color: "mongoDb" });

  return (
    <SvgIcon className={cx(classes.root, className)} {...props}>
      <path d={siMongodb.path} />
    </SvgIcon>
  );
};

MongoDb.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  MongoDb.whyDidYouRender = true;
}

export default MongoDb;

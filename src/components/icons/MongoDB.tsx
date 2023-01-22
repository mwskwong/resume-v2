import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siMongodb } from "simple-icons/icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const MongoDb: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "mongoDb" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} {...props}>
      <path d={siMongodb.path} />
    </SvgIcon>
  );
};

MongoDb.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  MongoDb.whyDidYouRender = true;
}

export default MongoDb;

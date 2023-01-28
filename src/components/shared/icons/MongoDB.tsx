import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siMongodb } from "simple-icons";

import cx from "@/lib/cx";

import useSx from "./useSx";

const MongoDB: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "mongoDB" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} {...props}>
      <path d={siMongodb.path} />
    </SvgIcon>
  );
};

MongoDB.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  MongoDB.whyDidYouRender = true;
}

export default MongoDB;

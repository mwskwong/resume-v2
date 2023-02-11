import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siMongodb } from "simple-icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const MongoDB: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "mongoDb" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} data-cy="mongoDbIcon" {...props}>
      <path d={siMongodb.path} />
    </SvgIcon>
  );
};

MongoDB.muiName = SvgIcon.muiName;

export default MongoDB;

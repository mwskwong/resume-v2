import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siDatacamp } from "simple-icons";

import cx from "@/utils/cx";

import useSx from "./useSx";


const DataCamp: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "dataCamp" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} data-cy="dataCampIcon" {...props}>
      <path d={siDatacamp.path} />
    </SvgIcon>
  );
};

DataCamp.muiName = SvgIcon.muiName;

export default DataCamp;

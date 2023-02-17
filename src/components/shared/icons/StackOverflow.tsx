import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siStackoverflow } from "simple-icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const StackOverflow: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx();

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} data-cy="stackOverflowIcon" {...props}>
      <path d={siStackoverflow.path} />
    </SvgIcon>
  );
};

StackOverflow.muiName = SvgIcon.muiName;

export default StackOverflow;

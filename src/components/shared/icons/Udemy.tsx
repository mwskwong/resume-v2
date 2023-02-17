import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siUdemy } from "simple-icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const Udemy: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "udemy" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} data-cy="udemyIcon" {...props}>
      <path d={siUdemy.path} />
    </SvgIcon>
  );
};

Udemy.muiName = SvgIcon.muiName;

export default Udemy;

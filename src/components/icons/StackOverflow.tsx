import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siStackoverflow } from "simple-icons/icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const StackOverflow: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx();

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} {...props}>
      <path d={siStackoverflow.path} />
    </SvgIcon>
  );
};

StackOverflow.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  StackOverflow.whyDidYouRender = true;
}

export default StackOverflow;

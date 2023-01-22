import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siUdemy } from "simple-icons/icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const Udemy: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "udemy" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} {...props}>
      <path d={siUdemy.path} />
    </SvgIcon>
  );
};

Udemy.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  Udemy.whyDidYouRender = true;
}

export default Udemy;

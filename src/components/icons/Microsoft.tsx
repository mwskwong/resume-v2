import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siMicrosoft } from "simple-icons/icons";

import cx from "@/utils/cx";

import useSx from "./useSx";


const Microsoft: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "microsoft" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} {...props}>
      <path d={siMicrosoft.path} />
    </SvgIcon>
  );
};

Microsoft.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  Microsoft.whyDidYouRender = true;
}

export default Microsoft;

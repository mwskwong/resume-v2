import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siUdemy } from "simple-icons/icons";

import useSx from "./useThirdPartyIconSx";

const Udemy: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx(sxProp);

  return (
    <SvgIcon sx={sx.udemy} {...props}>
      <path d={siUdemy.path} />
    </SvgIcon>
  );
};

Udemy.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") Udemy.whyDidYouRender = true;

export default Udemy;

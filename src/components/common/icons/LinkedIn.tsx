import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siLinkedin } from "simple-icons/icons";

import useSx from "./useThirdPartyIconSx";

const LinkedIn: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx(sxProp);

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siLinkedin.path} />
    </SvgIcon>
  );
};

LinkedIn.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") LinkedIn.whyDidYouRender = true;

export default LinkedIn;

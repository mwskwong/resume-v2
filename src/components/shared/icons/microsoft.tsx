import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siMicrosoft } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

const Microsoft: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon color="microsoft" sx={cx(thirdPartyIconSx, sx)} {...props}>
    <path d={siMicrosoft.path} />
  </SvgIcon>
);

export default Microsoft;

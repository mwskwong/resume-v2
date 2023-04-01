import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siLinkedin } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

const LinkedIn: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon sx={cx(thirdPartyIconSx, sx)} data-cy="linkedInIcon" {...props}>
    <path d={siLinkedin.path} />
  </SvgIcon>
);

export default LinkedIn;

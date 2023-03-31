import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siStackoverflow } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./thirdPartyIconSx";

const StackOverflow: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon sx={cx(thirdPartyIconSx, sx)} data-cy="stackOverflowIcon" {...props}>
    <path d={siStackoverflow.path} />
  </SvgIcon>
);

export default StackOverflow;

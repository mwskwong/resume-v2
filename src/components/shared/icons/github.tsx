import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siGithub } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

const GitHub: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon sx={cx(thirdPartyIconSx, sx)} {...props}>
    <path d={siGithub.path} />
  </SvgIcon>
);

export default GitHub;

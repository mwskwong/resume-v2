import { SvgIcon, SvgIconProps } from "@mui/material";
import { siGithub } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function GitHub({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon sx={cx(thirdPartyIconSx, sx)} {...props}>
      <path d={siGithub.path} />
    </SvgIcon>
  );
}

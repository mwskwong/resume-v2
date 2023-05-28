import { SvgIcon, SvgIconProps } from "@mui/material";
import { siLinkedin } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function LinkedIn({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon sx={cx(thirdPartyIconSx, sx)} {...props}>
      <path d={siLinkedin.path} />
    </SvgIcon>
  );
}

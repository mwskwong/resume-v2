import { SvgIcon, SvgIconProps } from "@mui/material";
import { siGoogle } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function Google({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon color="google" sx={cx(thirdPartyIconSx, sx)} {...props}>
      <path d={siGoogle.path} />
    </SvgIcon>
  );
}

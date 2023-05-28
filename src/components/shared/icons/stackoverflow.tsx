import { SvgIcon, SvgIconProps } from "@mui/material";
import { siStackoverflow } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function StackOverflow({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon sx={cx(thirdPartyIconSx, sx)} {...props}>
      <path d={siStackoverflow.path} />
    </SvgIcon>
  );
}

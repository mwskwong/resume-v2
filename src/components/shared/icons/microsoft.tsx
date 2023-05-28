import { SvgIcon, SvgIconProps } from "@mui/material";
import { siMicrosoft } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function Microsoft({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon
      color="microsoft"
      sx={cx(thirdPartyIconSx, sx)}
      data-cy="microsoftIcon"
      {...props}
    >
      <path d={siMicrosoft.path} />
    </SvgIcon>
  );
}

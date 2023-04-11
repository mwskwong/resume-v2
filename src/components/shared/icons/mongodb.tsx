import { SvgIcon, SvgIconProps } from "@mui/material";
import { siMongodb } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function MongoDB({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon
      color="mongoDb"
      sx={cx(thirdPartyIconSx, sx)}
      data-cy="mongoDbIcon"
      {...props}
    >
      <path d={siMongodb.path} />
    </SvgIcon>
  );
}

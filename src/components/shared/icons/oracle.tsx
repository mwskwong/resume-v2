import { SvgIcon, SvgIconProps } from "@mui/material";
import { siOracle } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function Oracle({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon
      color="oracle"
      sx={cx(thirdPartyIconSx, sx)}
      data-cy="oracleIcon"
      {...props}
    >
      <path d={siOracle.path} />
    </SvgIcon>
  );
}

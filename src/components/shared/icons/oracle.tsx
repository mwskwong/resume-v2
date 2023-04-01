import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siOracle } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

const Oracle: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon
    color="oracle"
    sx={cx(thirdPartyIconSx, sx)}
    data-cy="oracleIcon"
    {...props}
  >
    <path d={siOracle.path} />
  </SvgIcon>
);

export default Oracle;

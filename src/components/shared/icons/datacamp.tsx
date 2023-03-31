import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siDatacamp } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./thirdPartyIconSx";

const DataCamp: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon
    color="dataCamp"
    sx={cx(thirdPartyIconSx, sx)}
    data-cy="dataCampIcon"
    {...props}
  >
    <path d={siDatacamp.path} />
  </SvgIcon>
);

export default DataCamp;

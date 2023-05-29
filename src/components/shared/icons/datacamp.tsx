import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siDatacamp } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

const DataCamp: FC<SvgIconProps> = ({ sx, ...props }) => {
  return (
    <SvgIcon color="dataCamp" sx={cx(thirdPartyIconSx, sx)} {...props}>
      <path d={siDatacamp.path} />
    </SvgIcon>
  );
};

export default DataCamp;

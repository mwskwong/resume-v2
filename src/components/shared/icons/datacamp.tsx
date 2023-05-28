import { SvgIcon, SvgIconProps } from "@mui/material";
import { siDatacamp } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function DataCamp({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon color="dataCamp" sx={cx(thirdPartyIconSx, sx)} {...props}>
      <path d={siDatacamp.path} />
    </SvgIcon>
  );
}

import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siMongodb } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

const MongoDB: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon
    color="mongoDb"
    sx={cx(thirdPartyIconSx, sx)}
    data-cy="mongoDbIcon"
    {...props}
  >
    <path d={siMongodb.path} />
  </SvgIcon>
);

export default MongoDB;

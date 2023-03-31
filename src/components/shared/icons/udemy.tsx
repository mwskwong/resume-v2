import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siUdemy } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./thirdPartyIconSx";

const Udemy: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon
    color="udemy"
    sx={cx(thirdPartyIconSx, sx)}
    data-cy="udemyIcon"
    {...props}
  >
    <path d={siUdemy.path} />
  </SvgIcon>
);

export default Udemy;

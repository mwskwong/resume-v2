import { SvgIcon, SvgIconProps } from "@mui/material";
import { siUdemy } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function Udemy({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon
      color="udemy"
      sx={cx(thirdPartyIconSx, sx)}
      data-cy="udemyIcon"
      {...props}
    >
      <path d={siUdemy.path} />
    </SvgIcon>
  );
}

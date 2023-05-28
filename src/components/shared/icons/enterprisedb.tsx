import { SvgIcon, SvgIconProps } from "@mui/material";
import { siEnterprisedb } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

export default function EnterpriseDB({ sx, ...props }: SvgIconProps) {
  return (
    <SvgIcon
      color="enterpriseDb"
      sx={cx(thirdPartyIconSx, sx)}
      data-cy="enterpriseDbIcon"
      {...props}
    >
      <path d={siEnterprisedb.path} />
    </SvgIcon>
  );
}

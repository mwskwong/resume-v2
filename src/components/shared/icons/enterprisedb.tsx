import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siEnterprisedb } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

const EnterpriseDB: FC<SvgIconProps> = ({ sx, ...props }) => {
  return (
    <SvgIcon color="enterpriseDb" sx={cx(thirdPartyIconSx, sx)} {...props}>
      <path d={siEnterprisedb.path} />
    </SvgIcon>
  );
};

export default EnterpriseDB;

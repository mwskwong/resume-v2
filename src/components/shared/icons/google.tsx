import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siGoogle } from "simple-icons";

import cx from "@/utils/cx";

import thirdPartyIconSx from "./third-party-icon-sx";

const Google: FC<SvgIconProps> = ({ sx, ...props }) => {
  return (
    <SvgIcon color="google" sx={cx(thirdPartyIconSx, sx)} {...props}>
      <path d={siGoogle.path} />
    </SvgIcon>
  );
};

export default Google;

import type { FC } from "react";
import { SvgIcon } from "@mui/material";
import type { SvgIconProps } from "@mui/material";
import { siOracle } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const Oracle: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx(sxProp);

  return (
    <SvgIcon sx={sx.oracle} {...props}>
      <path d={siOracle.path} />
    </SvgIcon>
  );
};

Oracle.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") Oracle.whyDidYouRender = true;

export default Oracle;

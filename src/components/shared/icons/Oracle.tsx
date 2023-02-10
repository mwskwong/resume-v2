import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siOracle } from "simple-icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const Oracle: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "oracle" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} data-cy="oracleIcon" {...props}>
      <path d={siOracle.path} />
    </SvgIcon>
  );
};

Oracle.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  Oracle.whyDidYouRender = true;
}

export default Oracle;

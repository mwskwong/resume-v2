import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siEnterprisedb } from "simple-icons";

import cx from "@/lib/cx";

import useSx from "./useSx";

const EnterpriseDB: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "enterpriseDB" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} {...props}>
      <path d={siEnterprisedb.path} />
    </SvgIcon>
  );
};

EnterpriseDB.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  EnterpriseDB.whyDidYouRender = true;
}

export default EnterpriseDB;

import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siEnterprisedb } from "simple-icons/icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const EnterpriseDb: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "enterpriseDb" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} {...props}>
      <path d={siEnterprisedb.path} />
    </SvgIcon>
  );
};

EnterpriseDb.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  EnterpriseDb.whyDidYouRender = true;
}

export default EnterpriseDb;

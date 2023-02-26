import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siEnterprisedb } from "simple-icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const EnterpriseDB: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "enterpriseDb" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} data-cy="enterpriseDbIcon" {...props}>
      <path d={siEnterprisedb.path} />
    </SvgIcon>
  );
};

export default EnterpriseDB;

import type { FC } from "react";
import { SvgIcon } from "@mui/material";
import type { SvgIconProps } from "@mui/material";
import { siEnterprisedb } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const EnterpriseDB: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx(sxProp);

  return (
    <SvgIcon sx={sx.enterpriseDb} {...props}>
      <path d={siEnterprisedb.path} />
    </SvgIcon>
  );
};

EnterpriseDB.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") EnterpriseDB.whyDidYouRender = true;

export default EnterpriseDB;

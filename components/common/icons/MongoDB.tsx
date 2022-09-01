import type { FC } from "react";
import { SvgIcon } from "@mui/material";
import type { SvgIconProps } from "@mui/material";
import { siMongodb } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const MongoDB: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx(sxProp);

  return (
    <SvgIcon sx={sx.mongoDb} {...props}>
      <path d={siMongodb.path} />
    </SvgIcon>
  );
};

MongoDB.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") MongoDB.whyDidYouRender = true;

export default MongoDB;

import type { FC } from "react";
import { SvgIcon } from "@mui/material";
import type { SvgIconProps } from "@mui/material";
import { siDatacamp } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const Datacamp: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx(sxProp);

  return (
    <SvgIcon sx={sx.datacamp} {...props}>
      <path d={siDatacamp.path} />
    </SvgIcon>
  );
};

Datacamp.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") Datacamp.whyDidYouRender = true;

export default Datacamp;

import type { FC } from "react";
import { SvgIcon } from "@mui/material";
import type { SvgIconProps } from "@mui/material";
import { siGithub } from "simple-icons/icons";
import useSx from "./useThirdPartyIconSx";

const GitHub: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx(sxProp);

  return (
    <SvgIcon sx={sx.simpleIcons} {...props}>
      <path d={siGithub.path} />
    </SvgIcon>
  );
};

GitHub.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") GitHub.whyDidYouRender = true;

export default GitHub;

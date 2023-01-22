import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siGithub } from "simple-icons/icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const GitHub: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx();

  return (
    <SvgIcon sx={cx(sx.root, sxProp)}{...props}>
      <path d={siGithub.path} />
    </SvgIcon>
  );
};

GitHub.muiName = SvgIcon.muiName;
if (process.env.NODE_ENV === "development") {
  GitHub.whyDidYouRender = true;
}

export default GitHub;

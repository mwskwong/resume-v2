import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siGithub } from "simple-icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const GitHub: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx();

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} data-cy="gitHubIcon" {...props}>
      <path d={siGithub.path} />
    </SvgIcon>
  );
};

export default GitHub;

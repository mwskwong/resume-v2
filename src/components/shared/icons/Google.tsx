import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { siGoogle } from "simple-icons";

import cx from "@/utils/cx";

import useSx from "./useSx";

const Google: FC<SvgIconProps> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ color: "google" });

  return (
    <SvgIcon sx={cx(sx.root, sxProp)} data-cy="googleIcon" {...props}>
      <path d={siGoogle.path} />
    </SvgIcon>
  );
};

export default Google;

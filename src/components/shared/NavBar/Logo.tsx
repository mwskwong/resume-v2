import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

import LogoSvg from "@/assets/images/icon.svg";
import { firstName } from "@/constants/name";
import cx from "@/utils/cx";

import useSx from "./useLogoSx";

const Logo: FC<ButtonProps> = ({ sx: sxProps, ...props }) => {
  const sx = useSx();

  const handleClick = () => window.scrollTo(0, 0);

  return (
    <Button
      sx={cx(sx.root, sxProps)}
      color="inherit"
      aria-label="to home"
      onClick={handleClick}
      data-cy="logo"
      {...props}
    >
      <LogoSvg width={32} />
      {firstName}
    </Button>
  );
};

export default Logo;

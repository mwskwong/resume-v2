import { Button } from "@mui/material";
import { FC } from "react";

import LogoSvg from "@/assets/images/icon.svg";
import { firstName } from "@/constants/name";

import useSx from "./useLogoSx";

const Logo: FC = () => {
  const sx = useSx();

  const handleClick = () => window.scrollTo(0, 0);

  return (
    <Button
      sx={sx.root}
      color="inherit"
      startIcon={<LogoSvg width={35} />}
      aria-label="to home"
      onClick={handleClick}
      data-cy="logo"
    >
      {firstName}
    </Button>
  );
};
if (process.env.NODE_ENV === "development") Logo.whyDidYouRender = true;

export default Logo;
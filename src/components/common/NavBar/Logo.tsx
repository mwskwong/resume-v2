import { Button } from "@mui/material";
import { FC } from "react";

import LogoSvg from "@/assets/images/icon.svg";
import { firstName } from "@/constants/name";
import { HOME } from "@/constants/nav";

import useSx from "./useLogoSx";

const Logo: FC = () => {
  const sx = useSx();

  return (
    <Button
      sx={sx.root}
      color="inherit"
      startIcon={<LogoSvg width={35} />}
      href={`#${HOME.id}`}
      aria-label="to home"
      data-cy="logo"
    >
      {firstName}
    </Button>
  );
};
if (process.env.NODE_ENV === "development") Logo.whyDidYouRender = true;

export default Logo;
import { FC } from "react";
import { HOME } from "constants/nav";
import { IconButton } from "@mui/material";
import LogoSvg from "assets/images/icon.svg";

const Logo: FC = () => (
  <IconButton color="primary" href={`#${HOME.id}`} aria-label="to home">
    <LogoSvg width={35} />
  </IconButton>
);

if (process.env.NODE_ENV === "development") Logo.whyDidYouRender = true;

export default Logo;
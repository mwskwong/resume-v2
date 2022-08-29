import { FC, memo } from "react";

import { HOME } from "constants/nav";
import { IconButton } from "@mui/material";
import Image from "next/future/image";
import logo from "assets/images/icon.svg";

const Logo: FC = () => (
  <IconButton color="primary" href={`#${HOME.id}`}>
    <Image
      src={logo}
      alt="Logo"
      width={35}
      height={35}
    />
  </IconButton>
);

if (process.env.NODE_ENV === "development") Logo.whyDidYouRender = true;

export default memo(Logo);
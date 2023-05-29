import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

import { firstName } from "@/constants/data";
import cx from "@/utils/cx";

import Icon from "../icon";

const Logo: FC<ButtonProps> = ({ sx, ...props }) => (
  <Button
    sx={cx(
      {
        typography: "h5",
        fontWeight: "medium",
        gap: 1,
      },
      sx
    )}
    color="inherit"
    aria-label="to home"
    onClick={() => window.scrollTo(0, 0)}
    {...props}
  >
    <Icon width={32} />
    {firstName}
  </Button>
);

export default Logo;

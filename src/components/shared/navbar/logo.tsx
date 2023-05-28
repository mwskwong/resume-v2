import { Button, ButtonProps } from "@mui/material";

import { firstName } from "@/constants/data";
import cx from "@/utils/cx";

import Icon from "../icon";

export default function Logo({ sx, ...props }: ButtonProps) {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
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
      onClick={handleClick}
      data-cy="logo"
      {...props}
    >
      <Icon size={{ width: 32, height: 32 }} disableBackground />
      {firstName}
    </Button>
  );
}

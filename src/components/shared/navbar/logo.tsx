import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

import LogoSvg from "@/assets/images/icon.svg";
import { firstName } from "@/constants/data";
import cx from "@/utils/cx";

const Logo: FC<ButtonProps> = ({ sx, ...props }) => {
  const handleClick = () => window.scrollTo(0, 0);

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
      <LogoSvg width={32} />
      {firstName}
    </Button>
  );
};

export default Logo;

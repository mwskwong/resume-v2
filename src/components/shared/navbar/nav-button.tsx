import { Box, Button } from "@mui/material";
import { FC } from "react";

import NavElementProps from "./nav-element-props";

const NavButton: FC<NavElementProps> = ({ label, id, active }) => {
  const dotSize = 6;
  const handleClick = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  };

  return (
    <Button
      color={active ? "primary" : "inherit"}
      onClick={handleClick}
      data-cy={id}
    >
      {label}
      {active && (
        <Box
          component="span"
          sx={{
            width: dotSize,
            height: dotSize,
            bgcolor: "primary.main",
            borderRadius: "50%",
            position: "absolute",
            bottom: 0,
            left: `calc(50% - ${dotSize}px / 2)`,
          }}
        />
      )}
    </Button>
  );
};

export default NavButton;

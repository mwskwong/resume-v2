import { Box, Button } from "@mui/material";
import { FC } from "react";

import { NavElementProps } from "./types";

const NavButton: FC<NavElementProps> = ({ label, id, active }) => {
  const dotSize = 6;

  return (
    <Button
      color={active ? "primary" : "inherit"}
      onClick={() => {
        const section = document.getElementById(id);
        section?.scrollIntoView();
      }}
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

import { Box, Button } from "@mui/material";

import { NavElementProps } from "./types";

export default function NavButton({ label, id, active }: NavElementProps) {
  const dotSize = 6;
  function handleClick() {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  }

  return (
    <Button color={active ? "primary" : "inherit"} onClick={handleClick}>
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
}

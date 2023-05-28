import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { NavElementProps } from "./types";

export default function NavListItem({ label, id, active }: NavElementProps) {
  const dotSize = 8;
  function handleClick() {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  }

  return (
    <ListItem disablePadding>
      {active && (
        <Box
          component="span"
          sx={{
            width: dotSize,
            height: dotSize,
            bgcolor: "primary.main",
            borderRadius: "50%",
            position: "absolute",
            left: -dotSize / 2,
          }}
        />
      )}
      <ListItemButton onClick={handleClick} data-cy={id}>
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            variant: "button",
            sx: { color: active ? "primary.main" : undefined },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

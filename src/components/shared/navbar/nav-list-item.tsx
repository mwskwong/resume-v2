import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";

import { NavElementProps } from "./types";

const NavListItem: FC<NavElementProps> = ({ label, id, active }) => {
  const dotSize = 8;

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
      <ListItemButton
        onClick={() => {
          const section = document.getElementById(id);
          section?.scrollIntoView();
        }}
      >
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
};

export default NavListItem;

import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";

import NavElementProps from "./nav-element-props";

const NavListItem: FC<NavElementProps> = ({ label, id, active }) => {
  const dotSize = 8;
  const handleClick = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  };

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
};

export default NavListItem;

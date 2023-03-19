import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";

import NavElementProps from "./NavElementProps";
import useSx from "./useNavListItemSx";

const NavListItem: FC<NavElementProps> = ({ label, id, active }) => {
  const sx = useSx({ active });
  const primaryTypographyProps = { sx: sx.textPrimary };
  const handleClick = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  };

  return (
    <ListItem disablePadding>
      {active && <Box component="span" sx={sx.dot} />}
      <ListItemButton onClick={handleClick} data-cy={id}>
        <ListItemText
          primary={label}
          primaryTypographyProps={primaryTypographyProps}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NavListItem;

import { ListItemButton, ListItemText } from "@mui/material";
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
    <ListItemButton onClick={handleClick} selected={active} data-cy={id}>
      <ListItemText
        primary={label}
        primaryTypographyProps={primaryTypographyProps}
      />
    </ListItemButton>
  );
};

export default NavListItem;

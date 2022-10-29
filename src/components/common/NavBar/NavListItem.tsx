import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";
import { SectionId } from "types";

import useSx from "./useNavListItemSx";

type NavListItemProps = {
  label: string,
  id: SectionId,
  active: boolean
}

const NavListItem: FC<NavListItemProps> = ({ label, id, active }) => {
  const sx = useSx(active);
  const primaryTypographyProps = { sx: sx.textPrimary };

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={`#${id}`} selected={active}>
        <ListItemText
          primary={label}
          primaryTypographyProps={primaryTypographyProps}
        />
      </ListItemButton>
    </ListItem>
  );
};
if (process.env.NODE_ENV === "development") NavListItem.whyDidYouRender = true;

export default NavListItem;
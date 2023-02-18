import { CloseRounded as Close, MenuRounded as Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

import MenuButtonProps from "./MenuButtonProps";
import useSx from "./useMenuButtonSx";


const MenuButton: FC<MenuButtonProps> = ({ sx: sxProps, menuOpen, onToggleMenu, ...props }) => {
  const sx = useSx();

  return (
    <IconButton
      sx={cx(sx.root, sxProps)}
      aria-label={menuOpen ? "close menu" : "open menu"}
      data-cy="menuButton"
      onClick={onToggleMenu}
      {...props}
    >
      <Close
        sx={cx(
          sx.icon,
          menuOpen ? undefined : sx.closeIconInactive
        )}
      />
      <Menu
        sx={cx(
          sx.icon,
          menuOpen ? sx.menuIconInactive : undefined
        )}
      />
    </IconButton>
  );
};

export default MenuButton;

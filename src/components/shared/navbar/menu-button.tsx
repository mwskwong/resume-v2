import {
  CloseRounded as Close,
  MenuRounded as Menu,
} from "@mui/icons-material";
import { IconButton, SxProps, Theme } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

import MenuButtonProps from "./menu-button-props";

const MenuButton: FC<MenuButtonProps> = ({
  sx: sxProps,
  menuOpen,
  onToggleMenu,
  ...props
}) => {
  const iconSx: SxProps<Theme> = {
    gridColumnStart: 1,
    gridRowStart: 1,
    transition: (theme) => theme.transitions.create(["rotate", "opacity"]),
    rotate: "0deg",
    opacity: 1,
    "@media (prefers-reduced-motion)": {
      transition: "none",
    },
  };

  return (
    <IconButton
      sx={cx(
        {
          display: "inline-grid",
          position: "relative",
        },
        sxProps
      )}
      aria-label={menuOpen ? "close menu" : "open menu"}
      data-cy="menuButton"
      onClick={onToggleMenu}
      {...props}
    >
      <Close
        sx={cx(
          iconSx,
          menuOpen
            ? undefined
            : {
                rotate: "45deg",
                opacity: 0,
                "@media (prefers-reduced-motion)": {
                  rotate: "0deg",
                },
              }
        )}
      />
      <Menu
        sx={cx(
          iconSx,
          menuOpen
            ? {
                rotate: "-45deg",
                opacity: 0,
                "@media (prefers-reduced-motion)": {
                  rotate: "0deg",
                },
              }
            : undefined
        )}
      />
    </IconButton>
  );
};

export default MenuButton;

import {
  CloseRounded as Close,
  MenuRounded as Menu,
} from "@mui/icons-material";
import { IconButton, IconButtonProps, SxProps, Theme } from "@mui/material";

import cx from "@/utils/cx";

interface Props extends Omit<IconButtonProps, "onClick"> {
  menuOpen?: boolean;
  onToggleMenu?: IconButtonProps["onClick"];
}

export default function MenuButton({
  sx: sxProps,
  menuOpen,
  onToggleMenu,
  ...props
}: Props) {
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
}

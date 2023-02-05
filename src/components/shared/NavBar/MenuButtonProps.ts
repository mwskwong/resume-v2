import { IconButtonProps } from "@mui/material";

interface MenuButtonProps extends Omit<IconButtonProps, "onClick"> {
  menuOpen?: boolean;
  onToggleMenu?: IconButtonProps["onClick"];
}

export default MenuButtonProps;
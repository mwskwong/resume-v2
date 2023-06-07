import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { Box, IconButton, IconButtonProps } from "@mui/material";
import { LazyMotion, m } from "framer-motion";
import { ComponentProps, FC, forwardRef } from "react";

import loadFramerMotionFeatures from "@/utils/load-framer-motion-features";

const MotionBox = m(Box);
const MotionClose = m(CloseRounded);
const MotionMenu = m(MenuRounded);

interface Props extends IconButtonProps {
  menuOpen?: boolean;
  slotProps?: {
    closeIcon?: ComponentProps<typeof MotionClose>;
    menuIcon?: ComponentProps<typeof MotionMenu>;
  };
}

const MenuButton: FC<Props> = forwardRef(
  ({ menuOpen, slotProps, ...props }, ref) => (
    <IconButton
      ref={ref}
      aria-label={menuOpen ? "close menu" : "open menu"}
      {...props}
    >
      <LazyMotion features={loadFramerMotionFeatures} strict>
        <MotionBox
          sx={{ display: "inline-grid", position: "relative" }}
          initial="close"
          animate={menuOpen ? "open" : "close"}
        >
          <MotionClose
            sx={{ gridColumnStart: 1, gridRowStart: 1 }}
            variants={{
              open: { rotate: 0, opacity: 1 },
              close: { rotate: 45, opacity: 0 },
            }}
            {...slotProps?.closeIcon}
          />
          <MotionMenu
            sx={{ gridColumnStart: 1, gridRowStart: 1 }}
            variants={{
              open: { rotate: -45, opacity: 0 },
              close: { rotate: 0, opacity: 1 },
            }}
            {...slotProps?.menuIcon}
          />
        </MotionBox>
      </LazyMotion>
    </IconButton>
  )
);

MenuButton.displayName = "MenuButton";

export default MenuButton;

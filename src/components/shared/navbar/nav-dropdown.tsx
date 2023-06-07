import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import { ComponentProps, forwardRef } from "react";

import nav from "@/constants/nav";
import cx from "@/utils/cx";
import loadFramerMotionFeatures from "@/utils/load-framer-motion-features";
import useActiveSection from "@/utils/use-active-section";

const MotionBox = m(Box);
const MotionListItem = m(ListItem);

interface Props extends ComponentProps<typeof MotionBox> {
  open?: boolean;
}

const NavDropdown = forwardRef<HTMLElement, Props>(
  ({ open, sx, ...props }, ref) => {
    const activeSection = useActiveSection();
    const dotSize = 8;

    return (
      <LazyMotion features={loadFramerMotionFeatures} strict>
        <MotionBox
          ref={ref}
          component="nav"
          sx={cx({ overflow: "hidden" }, sx)}
          initial={false}
          animate={open ? "open" : "close"}
          variants={{
            open: {
              height: "auto",
              transition: { delayChildren: 0.1, staggerChildren: 0.05 },
            },
            close: { height: 0 },
          }}
          {...props}
        >
          <List dense>
            {nav.map(({ id, name, href }) => (
              <MotionListItem
                key={id}
                disablePadding
                variants={{
                  open: { opacity: 1, y: 0 },
                  close: { opacity: 0, y: 16 },
                }}
              >
                {activeSection.id === id && (
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
                <ListItemButton component={Link} href={href}>
                  <ListItemText
                    primary={name}
                    primaryTypographyProps={{
                      variant: "button",
                      sx: {
                        color:
                          activeSection.id === id ? "primary.main" : undefined,
                      },
                    }}
                  />
                </ListItemButton>
              </MotionListItem>
            ))}
          </List>
        </MotionBox>
      </LazyMotion>
    );
  }
);

NavDropdown.displayName = "NavDropdown";

export default NavDropdown;

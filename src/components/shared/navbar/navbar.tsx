"use client";

import {
  AppBar,
  ClickAwayListener,
  Collapse,
  Container,
  List,
  Stack,
  Theme,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";

import nav from "@/constants/nav";
import useActiveSectionId from "@/hooks/use-active-section-id";

import Logo from "./logo";
import MenuButton from "./menu-button";
import NavButton from "./nav-button";
import NavListItem from "./nav-list-item";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const preferReducedMotion = useMediaQuery("(prefers-reduced-motion)");
  const activeSectionId = useActiveSectionId();

  useEffect(() => {
    if (mdUp) {
      setMenuOpen(false);
    }
  }, [mdUp]);

  function handleMenuToggle() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  function handleMenuClickAway() {
    setMenuOpen(false);
  }

  return (
    <AppBar>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Logo sx={{ ml: -1 }} />
          <Stack
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            component="nav"
            spacing={1}
            direction="row"
          >
            {Object.values(nav).map(({ id, name }) => (
              <NavButton
                key={id}
                id={id}
                label={name}
                active={activeSectionId === id}
              />
            ))}
          </Stack>
          <MenuButton
            sx={{
              display: {
                md: "none",
              },
            }}
            menuOpen={menuOpen}
            onToggleMenu={handleMenuToggle}
            edge="end"
          />
        </Toolbar>
        <Collapse
          in={menuOpen}
          timeout={preferReducedMotion ? 0 : "auto"}
          unmountOnExit
          sx={{ mx: -2 }}
        >
          <ClickAwayListener onClickAway={handleMenuClickAway}>
            <List dense component="nav" aria-label="nav list">
              {Object.values(nav).map(({ id, name }) => (
                <NavListItem
                  key={id}
                  id={id}
                  label={name}
                  active={activeSectionId === id}
                />
              ))}
            </List>
          </ClickAwayListener>
        </Collapse>
      </Container>
    </AppBar>
  );
}

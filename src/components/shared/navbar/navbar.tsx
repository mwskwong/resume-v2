"use client";

import {
  AppBar,
  ClickAwayListener,
  Container,
  Theme,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";

import Logo from "./logo";
import MenuButton from "./menu-button";
import NavDropdown from "./nav-dropdown";
import NavList from "./nav-list";

const NavBar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  useEffect(() => {
    if (mdUp) {
      setMenuOpen(false);
    }
  }, [mdUp]);

  return (
    <AppBar>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Logo sx={{ ml: -1 }} />
          <NavList sx={{ display: { xs: "none", sm: "unset" } }} />
          <MenuButton
            ref={menuButtonRef}
            sx={{ display: { sm: "none" } }}
            menuOpen={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            edge="end"
          />
        </Toolbar>
        <ClickAwayListener
          onClickAway={(event) => {
            if (
              menuButtonRef.current &&
              !menuButtonRef.current.contains(event.target as Node)
            ) {
              setMenuOpen(false);
            }
          }}
        >
          <NavDropdown
            open={menuOpen}
            sx={{ display: { sm: "none" }, mx: -2 }}
          />
        </ClickAwayListener>
      </Container>
    </AppBar>
  );
};

export default NavBar;

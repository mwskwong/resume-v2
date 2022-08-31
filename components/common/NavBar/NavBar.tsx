import { AppBar, Box, Collapse, Container, IconButton, List, Stack, Theme, Toolbar, useMediaQuery } from "@mui/material";
import { CloseRounded as Close, MenuRounded as Menu } from "@mui/icons-material";
import { FC, useEffect, useState } from "react";

import { ClickAwayListener } from "@mui/base";
import Logo from "./Logo";
import NavButton from "./NavButton";
import NavListItem from "./NavListItem";
import nav from "constants/nav";
import useActiveSectionId from "hooks/useActiveSectionId";
import useSx from "./useNavBarSx";

const NavBar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const activeSectionId = useActiveSectionId();
  const sx = useSx();

  useEffect(() => {
    if (mdUp) setMenuOpen(false);
  }, [mdUp]);

  const handleMenuToggle = () => setMenuOpen(menuOpen => !menuOpen);
  const handleMenuClickAway = () => setMenuOpen(false);

  return (
    <AppBar>
      <Container>
        <Toolbar disableGutters sx={sx.toolbar}>
          <Logo />
          <Stack
            sx={sx.navButtonContainer}
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
          <IconButton
            sx={sx.menuButton}
            onClick={handleMenuToggle}
            aria-label={menuOpen ? "close menu" : "open menu"}
          >
            {menuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Toolbar>
        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <ClickAwayListener onClickAway={handleMenuClickAway}>
            <List dense component="nav" sx={sx.list} aria-label="nav list">
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
};

if (process.env.NODE_ENV === "development") NavBar.whyDidYouRender = true;


export default NavBar;
import { AppBar, ClickAwayListener, Collapse, Container, IconButton, List, Stack, Toolbar, useMediaQuery } from "@mui/material";
import { CloseRounded as Close, MenuRounded as Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";

import type { FC } from "react";
import Logo from "./Logo";
import NavButton from "./NavButton";
import NavListItem from "./NavListItem";
import type { Theme } from "@mui/material";
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
            data-cy="navButtons"
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
            data-cy="menuButton"
          >
            {menuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Toolbar>
        <Collapse in={menuOpen} timeout="auto" sx={sx.navList} unmountOnExit>
          <ClickAwayListener onClickAway={handleMenuClickAway}>
            <List dense component="nav" aria-label="nav list" data-cy="navList">
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
"use client";

import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useMediaQuery, useScrollTrigger } from "@mui/material";
import { FC } from "react";

const ScrollToTopFab: FC = () => {
  const show = useScrollTrigger({ disableHysteresis: true });
  const preferReducedMotion = useMediaQuery("(prefers-reduced-motion)");

  const handleClick = () => window.scrollTo(0, 0);

  return (
    <Zoom
      in={show}
      style={{ transformOrigin: "bottom right" }}
      timeout={preferReducedMotion ? 0 : undefined}
      mountOnEnter
      unmountOnExit
    >
      <Fab
        aria-label="scroll to top"
        onClick={handleClick}
        data-cy="scrollToTop"
      >
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopFab;

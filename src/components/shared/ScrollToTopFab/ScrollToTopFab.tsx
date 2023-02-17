"use client";

import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import { Fab, useMediaQuery, useScrollTrigger, Zoom } from "@mui/material";
import { FC } from "react";

import styles from "./scrollToTop.module.css";

const ScrollToTopFab: FC = () => {
  const show =  useScrollTrigger({ disableHysteresis: true });
  const preferReducedMotion = useMediaQuery("(prefers-reduced-motion)");

  const handleClick = () => window.scrollTo(0, 0);

  return (
    <Zoom
      in={show}
      className={styles.zoom} 
      timeout={preferReducedMotion ? 0 : undefined}
      mountOnEnter
      unmountOnExit
    >
      <Fab aria-label="scroll to top" onClick={handleClick} data-cy="scrollToTop">
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopFab;

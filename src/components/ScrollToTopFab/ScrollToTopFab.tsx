"use client";

import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";
import { FC } from "react";

import useShowScrollToTopFab from "@/hooks/useShowScrollToTopFab";

import styles from "./scrollToTop.module.css";

const ScrollToTopFab: FC = () => {
  const show = useShowScrollToTopFab();

  const handleClick = () => window.scrollTo(0, 0);

  return (
    <Zoom in={show} className={styles.zoom} mountOnEnter unmountOnExit>
      <Fab aria-label="scroll to top" onClick={handleClick} data-cy="scrollToTop">
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

if (process.env.NODE_ENV === "development") ScrollToTopFab.whyDidYouRender = true;

export default ScrollToTopFab;

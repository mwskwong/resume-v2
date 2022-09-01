import { Fab, Zoom } from "@mui/material";

import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import type { FC } from "react";
import { HOME } from "constants/nav";
import styles from "./scrollToTop.module.css";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";

const ScrollToTopFab: FC = () => {
  const show = useShowScrollToTopFab();

  return (
    <Zoom in={show} mountOnEnter unmountOnExit >
      <Fab aria-label="scroll to top" href={`#${HOME.id}`} className={styles.zoom}>
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

if (process.env.NODE_ENV === "development") ScrollToTopFab.whyDidYouRender = true;

export default ScrollToTopFab;

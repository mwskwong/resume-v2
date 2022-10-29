import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";
import { HOME } from "constants/nav";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";
import { FC } from "react";

import styles from "./scrollToTop.module.css";

const ScrollToTopFab: FC = () => {
  const show = useShowScrollToTopFab();

  return (
    <Zoom in={show} mountOnEnter unmountOnExit>
      <Fab aria-label="scroll to top" href={`#${HOME.id}`} className={styles.zoom} data-cy="scrollToTop">
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

if (process.env.NODE_ENV === "development") ScrollToTopFab.whyDidYouRender = true;

export default ScrollToTopFab;

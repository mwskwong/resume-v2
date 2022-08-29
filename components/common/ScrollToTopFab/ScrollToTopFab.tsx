import { CSSProperties, FC, memo } from "react";
import { Fab, Zoom } from "@mui/material";

import { KeyboardArrowUpRounded as ArrowUp } from "@mui/icons-material";
import { HOME } from "constants/nav";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";

const ScrollToTopFab: FC = () => {
  const show = useShowScrollToTopFab();
  const zoomStyle: CSSProperties = { transformOrigin: "bottom right" };

  return (
    <Zoom in={show} mountOnEnter unmountOnExit style={zoomStyle}>
      <Fab aria-label="scroll to top" href={`#${HOME.id}`}>
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

if (process.env.NODE_ENV === "development") ScrollToTopFab.whyDidYouRender = true;

export default memo(ScrollToTopFab);

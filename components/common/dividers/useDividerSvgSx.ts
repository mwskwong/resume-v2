import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: {
    display: "block",
    bottom: "-1px",
    left: 0,
    right: 0,
    width: "100%",
    bgcolor: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    verticalAlign: "middle",
    overflow: "hidden",
    ...sx
  }
});

export default useSx;
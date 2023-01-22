import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
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
    overflow: "hidden"
  }
});

export default useStyles;
import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
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

export default useSx;

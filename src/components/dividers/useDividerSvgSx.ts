import { SxProps, Theme } from "@mui/material";

const useSx = () => {
  const root: SxProps<Theme> = {
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
  };

  return { root };
};

export default useSx;
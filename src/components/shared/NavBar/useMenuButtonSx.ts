import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
  root: {
    display: {
      xs: "inline-grid",
      md: "none"
    },
    position: "relative"
  },
  icon: {
    gridColumnStart: 1,
    gridRowStart: 1,
    transition: theme => theme.transitions.create(["rotate", "opacity"]),
    rotate: "0deg",
    opacity: 1
  },
  menuIconInactive: {
    rotate: "-45deg",
    opacity: 0
  },
  closeIconInactive: {
    rotate: "45deg",
    opacity: 0
  }
});

export default useSx;

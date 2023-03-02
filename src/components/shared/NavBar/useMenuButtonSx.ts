import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    root: {
      display: "inline-grid",
      position: "relative"
    },
    icon: {
      gridColumnStart: 1,
      gridRowStart: 1,
      transition: theme => theme.transitions.create(["rotate", "opacity"]),
      rotate: "0deg",
      opacity: 1,
      "@media (prefers-reduced-motion)": {
        transition: "none"
      }
    },
    menuIconInactive: {
      rotate: "-45deg",
      opacity: 0,
      "@media (prefers-reduced-motion)": {
        rotate: "0deg"
      }
    },
    closeIconInactive: {
      rotate: "45deg",
      opacity: 0,
      "@media (prefers-reduced-motion)": {
        rotate: "0deg"
      }
    }
  });

export default useSx;

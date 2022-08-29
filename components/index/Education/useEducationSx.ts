import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: sx,
  gridContainer: {
    alignItems: "center"
  },
  animationContainer: {
    display: "flex",
    justifyContent: "center"
  },
  animationWrapper: {
    width: "100%",
    maxWidth: {
      sm: 430,
      md: "none"
    }
  }
});

export default useSx;
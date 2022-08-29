import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: sx,
  stack: {
    alignItems: "center"
  }
});

export default useSx;
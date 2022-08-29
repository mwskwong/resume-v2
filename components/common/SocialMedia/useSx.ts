import { UseSx } from "types";

const useSx: UseSx = sx => ({
  root: {
    justifyContent: "center",
    ...sx
  }
});

export default useSx;
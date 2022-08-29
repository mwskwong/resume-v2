import { UseSx } from "types";

const useSx: UseSx = () => ({
  navButtonContainer: {
    display: {
      xs: "none",
      md: "flex"
    }
  },
  spacer: {
    flex: 1
  },
  menuButton: {
    display: {
      xs: "inline-flex",
      md: "none"
    }
  }
});

export default useSx;
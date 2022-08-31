import { UseSx } from "types";

const useSx: UseSx = () => ({
  toolbar: {
    justifyContent: "space-between"
  },
  navButtonContainer: {
    display: {
      xs: "none",
      md: "flex"
    }
  },
  menuButton: {
    display: {
      xs: "inline-flex",
      md: "none"
    },
    mr: "-8px"
  },
  list: {
    mx: "8px"
  }
});

export default useSx;
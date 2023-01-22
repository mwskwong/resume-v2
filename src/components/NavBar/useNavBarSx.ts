import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
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
  navList: {
    mx: "-12px"
  }
});

export default useSx;
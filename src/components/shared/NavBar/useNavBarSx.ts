import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    toolbar: {
      justifyContent: "space-between",
    },
    navButtonContainer: {
      display: {
        xs: "none",
        md: "flex",
      },
    },
    menuButton: {
      mr: "-8px",
      display: {
        md: "none",
      },
    },
    navList: {
      mx: "-12px",
    },
  });

export default useSx;

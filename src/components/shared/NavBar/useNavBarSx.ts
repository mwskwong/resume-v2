import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    toolbar: {
      justifyContent: "space-between",
    },
    logo: {
      ml: -1,
    },
    navButtonContainer: {
      display: {
        xs: "none",
        md: "flex",
      },
    },
    menuButton: {
      display: {
        md: "none",
      },
    },
    navList: {
      mx: -2,
    },
  });

export default useSx;

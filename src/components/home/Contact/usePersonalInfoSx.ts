import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    itemContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    title: {
      color: "primary.main",
      textAlign: "center",
      textTransform: "capitalize",
      mt: 2
    },
    value: {
      textAlign: "center",
      textDecoration: "none",
      zIndex: 1
    }
  });

export default useSx;

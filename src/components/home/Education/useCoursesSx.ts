import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    title: {
      typography: "subtitle2",
      color: "primary.main",
      textAlign: "center",
    },
    searchField: {
      position: "sticky",
      alignSelf: "center",
      width: "100%",
    },
  });

export default useSx;

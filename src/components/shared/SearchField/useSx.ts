import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    root: {
      display: "flex",
      alignItems: "center",
      borderRadius: 1,
      px: 2,
      maxWidth: 400,
      height: 56,
    },
    clearButton: {
      mx: -1,
    },
  });

export default useSx;

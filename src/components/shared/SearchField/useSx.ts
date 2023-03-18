import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    root: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      borderRadius: 1,
      px: 2,
      py: 1,
      maxWidth: 400,
    },
  });

export default useSx;

import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    root: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      borderRadius: 1,
      px: "16px",
      maxWidth: 400,
      height: 56,
    },
  });

export default useSx;

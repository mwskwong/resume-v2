import makeSx from "@/utils/makeSx";

const useSx = () =>
  makeSx({
    dot: {
      height: 6,
      width: 6,
      bgcolor: "primary.main",
      borderRadius: "50%",
      position: "absolute",
      bottom: 0,
      left: "calc(50% - 3px)",
    },
  });

export default useSx;

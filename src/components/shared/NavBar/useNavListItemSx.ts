import makeSx from "@/utils/makeSx";

const useSx = (params?: { active?: boolean }) =>
  makeSx({
    textPrimary: {
      typography: "button",
      color: params?.active ? "primary.main" : undefined,
    },
    dot: {
      height: 8,
      width: 8,
      bgcolor: "primary.main",
      borderRadius: "50%",
      position: "absolute",
      left: -4,
    },
  });

export default useSx;

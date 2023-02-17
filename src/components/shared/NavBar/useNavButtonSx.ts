import makeSx from "@/utils/makeSx";

const useSx = (params?: { active?: boolean }) => makeSx({
  active: {
    height: 6,
    width: 6,
    bgcolor: "primary.main",
    position: "absolute",
    bottom: 0,
    left: "calc(50% - 3px)",
    borderRadius: "50%",
    opacity: params?.active ? 1 : 0
  }
});

export default useSx;

import makeSx from "@/lib/makeSx";

const useSx = (params?: { active?: boolean }) => makeSx({
  textPrimary: {
    typography: "button",
    color: params?.active ? "primary.main" : undefined
  }
});

export default useSx;
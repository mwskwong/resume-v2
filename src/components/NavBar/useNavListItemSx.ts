import makeSx from "@/utils/makeSx";

const useSx = (active: boolean) => makeSx({
  textPrimary: {
    typography: "button",
    color: active ? "primary.main" : undefined
  }
});

export default useSx;
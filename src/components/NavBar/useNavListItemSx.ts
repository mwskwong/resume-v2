import asSxRecord from "@/utils/makeSx";

const useSx = (active: boolean) => asSxRecord({
  textPrimary: {
    typography: "button",
    color: active ? "primary.main" : undefined
  }
});

export default useSx;
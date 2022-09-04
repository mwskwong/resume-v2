import asSxRecord from "utils/asSxRecord";

const useSx = (active: boolean) => asSxRecord({
  textPrimary: {
    typography: "button",
    color: active ? "primary.main" : undefined
  }
});

export default useSx;
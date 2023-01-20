import asSxRecord from "@/utils/asSxRecord";

const useSx = () => asSxRecord({
  root: {
    typography: "h5",
    fontWeight: "medium",
    color: "text.primary"
  }
});

export default useSx;
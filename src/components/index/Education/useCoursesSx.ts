import asSxRecord from "@/utils/asSxRecord";

const useSx = () => asSxRecord({
  title: {
    typography: "subtitle2",
    color: "primary.main",
    textAlign: "center"
  },
  card: {
    bgcolor: "background.sectionSecondary"
  }
});

export default useSx;
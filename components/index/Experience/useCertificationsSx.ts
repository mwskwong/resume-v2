import { UseSx } from "types";

const useSx: UseSx = sx => ({
  title: {
    typography: "subtitle2",
    color: "primary.main",
    textAlign: "center"
  },
  card: {
    bgcolor: "background.sectionTertiary"
  }
});

export default useSx;
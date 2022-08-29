import { UseSx } from "types";

const useSx: UseSx = () => ({
  hello: {
    textAlign: "center"
  },
  name: {
    color: "primary.main"
  },
  occupationContainer: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row"
    },
    alignItems: "center",
    justifyContent: "center",
    my: 2
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: "50%",
    bgcolor: "text.primary",
    mx: 2,
    my: 1
  },
  jobTitle: {
    typography: "subtitle1"
  },
  intro: {
    textAlign: "center"
  }
});
export default useSx;
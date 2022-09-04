import asSxRecord from "utils/asSxRecord";

const useSx = () => asSxRecord({
  root: {
    color: "text.primary"
  },
  heading: {
    textAlign: "center",
    textTransform: "capitalize"
  },
  divider: {
    width: 32,
    mx: 1
  },
  separatorContainer: {
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default useSx;
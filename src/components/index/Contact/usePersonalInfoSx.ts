import asSxRecord from "utils/asSxRecord";

const useSx = () => asSxRecord({
  root: {
    justifyContent: "center",
    height: "100%"
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: "primary.main",
    textAlign: "center",
    textTransform: "capitalize",
    mt: 2
  },
  value: {
    textAlign: "center",
    textDecoration: "none"
  }
});

export default useSx;
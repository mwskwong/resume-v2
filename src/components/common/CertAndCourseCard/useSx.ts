import asSxRecord from "utils/asSxRecord";

const useSx = (organization: string) => asSxRecord({
  cardContent: {
    display: "flex",
    alignItems: "center"
  },
  organization: {
    typography: "body2",
    textTransform: "capitalize"
  },
  icon: {
    mr: "16px"
  },
  status: {
    color: "text.secondary"
  }
});

export default useSx;
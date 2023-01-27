import makeSx from "@/utils/makeSx";

const useSx = (organization: string) => makeSx({
  cardContent: {
    display: "flex",
    alignItems: "center"
  },
  organization: {
    typography: "body2",
    textTransform: "capitalize",
    color: `${organization}.dark`
  },
  icon: {
    mr: "16px"
  },
  status: {
    color: "text.secondary"
  }
});

export default useSx;
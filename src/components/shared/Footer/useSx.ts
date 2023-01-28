
import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
  footerDivider: {
    color: "background.sectionPrimary"
  },
  footer: {
    bgcolor: "background.sectionPrimary",
    color: "text.secondary",
    py: 4
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (min-width: 1300px)": {
      flexDirection: "row"
    }
  },
  text: {
    color: "inherit",
    fontWeight: "regular",
    width: "100%",
    textAlign: "center",
    "@media (min-width: 1300px)": {
      textAlign: "unset"
    }
  },
  loveIcon: {
    verticalAlign: "middle"
  }
});

export default useSx;
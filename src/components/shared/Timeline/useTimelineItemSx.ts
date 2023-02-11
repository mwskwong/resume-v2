import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
  periodDesktop: {
    typography: "body2",
    color: "text.secondary",
    display: {
      xs: "none",
      md: "unset"
    },
    flex: 0.28,
    pt: "7px"
  },
  periodMobile: {
    typography: "body2",
    color: "text.secondary",
    display: {
      md: "none"
    },
    pt: "1px"
  },
  title: {
    typography: "subtitle1"
  },
  subtitle: {
    color: "primary.main"
  },
  listItemIcon: {
    minWidth: "initial",
    my: "4px",
    mr: "16px",
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    height: 24
  },
  listItemNumber: {
    typography: "overline",
    color: "text.secondary",
    userSelect: "none",
    lineHeight: "initial"
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    ml: -0.5,
    mt: 1
  },
  tag: {
    m: 0.5
  },
  supportingDocuments: {
    mt: 1
  }
});

export default useSx;

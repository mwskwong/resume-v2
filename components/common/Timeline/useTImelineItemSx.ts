import { UseSx } from "types";

const useSx: UseSx = () => ({
  periodDesktop: {
    typography: "body2",
    color: "text.secondary",
    display: {
      xs: "none",
      md: "unset"
    },
    flex: .28
  },
  timelineContent: {
    pb: 3,
    pr: 0
  },
  periodMobile: {
    typography: "body2",
    color: "text.secondary",
    display: {
      md: "none"
    }
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
  downloadButton: {
    mt: 1
  }
});

export default useSx;
import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
  title: {
    typography: "subtitle2",
    color: "primary.main",
    textAlign: "center",
    mb: 2
  },
  stack: {
    alignItems: "center"
  },
  icon: {
    fontSize: 60
  },
  subtitle: {
    typography: "subtitle1",
    color: "primary.main",
    textTransform: "capitalize"
  },
  skillsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  skill: {
    m: .5,
    color: "inherit"
  }
});

export default useSx;
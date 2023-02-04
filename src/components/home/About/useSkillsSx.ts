import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
  title: {
    typography: "subtitle2",
    color: "primary.main",
    textAlign: "center",
    mb: 2
  },
  grid: {
    justifyContent: "center"
  },
  stack: {
    alignItems: "center"
  },
  avatar: {
    width: 60,
    height: 60,
    bgcolor: theme => `rgba(${theme.vars.palette.primary.mainChannel} / 0.1)`,
    color: "text.primary"
  },
  subtitle: {
    typography: "subtitle1",
    color: "primary.main"
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
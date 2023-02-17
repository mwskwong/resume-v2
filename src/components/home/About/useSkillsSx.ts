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
    height: 60
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
    m: 0.5
  }
});

export default useSx;

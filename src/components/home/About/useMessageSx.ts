import makeSx from "@/utils/makeSx";

const useSx = () => makeSx({
  hello: {
    textAlign: "center"
  },
  name: {
    color: "primary.main"
  },
  occupationContainer: {
    display: "flex",
    justifyContent: "center",
    my: 2
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: "50%",
    bgcolor: "text.primary",
    mx: 2,
    my: 1
  },
  jobTitle: {
    typography: "subtitle1"
  },
  intro: {
    textAlign: "center"
  }
});

export default useSx;
